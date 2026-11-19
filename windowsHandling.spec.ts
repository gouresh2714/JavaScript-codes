import test from "@playwright/test";

test("to verify frame windowsHandling",async({page,context})=>{

   // await page.goto("https://www.amazon.in/");
    

  // await  page.getByRole("button",{name:"Continue shopping"}).click();
 // await  page.getByPlaceholder("Search Amazon.in").fill("Mobiles");
 // await page.getByPlaceholder("Search Amazon.in").press("Enter");

  
    //await page.waitForTimeout(5000);



await page.goto("https://www.leafground.com/window.xhtml");

const newPagePromise= context.waitForEvent("page");


await page.getByRole("button", { name: "Open", exact: true }).click();


const newpage=await newPagePromise;
await newpage.waitForLoadState();

await newpage.getByPlaceholder("E-mail Address").fill("test@example.com");

await newpage.waitForTimeout(5000);
})


