const { test, expect } = require("@playwright/test");

test('', async ({ page }) => {
    //visit page
    await page.goto('https://demoblaze.com/index.html');

    //get page title
    const pageTitle =await page.title();
    console.log('Page title is :',pageTitle);

    // assertion
    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log("Page url is : ", pageURL);

    await expect(page).toHaveURL('https://demoblaze.com/index.html');

    page.close();

});
