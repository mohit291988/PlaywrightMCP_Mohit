import { test, expect, devices } from '@playwright/test';
import { time } from 'console';


test('page screenshot', async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/')
   
 
});

test('Full Page Screenshot', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/')
    await page.screenshot({path: 'tests/screenshot/'+Date.now()+'FullPage.png', fullPage:true})
 
});

test('Element Screenshot', async ({ page }) => {
     await page.goto('https://webdriveruniversity.com/')
     await page.click('//*[@id="udemy-promo-thumbnail"]/div/div[1]/a')
 
 
});