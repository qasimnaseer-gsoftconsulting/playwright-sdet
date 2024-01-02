const {test,expect} = require('@playwright/test');

test('Built-inLocaters4',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //getByPlaceholder()
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill('admin123');

    await page.getByRole('button',{type : 'submit'}).click();

    await expect(await page.getByText('Time at Work')).toBeVisible();  
})