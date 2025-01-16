import { test, expect, Browser, BrowserContext, Page, chromium } from '@playwright/test';

let browser:Browser;
let browserContext:BrowserContext;
let page:Page;
// let browserName:string;


test.beforeEach('Run before alll tests',async (browserName) => {

    // browserName='chrome;'

    // if(browserName==='chrome')
    // {
              
    // }
    browser = await chromium.launch({ headless:false });  
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    

});

test.afterEach('Run after each test', async () => {
  page.close();
})

test('login test', async () => {
  await page.goto('https://www.box.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter Your Email').click();
  await page.getByPlaceholder('Enter Your Email').fill('bettertester21@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Enter Your Password').click();
  await page.getByPlaceholder('Enter Your Password').fill('tester@123');
  await page.getByRole('button', { name: 'Log In' }).click();  
});

test('create a folder test', async () => {
    const folderName = 'test'+Math.floor(100000+Math.random()*900000);
    await page.goto('https://www.box.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByPlaceholder('Enter Your Email').click();
    await page.getByPlaceholder('Enter Your Email').fill('bettertester21@gmail.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByPlaceholder('Enter Your Password').click();
    await page.getByPlaceholder('Enter Your Password').fill('tester@123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByTestId('new-item-menu-button').click();
    await page.getByText('Folder', { exact: true }).click();
    await page.getByPlaceholder('My New Folder').click();
    await page.getByPlaceholder('My New Folder').fill(folderName);
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await page.getByTestId('new-item-menu-button').press('NumLock');
  });

  
test('delete folder test', async () => {
  await page.goto('https://www.box.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter Your Email').click();
  await page.getByPlaceholder('Enter Your Email').fill('betterteste');
  await page.getByPlaceholder('Enter Your Email').press('NumLock');
  await page.getByPlaceholder('Enter Your Email').fill('bettertester21@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Enter Your Password').click();
  await page.getByPlaceholder('Enter Your Password').fill('tester@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('row', { name: 'Personal Folder test850989' }).getByLabel('Select').check();
  await page.getByTestId('actionbar').getByLabel('Trash').click();
  await page.getByRole('button', { name: 'Okay' }).click();
  // await page.goto('https://www.box.com/');
  // await page.getByRole('link', { name: 'Log in' }).click();
  // await page.getByPlaceholder('Enter Your Email').click();
  // await page.getByPlaceholder('Enter Your Email').fill('betterteste');
  // await page.getByPlaceholder('Enter Your Email').press('NumLock');
  // await page.getByPlaceholder('Enter Your Email').fill('bettertester21@gmail.com');
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByPlaceholder('Enter Your Password').click();
  // await page.getByPlaceholder('Enter Your Password').fill('tester@123');
  // await page.getByRole('button', { name: 'Log In' }).click();
  // await page.getByRole('row', { name: 'Personal Folder test850989' }).getByLabel('Select').check();
  // await page.getByTestId('actionbar').getByLabel('Trash').click();
  // await page.getByRole('button', { name: 'Okay' }).click();
  // await page.getByTestId('new-item-menu-button').click();
  // await page.getByTestId('new-item-menu').getByText('Bookmark').click();
  // await page.getByLabel('URL').fill('app.');
  // await page.getByLabel('URL').press('NumLock');
  // await page.getByLabel('URL').fill('app.box.com/folder/0');
  // await page.getByLabel('Name(optional)').click();
  // await page.getByLabel('Name(optional)').fill('bookmark1');
  // await page.getByLabel('Description(optional)').click();
  // await page.getByLabel('Description(optional)').fill('test bookmark');
  // await page.getByRole('button', { name: 'Create', exact: true }).click();
  // await page.getByLabel('Name(optional)').click();
  // await page.getByLabel('Name(optional)').fill('bookmark2');
  // await page.getByRole('button', { name: 'Create', exact: true }).click();
  // await page.getByLabel('Name(optional)').click();
  // await page.getByLabel('Name(optional)').fill('bookmark3');
  // await page.getByRole('button', { name: 'Create', exact: true }).click();
  // await page.getByTestId('new-item-menu-button').click();
  // const page1Promise = page.waitForEvent('popup');
  // await page.getByText('Box Note', { exact: true }).click();
  // const page1 = await page1Promise;
  // await page1.goto('https://app.box.com/notes/1751564540569');
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByPlaceholder('Add a Title').click();
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByPlaceholder('Add a Title').fill('first note');
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByTestId('text-placeholder').click();
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().locator('.ProseMirror').fill('for testing playwrighht');
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByRole('button', { name: 'Share' }).click();
});

test('create boomark test', async () => {
  await page.goto('https://www.box.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter Your Email').click();
  await page.getByPlaceholder('Enter Your Email').fill('betterteste');
  await page.getByPlaceholder('Enter Your Email').press('NumLock');
  await page.getByPlaceholder('Enter Your Email').fill('bettertester21@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Enter Your Password').click();
  await page.getByPlaceholder('Enter Your Password').fill('tester@123');
  await page.getByRole('button', { name: 'Log In' }).click();  
  await page.getByTestId('new-item-menu-button').click();
  await page.getByTestId('new-item-menu').getByText('Bookmark').click();
  await page.getByLabel('URL').fill('app.');
  await page.getByLabel('URL').press('NumLock');
  await page.getByLabel('URL').fill('app.box.com/folder/0');
  await page.getByLabel('Name(optional)').click();
  await page.getByLabel('Name(optional)').fill('bookmark1');
  await page.getByLabel('Description(optional)').click();
  await page.getByLabel('Description(optional)').fill('test bookmark');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByLabel('Name(optional)').click();
  await page.getByLabel('Name(optional)').fill('bookmark2');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByLabel('Name(optional)').click();
  await page.getByLabel('Name(optional)').fill('bookmark3');
  await page.getByRole('button', { name: 'Create', exact: true }).click();  
  // await page.goto('https://www.box.com/');
  // await page.getByRole('link', { name: 'Log in' }).click();
  // await page.getByPlaceholder('Enter Your Email').click();
  // await page.getByPlaceholder('Enter Your Email').fill('betterteste');
  // await page.getByPlaceholder('Enter Your Email').press('NumLock');
  // await page.getByPlaceholder('Enter Your Email').fill('bettertester21@gmail.com');
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByPlaceholder('Enter Your Password').click();
  // await page.getByPlaceholder('Enter Your Password').fill('tester@123');
  // await page.getByRole('button', { name: 'Log In' }).click();
  // await page.getByRole('row', { name: 'Personal Folder test850989' }).getByLabel('Select').check();
  // await page.getByTestId('actionbar').getByLabel('Trash').click();
  // await page.getByRole('button', { name: 'Okay' }).click();
  // await page.getByTestId('new-item-menu-button').click();
  // await page.getByTestId('new-item-menu').getByText('Bookmark').click();
  // await page.getByLabel('URL').fill('app.');
  // await page.getByLabel('URL').press('NumLock');
  // await page.getByLabel('URL').fill('app.box.com/folder/0');
  // await page.getByLabel('Name(optional)').click();
  // await page.getByLabel('Name(optional)').fill('bookmark1');
  // await page.getByLabel('Description(optional)').click();
  // await page.getByLabel('Description(optional)').fill('test bookmark');
  // await page.getByRole('button', { name: 'Create', exact: true }).click();
  // await page.getByLabel('Name(optional)').click();
  // await page.getByLabel('Name(optional)').fill('bookmark2');
  // await page.getByRole('button', { name: 'Create', exact: true }).click();
  // await page.getByLabel('Name(optional)').click();
  // await page.getByLabel('Name(optional)').fill('bookmark3');
  // await page.getByRole('button', { name: 'Create', exact: true }).click();
  // await page.getByTestId('new-item-menu-button').click();
  // const page1Promise = page.waitForEvent('popup');
  // await page.getByText('Box Note', { exact: true }).click();
  // const page1 = await page1Promise;
  // await page1.goto('https://app.box.com/notes/1751564540569');
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByPlaceholder('Add a Title').click();
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByPlaceholder('Add a Title').fill('first note');
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByTestId('text-placeholder').click();
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().locator('.ProseMirror').fill('for testing playwrighht');
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByRole('button', { name: 'Share' }).click();
});
  
  
test('create note test', async () => {
  await page.goto('https://www.box.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter Your Email').click();
  await page.getByPlaceholder('Enter Your Email').fill('betterteste');
  await page.getByPlaceholder('Enter Your Email').press('NumLock');
  await page.getByPlaceholder('Enter Your Email').fill('bettertester21@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Enter Your Password').click();
  await page.getByPlaceholder('Enter Your Password').fill('tester@123');
  await page.getByRole('button', { name: 'Log In' }).click();  
  await page.getByTestId('new-item-menu-button').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByText('Box Note', { exact: true }).click();
  const page1 = await page1Promise;
  await page1.goto('https://app.box.com/notes/1751564540569');
  await page1.locator('iframe[name="service_iframe"]').contentFrame().getByPlaceholder('Add a Title').click();
  await page1.locator('iframe[name="service_iframe"]').contentFrame().getByPlaceholder('Add a Title').fill('first note');
  await page1.locator('iframe[name="service_iframe"]').contentFrame().getByTestId('text-placeholder').click();
  await page1.locator('iframe[name="service_iframe"]').contentFrame().locator('.ProseMirror').fill('for testing playwrighht');
  await page1.locator('iframe[name="service_iframe"]').contentFrame().getByRole('button', { name: 'Share' }).click();
  // await page.goto('https://www.box.com/');
  // await page.getByRole('link', { name: 'Log in' }).click();
  // await page.getByPlaceholder('Enter Your Email').click();
  // await page.getByPlaceholder('Enter Your Email').fill('betterteste');
  // await page.getByPlaceholder('Enter Your Email').press('NumLock');
  // await page.getByPlaceholder('Enter Your Email').fill('bettertester21@gmail.com');
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByPlaceholder('Enter Your Password').click();
  // await page.getByPlaceholder('Enter Your Password').fill('tester@123');
  // await page.getByRole('button', { name: 'Log In' }).click();
  // await page.getByRole('row', { name: 'Personal Folder test850989' }).getByLabel('Select').check();
  // await page.getByTestId('actionbar').getByLabel('Trash').click();
  // await page.getByRole('button', { name: 'Okay' }).click();
  // await page.getByTestId('new-item-menu-button').click();
  // await page.getByTestId('new-item-menu').getByText('Bookmark').click();
  // await page.getByLabel('URL').fill('app.');
  // await page.getByLabel('URL').press('NumLock');
  // await page.getByLabel('URL').fill('app.box.com/folder/0');
  // await page.getByLabel('Name(optional)').click();
  // await page.getByLabel('Name(optional)').fill('bookmark1');
  // await page.getByLabel('Description(optional)').click();
  // await page.getByLabel('Description(optional)').fill('test bookmark');
  // await page.getByRole('button', { name: 'Create', exact: true }).click();
  // await page.getByLabel('Name(optional)').click();
  // await page.getByLabel('Name(optional)').fill('bookmark2');
  // await page.getByRole('button', { name: 'Create', exact: true }).click();
  // await page.getByLabel('Name(optional)').click();
  // await page.getByLabel('Name(optional)').fill('bookmark3');
  // await page.getByRole('button', { name: 'Create', exact: true }).click();
  // await page.getByTestId('new-item-menu-button').click();
  // const page1Promise = page.waitForEvent('popup');
  // await page.getByText('Box Note', { exact: true }).click();
  // const page1 = await page1Promise;
  // await page1.goto('https://app.box.com/notes/1751564540569');
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByPlaceholder('Add a Title').click();
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByPlaceholder('Add a Title').fill('first note');
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByTestId('text-placeholder').click();
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().locator('.ProseMirror').fill('for testing playwrighht');
  // await page1.locator('iframe[name="service_iframe"]').contentFrame().getByRole('button', { name: 'Share' }).click();
});