const { expect } = require("@playwright/test");

exports.LoginPage = 

class LoginPage {
    
     constructor(page) {   //Page fixture as a parameter
        this.page = page;
        this.myAccountLink="//span[text()='My Account']";
        this.loginLink = "//a[text()='Login']";
        this.usernameInput='id=input-email';
        this.passwordInput='id=input-password';
        this.loginButton="//input[@type='submit']";
        this.logOutLink="(//a[@href='https://naveenautomationlabs.com/opencart/index.php?route=account/logout'])[1]";
        this.editAccountInfoLink = "//*[text()='Edit your account information']";
        this.homePageBtn = "(//*[@class='breadcrumb']/li)[1]/a/i";
        this.featuredLink = "//h3[text()='Featured']";
    }

    async gotoLoginPage() {
        await this.page.goto('https://naveenautomationlabs.com/opencart/')
    }

    async login(username, password) {
        await this.page.locator(this.myAccountLink).click();
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
        await expect(this.page.locator(this.editAccountInfoLink)).toBeVisible();  
         
    }

    async goToHomePage() {
        await this.page.locator(this.homePageBtn).click();
        await expect(this.page.locator(this.featuredLink)).toBeVisible(); 

    }


    async logout() {
        await this.page.locator(this.myAccountLink).click();
        await this.page.locator(this.logOutLink).click();
    }

   
}
