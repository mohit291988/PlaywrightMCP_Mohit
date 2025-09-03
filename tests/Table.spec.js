const {test, expect} = require('@playwright/test');

test("handling table", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable');

    //total number of rows & columns
    const columns = await table.locator('thead tr th')
    console.log('Number of Columns:', await columns.count())
    expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log('number of rows:', await rows.count())
    expect(await rows.count()).toBe(5)


    // const matchedRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // })

    // await matchedRow.locator('input').check()
    // await page.waitForTimeout(5000)

    //select multiple products by re-usable function

    //create a re-usable function
    async function selectProduct(rows, page, name) //page is fixture
    {
        const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator('input').check()
    await page.waitForTimeout(5000)
    }


    //call the selectProduct funciton to select the particular product

    await selectProduct(rows, page,'Tablet')
    await selectProduct(rows, page, 'Smartwatch')


    //print all product details using loop

    for (let i=0;i<await rows.count();i++){
        
        const currentRow = rows.nth(i)
        const currentTDs = rows.locator('td')

        for(let j=0;j<await currentTDs.count()-1;j++){

            console.log(await currentTDs.nth(j).textContent())
        
        }
        
    }
    

})
