require('../Pages/CheckoutPage.js')
var util = require('util');
var HomePage = function(){
    
    this.GetPageTitle= function(){
      return browser.getTitle();
    };

    this.MouseHoverOnMenu = function(){
        browser.actions().mouseMove(element(by.xpath('//*[@id="store"]/a'))).perform();
    };

    this.GetCountryAustralia = function(){
      return element(by.xpath('//*[@id="countries-list"]/ul/li[1]/a')).getText();
    };

    this.ClickCountryElement = function(){
        element(by.xpath('//*[@id="countries-list"]/ul/li[1]/a')).click();
        return    require('../Pages/CheckoutPage.js');

    };
};
module.exports = new HomePage();