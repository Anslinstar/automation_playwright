
//window handles

test('webtables', async({page}) => {
    await page.goto("")
    await page.locator()
    await page.keyboard.press('Enter')
    const [page2] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText('').click() 
    
    ])

    await page2.waitForLoadState();//('load','domcontetloaded','networkidle',)
    await page.waitForTimeout(3000)
    await page.bringToFront()
    await page.waitForTimeout(3000)
    const[page3] = await promise.all([
        isContext.waitForEvent('[page', page.getByText('').click())
    ])
})

//Mouse Action 

test('Mouse action', async({page})=> {
    await page.locator().hover()
    await page.locator().click()
    await page.locator().click()({button:'right'})
    await page.mouse.wheel(H,V)
    await page.locator().dblClick()
    page.locator('source').dragTo(await page.locator('target'))
    await page.mouse.move(H,V)
    await page.mouse.up()

})

//download
const[Download_file]=await promiseHooks.all([
    page.waitForEvent('download'),
    page.getByRole('button',{name:download}).click()
])
await Download_file.saveAs

//screenshot

await page.goto("")
await page.screenshot({path:'./screenshot/flipkart_page.png',fullpage:true});

//screenrecord 
await page.locator('locator').setInputFiles('./png');
await page.setInputFiles('locator',['./file', './file2'])
await page.setInputFile('locator',[]);

//alerts
page.on('dialog',async(alert)=>{ // enent handlers:on,why async(alert)- alert or dialog anything, on and once 
    console.log(alert.message());
    console.log(alert.type())
    if(alert.type()==='alert')
    {
        alert.accept();

    }
})

//frames

const frame = await page.framelocator("")// page.frame--we cannot chain//type and fill -another method for type//sequentiallypress
await freemem.getByText("").click()
const frame = await page.framelocator("").framelocator("")

//screenrecorder
const context = await browser.newContext({
    recordVideo:{
        dir: './folder/'
    }

})

const browser =  await chromium.launch(headless:true,
    channel :'chrome',
   
    
)