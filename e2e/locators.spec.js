// const { test, expect} = require("@playwright/test");
import { test , expect} from "@playwright/test";

test('Locaters', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    //click on login button -property
    // await page.locator('id=login2').click();
    await page.click('id=login2');
    //provide username - css
    // await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginusername','pavanvol');
    // await page.type('#loginusername','pavanvol');

    //provide password
    await page.fill("input[id='loginpassword']",'test@123');

    //click on button
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presence
    const logout = await page.locator("//a[normalize-space()='Log out']");
    await expect(logout).toBeVisible();

    await page.close(); 


})
