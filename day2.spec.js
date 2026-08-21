import {test} from '@playwright/test';

test('amazon_search', async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
    await page.locator('#twotabsearchtextbox').fill("laptop")
    
    await page.locator('#nav-search-submit-button').click()


})
