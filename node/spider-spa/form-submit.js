const puppeteer = require('puppeteer');
async function formSubmit() {
    // async await
    // await 后面 接 promise
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://github.com/login');
    await page.setDefaultNavigationTimeout();
    // await page.waitFor(2000);
    await page.type('#login_field','123456');
    await page.type('#password','123456');
    await page.click('input[type="submit"]');
}
formSubmit();