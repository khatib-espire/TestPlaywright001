 const   {test}  =  require('@playwright/test')

  test('This is the first title', async({page})=>
    {  
    await page.waitForTimeout(5000);
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //LoginPage Practise | Rahul Shetty Academy
     console.log(await  page.title());
    });