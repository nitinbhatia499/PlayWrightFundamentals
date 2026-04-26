import { test, expect} from '@playwright/test';

test('My First Test', async({page}) =>{

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle("Google");

});

test.only('My First Test', async({page}) =>{

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle("Google");

});

// test.slow('My First at Test', async({page}) =>{

//     await page.goto('https://www.google.com/');
//     await expect(page).toHaveTitle("Google");

// });

test.only('My First at Test', async({page}) =>{

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle("Google");

});

test.fail('My First at Test', async({page}) =>{

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle("Google");

});