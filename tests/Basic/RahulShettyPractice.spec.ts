import {test,expect} from '@playwright/test'

test("Rahul Shetty Website" , async({page})=>{
    
   await  page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    
    //textbox
    
    const firstname= page.locator("#firstName");
    const lastName= page.getByRole("textbox",{name:'Last Name'});
    const email=page.getByRole("textbox",{name:'Email'});
    const Mobile=page.locator("[placeholder='enter your number']");
    const Password=page.locator("#userPassword");
    const ConfirmPassword=page.getByRole("textbox",{name:'Confirm Password'});

    // await firstname.fill("Nitin");
    // await lastName.fill("Bhatia");
    // await email.fill("nitinbhatia499@gmail.com");
    // await Mobile.fill("1234567890");

    // DropDown

    // const dropdown= page.locator("//select[contains(@class,'custom-select ng-untouched ng-pristine ng-valid')]");
    // await dropdown.selectOption("Engineer");

    // RadioButton
    // await page.locator("[value='Male']").click();

    // await Password.fill("Bruno@12345");
    // await ConfirmPassword.fill("Bruno@12345");

    //Checkbox
    // await page.locator("[type='checkbox']").click();
    // await page.locator("[value='Register']").click();

    //await page.locator("//button[normalize-space()='Login']").click();
    await email.fill("nitinbhatia499@gmail.com");
    await Password.fill("Bruno@12345");
    await page.locator("[value='Login']").click();

    // Wait for all element to be loaded
    await page.waitForLoadState("networkidle")
    await page.locator(".card-body b").first().waitFor(); 

    // All Item
    const Product= page.locator(".card-body");
   const titles= page.locator(".card-body b").allTextContents();
   let itemFind= "ZARA COAT 3"

  const count= await Product.count();

  for(let i=0;i<count;i++)
  {
    const itemname=await Product.nth(i).locator("b").textContent();
    if(itemname===itemFind)
    {
        await Product.nth(i).locator("text= Add To Cart").click();
    }
  }
  
  await page.locator("[routerlink*='/dashboard/cart']").click();
  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('ZARA COAT 3)").isVisible();
  expect(bool).toBeTruthy();







});