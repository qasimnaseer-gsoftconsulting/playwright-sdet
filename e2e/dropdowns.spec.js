const {test,expect} = require('@playwright/test');

test('Dropdowns', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator('#country').selectOption({label : 'India'}); //visible text
    // await page.locator('#country').selectOption('India'); //visible text
    // await page.locator('#country').selectOption({value : 'uk'}); //field value
    // await page.locator('#country').selectOption({index : '1'}); //by using index
    await page.selectOption('#country','India'); //by text

    //Assertions
    //1) check number of option is dropdown
    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    //2) chck number of options in dropdown - Approach2
    // const options = await page.$$('#country option');
    // console.log('Number of options : ',options.length);
    // await expect(options.length).toBe(10);


    //3) check presence of value in the dropdown - Approach1
    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('India')).toBeTruthy();

    //4) check presence of value in the dropdown - Approach 2 using looping
    const options = await page.$$('#country option');
    let status = false;
    for(const option of options){
        let value = await option.textContent();
        if(value.includes('France')){
            status=true;
            break;
        }

    }
    expect(status).toBeTruthy();




    await page.waitForTimeout(5000);

});