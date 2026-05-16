import {test,expect} from '@playwright/test';

test("Webtable name verification",async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    await page.getByTestId('lang-trigger').click();
    await page.getByText('JavaScript',{exact:true}).click();

    await page.locator('#framework-trigger').click();
   await page.getByText('Svelte',{exact:true}).click();

   await page.getByRole('button',{name:'Experience level'}).click();
   await page.getByText('Senior (7+ years)',{exact:true}).click();

});