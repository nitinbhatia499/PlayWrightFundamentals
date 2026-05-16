
import {test,expect} from '@playwright/test';

test("Webtable name verification",async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
     //const Sideframe=page.frameLocator("[name='side']");
      
    //await Sideframe.getByText('Vehicle registration').click();
    const MainFrame=page.frameLocator("[name='main']");
    const text=await MainFrame.locator('h2#main-heading').innerText();
    console.log(text);

});