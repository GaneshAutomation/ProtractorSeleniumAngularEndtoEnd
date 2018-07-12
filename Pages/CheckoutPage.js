var CheckOutPage = function(){
 
    this.AddtoCart = function(){
        element(by.xpath("//*[@id='DIV-results']/div[1]/div/div[3]/div[2]/span/span[1]/a")).click();
    };

    this.MouseOverAndClickCheckout  = function(){
        browser.actions()
            .mouseMove(element(by.xpath("//*[@id='top']/li[2]/ul/li[6]/ul/li[3]/a")))
            .mouseMove(element(by.xpath('//*[@id="top"]/li[2]/ul/li[6]/ul/li[3]/div/div[5]/a[1]')))
            .click()
            .perform();
    };
    
    this.GetCurrentURL= function(){
       return browser.getCurrentUrl();
    };
};
module.exports = new CheckOutPage();