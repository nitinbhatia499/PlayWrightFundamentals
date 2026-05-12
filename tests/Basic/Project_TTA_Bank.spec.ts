import{test,expect} from '@playwright/test';

test("TTA Bank Amount Transfer",async({page})=>
{
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByRole("button",{name:'Sign Up'}).click();
    await page.getByPlaceholder('John Doe').fill("Nitin Bhatia");
    await page.getByPlaceholder('you@example.com').fill("Nitin@gmail.com");
    await page.getByPlaceholder('••••••••').fill("Bruno@12345");
    await page.getByRole("button",{name:'Create Account'}).click();

    const locator = page.locator("h3[class='mt-2 text-3xl font-bold']");
    await locator.waitFor({ state: 'visible' });

    let BankAmount= await locator.textContent();
    console.log(BankAmount);

    let bankamount=Math.floor(parseFloat(BankAmount!.replace(/[^\d.]/g, '')));
    console.log(bankamount);

    //Transfer Buuton
    await page.getByRole("button",{name:'Transfer Funds'}).click();
    await page.locator("input[type='number']").fill("5000");
    await page.locator("input[type='text']").fill("Rent");
    await page.getByRole("button",{name:'Continue'}).click();
    await page.getByRole("button",{name:'Confirm Transfer'}).click();
    await page.getByRole("button",{name:'Dashboard'}).click();

    
    const locator2 = page.locator("h3[class='mt-2 text-3xl font-bold']");
    await locator2.waitFor({ state: 'visible' });

    let BankAmountAftertransfer= await locator2.textContent();
    console.log(BankAmountAftertransfer);

    let bankamountAfterDeduction=Math.floor(parseFloat(BankAmountAftertransfer!.replace(/[^\d.]/g, '')));
    console.log(bankamountAfterDeduction);

     if(bankamountAfterDeduction===45000)
     {
        console.log("Correct Amount Transfered");
     }else{
        console.log("Wrong Amount Transfered");
     }





});