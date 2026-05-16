import {test,expect} from '@playwright/test';

test("Webtable name verification",async({page})=>
{
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    await page.locator('#rs-single').click();
    await page.getByText('Selenium',{exact:true}).click();

      await page.locator('#rs-multi').click();
    await page.getByText('JUnit',{exact:true}).click();
    await page.getByText('Pytest',{exact:true}).click();
    await page.keyboard.press('Escape');

    await page.locator('#rs-async').click();
    await page.getByTestId('rs-async-input').fill('Pune');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option',{name:'Pune'}).click();



});