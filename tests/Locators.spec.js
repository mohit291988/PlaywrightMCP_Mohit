const {test, expect} = require('@playwright/test');


test('Locators', async ({page})=>{

    await page.goto("https://webdriveruniversity.com/")

    //click on login button
    await page.locator('id=text').fill("mohit")
    await page.fill('id=password','New Password')

    await page.locator('id=password').fill("pass123");
    await page.click('id=login-button');

    const submlitLink = page.locator('id=login-button')
    await expect(submlitLink).toBeVisible();
    await page.close();
    





})

