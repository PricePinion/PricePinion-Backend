const fs = require("fs");
const { MongoClient } = require("mongodb");

// Read each of the JSON files containing data
const productsCollectionAsJSON = fs.readFileSync("createDB/pricepinion.json");

// Parse the JSON files
const productsObj = JSON.parse(productsCollectionAsJSON);

// Connection URI
const uri = "mongodb://admin:pricepinion@localhost:27017/";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Get the database
        const db = client.db("pricepinion");

        // Get the collections we need
        const productsCollection = db.collection("products");

        // Clear out each collection
        await productsCollection.deleteMany({});

        // Use insertMany to insert all of the information
        await productsCollection.insertMany(productsObj);

        console.log("Database populated successfully!");
    } catch (error) {
        console.error(
            "An error occurred while populating the database: ",
            error
        );
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

run().catch(console.dir);
