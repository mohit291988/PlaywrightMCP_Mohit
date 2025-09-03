const {test, expect} = require('@playwright/test');


test('LocateMultipleElements', async ({page})=>{
    
    await page.goto('https://webdriveruniversity.com/');
    const links = await page.$$('a');

    for(const link of links)
    {
       const linkText =  await link.textContent();
        console.log(linkText);
    }
})