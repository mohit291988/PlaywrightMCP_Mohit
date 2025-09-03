
const {test, expect} = require('@playwright/test');

let page;

test.beforeEach('Login', async ({browser})=>{

    await page.goto('https://demoblaze.com/index.html')
    
    //login
    page = await browser.newPage();
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()

})


test('HomePage', async ({page})=>{

    //Home Page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)

})


test('AddProductToCartTest', async ({page})=>{


    //Add Product to Cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click()

    page.on('dialog', async dialog=>{
        
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })


test.afterEach(async()=>{


   await page.locator('#logout2').click()

    })


    
})

