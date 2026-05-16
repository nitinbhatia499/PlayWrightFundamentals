
import {test,expect} from '@playwright/test';

test("Webtable name verification",async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
     const frame=page.frameLocator("#frame-one");
      
     await frame.locator('#RESULT_TextField-1').fill("yamaha");
     await frame.getByRole('textbox',{name:'Owner name'}).fill("nitin");


});