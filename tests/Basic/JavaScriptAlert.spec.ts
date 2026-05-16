import {test,expect} from '@playwright/test';

test.describe("Java Script Alerts",()=>
{
    test.beforeEach(async({page})=>
    { 
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    });

    test("java Script Alert 1",async({page})=>
    {
         page.once('dialog',async dialog=>
         {  
           console.log('Alert Type:',dialog.type());
           dialog.accept();

         })
         await page.getByRole('button',{name:'Click for JS Alert'}).click();
        
    })

     test("java Script Alert 2",async({page})=>
    {
         page.once('dialog',async dialog=>
         {  
           console.log('Alert Type:',dialog.type());
           dialog.accept("Nitin");

         })
         await page.getByRole('button',{name:'Click for JS Prompt'}).click();
        
    })
    
     

});