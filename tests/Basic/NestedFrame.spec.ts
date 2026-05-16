
import {test,expect, FrameLocator} from '@playwright/test';

test("Webtable name verification",async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');
    const Frame1:FrameLocator= page.frameLocator("#pact1");
     const Frame2:FrameLocator= Frame1.frameLocator("#pact2");
      const Frame3:FrameLocator= Frame1.frameLocator("#pact3");

      Frame1.locator("#inp_val").fill("Nitin");
      Frame2.locator("#jex").fill("Playwright");
      



});