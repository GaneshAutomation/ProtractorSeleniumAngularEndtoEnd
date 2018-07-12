describe('Demo EMI page', function () {
    beforeEach(function () {
        browser.driver.get('http://www.euromonitor.com/');
        browser.ignoreSynchronization = true;
    });
    var HomePage = require('../Pages/HomePage.js');
    it('Should be added to Cart ', function () {
       expect(HomePage.GetPageTitle()).toEqual("Euromonitor International");
        HomePage.MouseHoverOnMenu();
        var AddtoCartPage= HomePage.ClickCountryElement();
        AddtoCartPage.AddtoCart();
        browser.sleep(3500);
        AddtoCartPage.MouseOverAndClickCheckout();
        expect(AddtoCartPage.GetCurrentURL()).toEqual('https://www.euromonitor.com/purchase/userinformation/display');
    });
});


