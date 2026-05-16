import {test,expect} from '@playwright/test';

test("Webtable name verification",async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
    
    await page.locator("#employee-search").click();
    await page.locator("#employee-search").pressSequentially('kabir',{delay:100});

   const rows= page.locator("tbody#employee-body tr");
   const rowscount=await rows.count();
   //const colums=page.locator("//tbody[@id='employee-body']//tr//td[2]");
   //const colsize=await colums.count()
   

   for(let i=1;i<rowscount;i++)
   {
       const  Namecol=await rows.nth(i).locator("td:nth-child(2)").innerText();
       
        if(Namecol.includes("Kabir.Khan"))
        {
            await rows.nth(i).locator("td:nth-child(1) input[type='checkbox']").click();
             console.log("Checkbox clicked for Kabir.Khan");
         await expect(page.locator("#selected-output")).toContainText("Kabir");
        break;
        }

        //Alternate way
        //await page.locator("tr:has(td:text('Rohan.Mehta'))").locator("td").first().click();
        
 }
 
});