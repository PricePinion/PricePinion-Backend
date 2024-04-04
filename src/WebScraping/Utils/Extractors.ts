/**
 * Here we export all the various information extractors we will use for the various websites.
 * Consits of Product Image, Product link extractor, and AriaLabel extractors.
 */
import { ElementHandle } from "puppeteer";

/**
 * This function is responsible for extracting the product image
 * @param product This is the individual product cell
 * @param classStructure This is the class structure of the element we wish to extract.
 * @returns The image tag's source value. We'll save the image in the future. Returns null if the element wasn't found.
 */
export const extractProductImage = async (
    product: ElementHandle,
    classStructure: string
) => {
    const productImage = await product.$(classStructure);
    if (productImage) {
        return productImage.evaluate((element) => element.getAttribute("src"));
    } else {
        return null;
    }
};

/**
 * This function is responsible for extracting the current product's URL.
 * @param product This is the individual product cell
 * @param classStructure This is the class structure of the element we wish to extract.
 * @returns The product's URL. Returns null if the element wasn't found.
 */
export const extractProductURL = async (
    baseURL: string,
    product: ElementHandle,
    classStructure: string
) => {
    const productURL = await product.$(classStructure);
    if (productURL) {
        const productHREF = await productURL.evaluate((element) =>
            element.getAttribute("href")
        );
        return baseURL + productHREF;
    } else {
        return null;
    }
};

/**
 * This function is resonsible for extracting information from a Tag's AriaLabel.
 * AriaLabel's contain product names and prices on Kroger sites so we can reuse this function for both.
 * @param product This is the individual product cell
 * @param classStructure This is the class structure of the element we wish to extract.
 * @returns The aria label for an element. Returns null if the element wasn't found
 */
export const extractFromAria = async (
    product: ElementHandle,
    classStructure: string
) => {
    const productElement = await product.$(classStructure);
    if (productElement) {
        return productElement.evaluate((element) => element.ariaLabel);
    } else {
        return null;
    }
};