import test from "@playwright/test";

test("to verify create lead",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main/");
    await page.waitForTimeout(5000);

    await page.getByRole("textbox",{name:"Username"}).fill("DemoSalesManager");
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
    await page.getByRole("button",{name:"Login"}).click();
    await page.waitForTimeout(5000);
    await page.getByRole("link",{name:"CRM/SFA"}).click();
    await page.waitForTimeout(5000);

})


// enter value in text field is .fill()