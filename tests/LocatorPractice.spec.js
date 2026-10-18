const{test,expect} = require('@playwright/test');

test('Ist testcase', async({page})=>{
  await page.goto(' https://www.flipkart.com/');  
   await page.waitForTimeout(5000);

   const searchBox = page.getByPlaceholder('Search for products, brands and more');

await searchBox.click();
 await page.waitForTimeout(8000);
await searchBox.fill('mobile');
  //await page.getByText('Search for products, brands and more').fill('Mobile');

//  await page.locator('[title="Search for products, brands and more"]').fill('mobile');
 //  await page.waitForTimeout(4000);

  
/* google test case 

  https://www.google.com/?hl=en&gl=us
   await page.goto('https://www.google.com/?hl=en&gl=us'); 
 // await page.goto('https://www.google.com/'); 
 // await page.waitForTimeout(3000);
 // await page.locator('//textarea[@aria-label="Search"]').click();
  await page.locator('//textarea[@aria-label="Search"]').fill("Dubai trade");
  //await page.keyboard.type("Dubaitrade");
   await page.waitForTimeout(6000);
*/
/*
   await page.goto('https://www.advantageonlineshopping.com/'); 
    await page.getByLabel('OUR PRODUCTS').click();    
    await page.getByText(' TABLETS ').click();
   */

  
  /*
  await page.goto('https://www.facebook.com/');   
    //await page.getByText('I already have an account').click();
    await page.getByLabel('Create new account').click();       
    await page.getByText('I already have an account').click();
    await page.waitForTimeout(5000);
    await page.getByLabel('Continue').click();
    await page.getByLabel('Password').fill("Arshi@123");
    
    //First name
    await page.getByLabel("First name").fill('Khatib');
   await page.waitForTimeout(5000);

   https://www.flipkart.com/
   */
});

