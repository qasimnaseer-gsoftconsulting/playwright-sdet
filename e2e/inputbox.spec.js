import { test , expect} from "@playwright/test";

test('Inputbox', async ({ page }) => {


/*===================================
        Handling input box
===================================*/

const inputbox = await page.locator('input[@name=""]');
await expect(inputbox).toBeVisible();
await expect(inputbox).toBeEmpty();
await expect(inputbox).toBeEditable();
await expect(inputbox).toBeEnabled();

//await page.locator('input[@name=""]').fill('john');
await page.fill('input[@name=""]', 'john');

await page.waitForTimeout(5000); //pausing code 


});