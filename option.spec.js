
import { test } from '@playwright/test';

test('amazon dropdown text extract', async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
    
    await page.locator("//span[contains(text(),'Account & Lists')]").hover();
    const options = await page.locator('//div[@id="nav-al-your-account"]/ul/li').allTextContents();
})
//load, domcontentloaded,networkidle

//div[@id="nav-al-your-account"]/ul/li