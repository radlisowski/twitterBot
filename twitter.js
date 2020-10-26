const puppeteer = require('puppeteer');
//you need to add the credencials to your account here
const username = `xxxx`;
const password = 'xxxx';
var timestamp = Date.now(); 

const tweet = `tweet goes here ${(GenerateRandomIntInclusive(1, 9999999))}`;

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto('https://twitter.com/home/', { waitUntil: 'networkidle2' });
    await page.type('input[name="session[username_or_email]"]', username, { delay: 30 });
    await page.type('input[name="session[password]"]', password, { delay: 40 });
    
    await page.click('div[data-testid="LoginForm_Login_Button"]');
    await page.waitFor(2000);
    
    await page.type('div[data-testid="tweetTextarea_0"]', tweet, { delay: 40 });
    await page.waitFor(2000);

    await page.click('div[data-testid="tweetButtonInline"]');
    await page.waitFor(2000);
    
    await page.click('div[data-testid="tweetButtonInline"]');
    await page.waitFor(2000);


    await page.screenshot({ path: 'twiter ' + timestamp + '.png' });
    await browser.close();

})();

function GenerateRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}