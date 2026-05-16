
import {test,expect} from '@playwright/test';

test("Webtable name verification",async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable1');

const rows=page.locator("//table[@id='buildings-table']//tbody//tr");
      const rowsize=await  rows.count();

      for(let i=0;i<rowsize;i++)
      {
           const structureName= await rows.nth(i).locator("td:nth-child(1)").innerText();
           if(structureName.includes("Taipei 101"))
           {
            const build=await rows.nth(i).locator("td:nth-child(5)").innerText();
            console.log(`Structure:${structureName} Build: ${build}`)
           }
      }

});
