const {test, expect} = require('@playwright/test');



test('Handle checkboxes', async ({page}) => {

    await page.goto('https://itra-qa.azurewebsites.net/home/automation')
    //single checkbox
    const check = await page.locator("//input[@id='monday' and @type='checkbox']").check();
    
    expect(check).toBeChecked();
    expect(await check.isChecked()).toBeTruthy();

    const checkSunday = await page.locator("//input[@id='sunday' and @type='checkbox']").check();
    expect(await check.isChecked()).toBeFalsy();


    //for checking multipule checkboxs
    const checkboxLocators = [
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']"
    ]

    //select multipule checkboxes
    for(const locator of checkboxLocators){
        await page.locator(locator).check();
    }

    //unselect multipule checkboxes
    for(const locator of checkboxLocators){
        if(await page.locator(checkboxLocators).isChecked){
            await page.locator(locator).uncheck();
        }
    }

    await page.waitForTimeout(5000);

});