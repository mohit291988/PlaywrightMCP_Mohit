const {test, expect} = require('@playwright/test');

test('Home Page',async ({page})=>{

await page.goto('https://webdriveruniversity.com/');
const pageTitle = page.title();
console.log('Page Title is: ', pageTitle);

await expect(page).toHaveTitle('Automation & AI Testing Courses by Gianni Bruno | WebDriver University');
const pageURL = page.url();
console.log('Page URL:', pageURL);


await expect(page).toHaveURL('https://webdriveruniversity.com/')
await page.close;
})