import { test } from '@playwright/test';

test.describe('Context Reuse Tests', () => {

    test.use({ viewport: {width:1280, height:720 },
    locale: 'en-US'
});

test('test 1',async({page}) =>{
    await page.goto('https://www.google.com/');

});

test('test 2',async({page}) =>{
    await page.goto('https://www.google.com/');

});

});