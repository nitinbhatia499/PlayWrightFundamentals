import { chromium } from '@playwright/test';
async function BrowserRun() {
    //level 1: Browser Setup
    let browser = await chromium.launch({ headless: false });
    console.log("Browser is launched");
    //Level : 2 ContextCreation
    let context = await browser.newContext();
    console.log("Browser Context is created");
    //Level 3: Steup pages from browser Context
    let page = await context.newPage();
    await page.goto("https://example.com");
    console.log("LinkedIn Page is opened");
    console.log("Title:", await page.title());
    // Wait for 10 seconds to see the UI
    await page.waitForTimeout(10000);
    await browser.close();
}
;
BrowserRun();
