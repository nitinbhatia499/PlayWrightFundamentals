import { chromium } from '@playwright/test';
import type { Browser, BrowserContext, Page } from '@playwright/test';


async function BrowserRun(){
   
        //level 1: Browser Setup
        let browser: Browser = await chromium.launch({ headless: false });
        console.log("Browser is launched");

        //Level : 2 ContextCreation

        let context: BrowserContext =  await browser.newContext();
        console.log("Browser Context is created");

        //Level 3: Steup pages from browser Context

        let page: Page =await context.newPage();
        await page.goto("https://example.com");
        console.log("LinkedIn Page is opened");
        console.log("Title:", await page.title());

        // Wait for 10 seconds to see the UI
        await page.waitForTimeout(10000);

        await browser.close();
        console.log("Browser closed");

    }


BrowserRun();
