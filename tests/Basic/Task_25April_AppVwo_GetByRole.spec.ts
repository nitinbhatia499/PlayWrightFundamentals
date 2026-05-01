import{test,expect} from '@playwright/test';

test("App Vwo with GetByRole Invalid Credential",async({page})=>{
  
    await page.goto("https://app.vwo.com/#/login");
    let username_textbox=page.getByRole("textbox" ,{name:'Email address'})
    let password_textbox=page.getByRole("textbox",{name:'Password'});
    let login_btn=page.getByRole("button",{name:'Sign in', exact: true });

    await username_textbox.fill("nitn");
    await password_textbox.fill("Bhatia");
    await login_btn.click();

     let errormessage = page.locator('#js-notification-box-msg');
    await expect(errormessage).toContainText("Your email, password, IP address or location did not match");
    await expect(page.getByText("Your email, password, IP address or location did not match")).toBeVisible();

});