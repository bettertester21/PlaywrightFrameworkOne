import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import { LoginPage } from "../unicorn-one/pages/loginpage";



let browser:Browser;
let browserContext:BrowserContext;
let page:Page;
let loginPage:LoginPage;


test.beforeAll('Run before all test',async() => {
    browser = await chromium.launch( { headless:false } );
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    loginPage = new LoginPage(page);
})

test('Login Test using valid credentials', async() => {

    let url = "https://trainee-web-app.azurewebsites.net/auth/login";
    let username = "test@test.com";
    let password = "test";
    // loginPage = new LoginPage(page);
    await loginPage.navigateToUrl(url);
    await loginPage.loginToUnicorn(username,password);

})
