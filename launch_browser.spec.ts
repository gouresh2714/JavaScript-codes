//test method is used to write single test

//"playwright/test"


import test, { chromium } from "@playwright/test";

//packages under double quotes
//first argument text and second argument is function
test("to verify login functionality",async()=>{


let browser=await chromium.launch();

let context=await browser.newContext();

let page=await context.newPage();

await page.goto("https://www.saucedemo.com/");// waitfortimeout page.waitfortimeout
await page.waitForTimeout(5000);
}); 

//fixtuers means predefined set of codes ex-page
//in async({page})=>{} page is fixtuer
// spec.ts npx playwright test filename.spec.ts
//in buit object promise
//async and await is javascript keywords used to handle promises
// loading url method is goto
// initiate method goto means pending
//goto starts and completes means fulfilled
// failed means url wont loads
// await is keyboard make method to wait for the promise to complete
//without async await we cannot use 
//=> arrow function
//launch browser chrome,firefox,webkit
//chrome browser specific, context means profiles in chrome, tab means 1 page


