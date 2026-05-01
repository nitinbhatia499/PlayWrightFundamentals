import {test,expect} from '@playwright/test';

test("Verify Error msg at invalid credential",async({page})=>{

    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
    let username= page.getByRole("textbox",{name:'Business Email '});
    username.fill("Nitin#gmail.com");

    //Checkbox
    await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click();

    //Click on trial free account
    await page.getByText("Create a Free Trial Account").click();

    //Validation
    let error_msg=page.getByText("The email address you entered is incorrect.");
    await expect(error_msg).toHaveText("The email address you entered is incorrect.");

     await expect(error_msg).toBeVisible();

  
  

});

