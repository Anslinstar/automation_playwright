import { test } from '@playwright/test';

test('myntra_search', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    await page.waitForTimeout(3000);

    // Get all prices
    const priceTexts = await page.locator(
        '//div[@class="product-price"]//span[@class="product-discountedPrice"] | //div[@class="product-price"][not(.//span[@class="product-discountedPrice"])]/span[1]'
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
          `//li[@class="product-base"]
   /descendant::div[@class="product-price"]
   /span[
     span[@class="product-discountedPrice" and text()="${minimumPrice}"]
     or
     (text()="${minimumPrice}" and not(@class))
   ]
   /parent::div
   /preceding-sibling::h3[@class="product-brand"]`
);


    const productName = await productLocator.innerText();

    console.log("Product Name:", productName);
});