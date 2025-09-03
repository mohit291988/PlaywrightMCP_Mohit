exports.HomePage =
class HomePage {

    constructor(page) {

        this.page = page;
        this.productList = "//div[@class='product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12']/div/div[2]/h4/a";
        this.addToCartBtn = 'id=button-cart';       
    }
        
        async addProductToCart(productName) {
            const productList = await this.page.$$(this.productList);
            expect(productList.length).toBeGreaterThan(0);
            
            for (const product of productList) {
                if(productName === await product.textContent()) {
                    await product.click()
                    break;
                }

                await this.addProductToCart.click();
            }
        }
}