describe('slow calculator', function() {
  beforeEach(function() {

      browser.ignoreSynchronization = true;
 
    browser.get('http://automationpractice.com/index.php');
  });

  it('Go to login Page and verify without enter email submit it ', function() {
    console.log("Before click")

    element(by.css('.login')).click();
    browser.driver.sleep(5000);
    element(by.id('SubmitCreate')).click();
    browser.driver.sleep(5000);
   // var element=element(by.css('#create_account_error>ol>li'));
   element(by.css('#create_account_error>ol>li')).isPresent()

   var foo = element(by.css('#create_account_error>ol>li'));
   console.log('.........................'+foo.getText());
   expect(foo.getText()).toEqual('Invalid email address.');
   
    console.log('.........................');
    expect('apple').toBe('apple');
         browser.driver.sleep(5000);
         
  });

  it('Go to login Page and verify without enter email submit it ', function() {
    console.log("Before click")

     var element1=element(by.css('.sf-with-ul'))
     var  element2=element(by.linkText('T-shirts'))
     var temp = element(by.attribute('[href="http://automationpractice.com/index.php?id_category=5&controller=category]'));
     temp.click();

     browser.driver.sleep(5000);

     browser.driver.sleep(5000);
     
  });

   
});
