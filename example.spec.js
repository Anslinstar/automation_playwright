// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
//li[contains(@class,"product-base")]


import { test } from '@playwright/test';

test('myntra_search', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    const prices = page.locator("//li[@class="product-base"]");

    console.log("Number of prices:", await prices.count());
});