import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";

const { ReusableFunctions } = require('../utils/reusable-functions');
const { LoginPage } = require('../pages/loginpage');
const { HomePage } = require('../pages/homepage');
const testdata = JSON.parse(JSON.stringify(require('../testdata/testdata.json')));

let browser:Browser;
let browserContext:BrowserContext;
let page:Page;
let url,username,password;
let loginPage: { navigateToUrl: (arg0: any) => any; loginToUnicorn: (arg0: any, arg1: any) => any; },
    homePage: { verifyWelcomePage: () => any; verifyLogoutButton: () => any; createDeal: (arg0: any, arg1: any) => any; },
    reusableFunctions: { createScreenshot: (arg0: Page) => any; };
let property_address,deal_number;

test.beforeAll('Run before all test',async() => {
    browser = await chromium.launch( { headless:false } );   
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    reusableFunctions = new ReusableFunctions(page);
    loginPage = new LoginPage(page);
    
    homePage = new HomePage(page);
})


test('Validate the Unicorn application', async() => {
        
        url = testdata.loginpage.url;
        username = testdata.loginpage.username;
        password = testdata.loginpage.password;  
        property_address = testdata.homepage_td.property_address;  
        deal_number = testdata.homepage_td.deal_number;  
        await loginPage.navigateToUrl(url);
        await reusableFunctions.createScreenshot(page);
        await loginPage.loginToUnicorn(username,password);      
        await homePage.verifyWelcomePage();
        await homePage.verifyLogoutButton();
        await homePage.createDeal(property_address,deal_number);
        // reusableFunctions.createScreenshot(page);
})
