import { test , expect} from "@playwright/test";

test('Handle Radio Button', async ({ page }) => {


/*===================================
        Handling Radio button
===================================*/

await page.goto('url');

const chkbox = await page.locator('//input[@value="option-1"]');
const chkbox2 = await page.locator('//input[@value="option-2"]');
chkbox.check();
await expect(chkbox).toBeChecked();
await expect(chkbox.isChecked()).toBeTruthy();
await expect(chkbox2.isChecked()).toBeFalsy();


});