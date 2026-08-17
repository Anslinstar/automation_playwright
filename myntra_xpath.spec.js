// import { test } from '@playwright/test';

// test('myntra_search', async ({ page }) => {

//     await page.goto('https://www.myntra.com/boy-tshirts');

//     await page.waitForTimeout(3000);

//     const kids_tshirt = page.locator("//li[@class='product-base']");

//     const countof = await kids_tshirt.count();

//     console.log("Number of products:", countof);

//     // Locate the selling price
//     const priceLocator = page.locator(
//         '//div[@class="product-price"]//span[@class="product-discountedPrice"] | //div[@class="product-price"][not(.//span[@class="product-discountedPrice"])]'
//     );
    

//     // Get all price text
//     const priceTexts = await priceLocator.allTextContents();

//     console.log("Price texts:", priceTexts);

//     // Convert "Rs
//     const prices = priceTexts.map(text =>
//         Number(text.replace(/[^0-9]/g, ''))
//     );

//     console.log("Prices:", prices);

//     // Find minimum price
//     const minimumPrice = Math.min(...prices);

//     console.log("Minimum price:", minimumPrice);
// });

// //li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class = "product-discountPercentage"]or text() and not(@class)]|//div[@class="product-price"]//span[@class="product-discountedPrice"] 



// import { test } from '@playwright/test';

// test('myntra_search', async ({ page }) => {

//     await page.goto('https://www.myntra.com/boy-tshirts');

//     await page.waitForTimeout(3000);

//     // Product names
//     const productNames = await page.locator("//h4[@class='product-product']").allTextContents();

//     // Prices
//     const priceTexts = await page.locator(
//         '//div[@class="product-price"]//span[@class="product-discountedPrice"] | //div[@class="product-price"][not(.//span[@class="product-discountedPrice"])]/span[1]'
//     ).allTextContents();

//     const prices = priceTexts.map(text =>
//         Number(text.replace(/[^0-9]/g, ''))
//     );

//     const minimumPrice = Math.min(...prices);
//     const minimumPrice = Math.min(...prices);

// console.log("Minimum Price:", minimumPrice);

// const product = page
//     .locator("//li[@class='product-base']")
//     .filter({
//         has: page.locator(
//             `//div[contains(@class,'product-price')]//*[contains(text(),'${minimumPrice}')]`
//         )
//     })
//     .first();

// const productName = await product
//     .locator("h4[@class='product-product']")
//     .innerText();

// console.log("Product Name:", productName);

//     console.log("Minimum Price:", minimumPrice);
//     console.log("Product Name:", minProductName);

// });


// import { test } from '@playwright/test';

// test('myntra_search', async ({ page }) => {

//     await page.goto('https://www.myntra.com/boy-tshirts');

//     await page.waitForTimeout(3000);

//     // Get all prices
//     const priceTexts = await page.locator(
//         '//div[@class="product-price"]//span[@class="product-discountedPrice"] | //div[@class="product-price"][not(.//span[@class="product-discountedPrice"])]/span[1]'
//     ).allTextContents();

//     // Convert prices to numbers
//     const prices = priceTexts
//         .map(text => Number(text.replace(/[^0-9]/g, '')))
//         .filter(Boolean);

//     console.log("Prices:", prices);

//     // Find minimum price
//     const minimumPrice = Math.min(...prices);

//     console.log("Minimum Price:", minimumPrice);

//     // Find product name using minimum price
//      // Find product name using minimum price
//     const productName = await page.locator(
//     `(//li[@class='product-base']
//         [
//         descendant::div[@class='product-price']
//         /descendant::span[@class='product-discountedPrice']
//         [contains(text(),'${minimumPrice}')]

//         or

//         descendant::div[@class='product-price']
//         [not(descendant::span[@class='product-discountedPrice'])]
//         /span[1]
//         [contains(text(),'${minimumPrice}')]
//         ]
//         /descendant::h4[@class='product-product']
//     )[1]`
//     ).innerText();

// console.log("Product Name:", productName);

// console.log(productbrand);

   


// console.log("Product Name:", productName);

// });


// 
import { test } from '@playwright/test';

test('myntra_search', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    await page.waitForTimeout(3000);

    // Get all prices
    const priceTexts = await page.locator(
        '//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice"] | //li[@class="product-base"]//div[@class="product-price"]/span[not(span) and not(@class)]'
    ).allTextContents();

    // Convert prices to numbers
    const prices = priceTexts
        .map(text => Number(text.replace(/[^0-9]/g, '')))
        .filter(price => !isNaN(price));

    console.log("Prices:", prices);

    // Find minimum price
    const minimumPrice = Math.min(...prices);

    console.log("Minimum Price:", minimumPrice);

    // Find product name using minimum price
    const productLocator = page.locator(
  `//li[@class="product-base"]/descendant::div[@class="product-price"]/span[
    span[@class="product-discountedPrice" and text()="${minimumPrice}"]
    or
    not(@class) and text()="${minimumPrice}"
  ]//parent::div//preceding-sibling::h3`
);

    const productName = await productLocator.innerText();

    console.log("Product Name:", productName);
});