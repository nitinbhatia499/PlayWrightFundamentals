import {test,expect} from '@playwright/test';

test("My QA Form",async({page})=>
{
   await  page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
   await page.getByRole("textbox",{name:'First name'}).fill("nitin");
   await expect(page.getByRole("textbox",{name:'First name'})).toHaveValue("nitin");

   await page.locator("#last-name").fill("Bhatia");
   await expect(page.locator("#last-name")).toHaveValue("Bhatia");

   await page.getByTestId("gender-male").click();
   await expect(page.getByTestId("gender-male")).toBeChecked();

   await page.locator("#years-experience").click();

   await page.locator("#years-experience").selectOption('5');
   await expect(page.locator("#years-experience")).toHaveValue('5');

   await page.locator('#profile-date').fill("2026-11-10");

   await page.getByTestId("profession-manual").click();
   await page.getByTestId("tool-uft").click();
   await page.getByTestId("continent-australia").click();

   await page.getByRole('tab',{name:'Switch Commands'}).click();
   await page.getByRole('button',{name:'Save profile'}).click();
   await page.waitForTimeout(3000);

});