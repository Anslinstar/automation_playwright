import {test,chromium} from '@playwright/test';

// test('dropdown', async({page})=>{
//     await page.goto('https://testautomationcentral.com/demo/dropdown.html')
//     await page.waitForTimeout(3000)
//     await page.locator('(//select[@class="form-select block w-full mt-1"])[1]').selectOption({ value: 'option2' });
//     await page.waitForTimeout(3000)


// })

// test('dropdownmulti', async({page})=>{
//     await page.goto('https://testautomationcentral.com/demo/dropdown.html')
//     await page.waitForTimeout(3000)
//     await page.locator('//button[@class="tab px-4 py-2 text-blue-500 hover:bg-blue-200 focus:outline-none active"]').selectOption([{ value: 'option1' },
//     { value: 'option2' }
// ]);
//     await page.waitForTimeout(3000)
    

// })

// test('dropdownmulti', async ({ page }) => {
//     await page.goto('https://testautomationcentral.com/demo/dropdown.html');
//     await page.locator('//button[@class="tab px-4 py-2 text-blue-500 hover:bg-blue-200 focus:outline-none active"]').click();

//     await page.locator('//select[@class="form-multiselect block w-full mt-1"]').selectOption([
//         { value: 'option1' },
//         { value: 'option2' }
//     ]);

//     await page.waitForTimeout(3000);
// });


// test('JS alerts',async({page})=>{
//     await page.goto("https://")
//     page.on('dialog',async(dialog)=>{
//         console.log(dialog.message());
//         await page.waitForTimeout(3000)
//         if(dialog.type()==='alert'){
//             dialog.accept()
//         }
//         else if(dialog.type()==='confirm'){
//             dialog.dismiss()
//         }
//         else{
//             dialog.accept("anslin")
//         }

    
    
//         await dialog.accept();

//     })
//     await page.locator('#alertButton').click()
//     await page.locator('#confirmButton').click()
//     await page.locator('#alertButton').click()

// })


//file upload 


// test('upload', async({page})=>{
//     await page.goto('https://www.file.io/')
//     await page.waitForTimeout(3000)
//     await page.locator("//label[@class='css-zpjtsm e12cce780']").setInputFiles("C:\\Users\\Star\\Documents\\playwright_project\\project_1\\tests\\textfile.txt")
//     await page.waitForTimeout(3000)
//     })


//file download

test('download', async({page})=>{
    await page.goto('https://demoqa.com/upload-download')
    await page.waitForTimeout(3000)
    const [download] = await Promise.all([
        page.waitForEvent("DOW")
    ])
    await page.locator("//label[@class='css-zpjtsm e12cce780']").setInputFiles("C:\\Users\\Star\\Documents\\playwright_project\\project_1\\tests\\textfile.txt")
    await page.waitForTimeout(3000)
    })


// iframes
test('download', async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html')
   
    const frame2= await page.frameLocator('#frm2')
    await frame2.locator('#firstName').fill("anslin")
    await page.waitForTimeout(3000)
    const frame3= await page.frameLocator('#frm3')
    const frame4 = await frame3.frameLocator('#frm2')
    await frame4.locator('#lastName').fill("anslin")
    await frame4.locator('#englishchbx').uncheck()
    await frame4.locator('#englishchbx').check()
    
   
    await page.waitForTimeout(3000)



})