
import { test } from '@playwright/test';

test('amazon dropdown text extract', async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
    
    await page.locator("//span[contains(text(),'Account & Lists')]").hover();
    const options = await page.locator('//div[@id="nav-al-your-account"]/ul/li').allTextContents();
<<<<<<< HEAD
=======

    console.log(options);
    await page.locator("//span[contains(text(),'Account & Lists')]").hover();
    const option = await page.locator("//span[contains(text(),'Account & Lists ')]").click()
    console.log(await option.count())
    console.log(await option.allInnerTexts())


>>>>>>> 8c9b5c9cc389d16dc349abe54a4c2cdfa621bbf9
})
//load, domcontentloaded,networkidle

//div[@id="nav-al-your-account"]/ul/li