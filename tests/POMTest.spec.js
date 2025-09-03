
const {test, expect} = require('@playwright/test');
import {LoginPage} from './Page_Object/LoginPage'; 
import {HomePage} from './Page_Object/HomePage'; 


test('LoginTest', async ({page})=>{

    //login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('mohit29.1988@gmail.com','admin1234');
   
    await page.waitForTimeout(5000);
    await login.goToHomePage();
    //await login.logout()
    
    //Home Page
    const home = new HomePage(page);
    await home.addProductToCart('iPhone')

    //Cart Pagec
    




})




// test.afterEach(async()=>{


//    await page.locator('#logout2').click()

//     })


    

