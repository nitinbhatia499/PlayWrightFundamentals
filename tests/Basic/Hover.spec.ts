
import {test,expect} from '@playwright/test';

test("Hover",async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
     
    await page.getByTestId("nav-add-ons").hover();
    await page.getByTestId("test-id-Wifi").click();

    let JSONMessage = await page.getByTestId('hover-output').innerText();
    console.log(JSONMessage);
    expect(JSONMessage).toContain('"testId": "test-id-Wifi"');
    await page.waitForTimeout(4000);

});

