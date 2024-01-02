const {test,expect} = require('@playwright/test');

test('LocateMultipleElements',async({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    //it will return all links of page
    // const links = await page.$$('a');

    // for (const link of links) {
    //     const linktext = await link.textContent();
    //     console.log(linktext);
    // }

    // it will return all products of page
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//h4/a");

    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }

})