
const {test, expect} = require('@playwright/test');


test('Upload Files', async ({page})=>{

    await page.goto('https://webdriveruniversity.com/File-Upload/index.html');
    await page.waitForSelector('id=myFile')
    //await page.locator('id=myFile').click()

    await page.locator('#myFile').setInputFiles('tests/Folder/File01.pdf')
    await page.waitForTimeout(5000);
   
     // Enabling or Listen for the alert BEFORE clicking the button
    page.on('dialog', async dialog => {
        const alertText = dialog.message();
        console.log('Alert text:', alertText);
        expect(alertText).toContain('Your file has now been uploaded'); // example
        await dialog.accept(); // Clicks OK
    });

    await page.locator('#submit-button').click();
    


    await page.waitForTimeout(5000);


})

