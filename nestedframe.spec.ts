import test from "@playwright/test";

test("to verify frame",async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml");


  const outerframe = page.frameLocator('iframe[src="page.xhtml"]')

  const innerframe = outerframe.frameLocator('iframe[src="framebutton.xhtml"]')
  await innerframe.getByRole("button",{name:"Click Me"}).click();


await page.waitForTimeout(3000);
});