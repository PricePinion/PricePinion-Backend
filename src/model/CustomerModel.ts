import * as Mongoose from "mongoose";
import { ICustomerModel } from "../interfaces/ICustomerModel";
import { logger } from "@logger";
import crypto from "crypto";
import { ProductModel } from "@product-model";

class CustomerModel {
    public schema: any;
    public model: any;
    public dbConnectionString: string;
    public Products: ProductModel;

    public constructor(DB_CONNECTION_STRING: string, Products: ProductModel) {
        this.dbConnectionString = DB_CONNECTION_STRING;
        this.createSchema();
        this.Products = Products;
        this.createModel();
    }

    public createSchema() {
        this.schema = new Mongoose.Schema(
            {
                customerID: String,
                customerName: String,
                customerEmail: String,
                saveForLater: [{ type: Mongoose.Schema.Types.ObjectId, ref: "Product" }], // Reference product model for type safety and data integrity
                googleId: String,
                displayName: String,
                firstName: String,
                lastName: String,
                image: String,
            },
            { collection: "customers" }
        );
    }

    public async createModel() {
        try {
            await Mongoose.connect(this.dbConnectionString);
            if (Mongoose.models.Customers) {
                this.model = Mongoose.model<ICustomerModel>("Customers");
            } else {
                this.model = Mongoose.model<ICustomerModel>("Customers", this.schema);
            }
        } catch (error) {
            logger.error(error);
        }
    }

    public async findOrCreateGoogleUser(profile) {
        const { id, displayName, name, photos, emails } = profile;
        let customer = await this.model.findOne({ googleId: id });

        if (!customer) {
            customer = new this.model({
                customerID: crypto.randomBytes(16).toString("hex"),
                googleId: id,
                displayName,
                firstName: name.givenName,
                lastName: name.familyName,
                image: photos[0].value,
                customerEmail: emails[0].value,
                customerName: `${name.givenName} ${name.familyName}`,
            });
            await customer.save();
        }

        return customer;
    }

    public async saveComparisonForLater(req, res) {
        const productID = req.body.productID;

        // Validate product ID (optional, but recommended for security)
        if (!Mongoose.Types.ObjectId.isValid(productID)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        const productRecord = await this.Products.model
            .findOne({ _id: productID }) // Use Mongoose's ObjectID for comparison
            .select("-_id -__v"); // Exclude unnecessary fields

        if (!productRecord) {
            return res.status(404).json({ message: "Product not found" });
        }

        const customerRecord = await this.model.findOne({ googleId: req.user.googleId });

        try {
            if (this.isProductComparisonInSFL(productRecord, customerRecord)) {
                res.status(409).json({
                    message: "Product Comparison Already Exists In Customer's Save For Later!",
                });
            } else {
                customerRecord.saveForLater.push(productRecord);
                await customerRecord.save();
                res.status(201).json({
                    message: "Product Comparison Added Successfully.",
                });
            }
        } catch (error) {
            logger.error(error);
            res.sendStatus(500);
        }
    }

    private isProductComparisonInSFL(productRecord: any, customerRecord: any): boolean {
        return customerRecord.saveForLater.some(
            (productComparisonInSFL) => productComparisonInSFL.toString() === productRecord._id.toString() // Use toString() for ObjectID comparison
        );
    }

    public async retrieveSaveForLater(req, res) {
        // Consider pagination for large collections (optional)
        const limit = parseInt(req.query.limit as string, 10
            || 10); // Default limit of 10 if not provided
        const skip = parseInt(req.query.skip as string, 10) || 0; // Default skip of 0

        const query = this.model.findOne({ googleId: req.user.googleId })
            .select("-_id -__v") // Exclude unnecessary fields
            .populate("saveForLater", "-_id -__v") // Populate product details with limited fields
            .limit(limit)
            .skip(skip);

        try {
            const customerRecord = await query.exec();
            res.json(customerRecord);
        } catch (error) {
            logger.error(error);
            res.sendStatus(500);
        }
    }

    public async deleteAllProductsFromSFL(req, res) {
        const query = this.model.findOne({ googleId: req.user.googleId });
        try {
            const customerRecord = await query.exec();
            customerRecord.saveForLater = [];
            await customerRecord.save();
            res.status(200).json({
                message: "All Product Comparisons in Save For Later were Removed!",
            });
        } catch (error) {
            logger.error(error);
            res.sendStatus(500);
        }
    }

    public async deleteOneProductFromSFL(req, res) {
        const productID = req.params.productID;

        // Validate product ID (optional, but recommended for security)
        if (!Mongoose.Types.ObjectId.isValid(productID)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        const query = this.model.findOne({ googleId: req.user.googleId });
        try {
            const customerRecord = await query.exec();
            customerRecord.saveForLater = customerRecord.saveForLater.filter(
                (productComparisonInSFL) => productComparisonInSFL._id.toString() !== productID // Use Mongoose's ObjectID for comparison
            );
            await customerRecord.save();
            res.status(200).json({
                message: "The Specific Product Comparison has been removed from customer's save for later!",
            });
        } catch (error) {
            logger.error(error);
            res.sendStatus(500);
        }
    }
}

export { CustomerModel };
