import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
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
  await page.getByPlaceholder('My New Folder').fill('test1');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByTestId('new-item-menu-button').press('NumLock');
});