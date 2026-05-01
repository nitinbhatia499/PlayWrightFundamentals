import { test, expect} from '@playwright/test';

test("Cura WebsiteLogin test",async({page})=>{
 await page.goto("https://katalon-demo-cura.herokuapp.com");
 await page.locator("#btn-make-appointment").click();
 //Username
 await page.locator("#txt-username").fill("John Doe");
 //Password
 await page.locator("#txt-password").fill("ThisIsNotAPassword");
 //Click Login
 await page.locator("#btn-login").click();

 //Verify page URL and Text of make appointment
await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
await expect(page.locator(".col-sm-12.text-center")).toHaveText("Make Appointment");
 await page.close();
});