const  {test} = require('@playwright/test');

test('Locator Practice' )

 // Browser context 
  /*
test.only('Browser  fixture example', async ({browser})=>
{
   
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");  
    
    await page.locator('input#username').fill("rahulshettyacademy");
    await page.locator ('[id=password]').fill("Learning@830$3mK2");
    await page.locator('#signInBtn').click();
    await page.waitForTimeout(10000);
    
    // await expect(page).toHaveTitle("Google");
    //const  titlepg= await page.title();
   // console.log("Title of page is "+ titlepg);

   

}); */