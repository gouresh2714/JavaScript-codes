import test from "@playwright/test";

test("to verify frame windowsHandling",async({page})=>{

    await page.goto("https://www.amazon.in/");
    

   await  page.getByRole("button",{name:"Continue shopping"}).click();
  await  page.getByPlaceholder("Search Amazon.in").fill("Mobiles");
  await page.getByPlaceholder("Search Amazon.in").press("Enter");

  


    await page.waitForTimeout(5000);

})

//https://www.leafground.com/dashboard.xhtml

