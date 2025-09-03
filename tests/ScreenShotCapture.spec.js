import { test, expect, devices } from '@playwright/test';
import { time } from 'console';


test('page screenshot', async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/')
    await page.screenshot({path: 'tests/screenshot/'+Date.now()+'Homepage.png'})
 
});

test('Full Page Screenshot', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/')
    await page.screenshot({path: 'tests/screenshot/'+Date.now()+'FullPage.png', fullPage:true})
 
});

test('Element Screenshot', async ({ page }) => {
     await page.goto('https://webdriveruniversity.com/')
     await page.locator('//*[@id="udemy-promo-thumbnail"]/div/div[1]/a').screenshot({path: 'tests/screenshot/'+Date.now()+'Element.png'})
 
 
});