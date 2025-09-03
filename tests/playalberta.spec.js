import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13'],
});

test('test', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  await page.getByRole('link', { name: 'Master Generative AI for' }).click();
  await page.getByRole('button', { name: 'Open side drawer' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('Site navigation').getByRole('link', { name: 'Udemy Business' }).click();
  const page1 = await page1Promise;
  await page1.locator('iframe[name="cf-chl-widget-145hc"]').contentFrame().locator('body').click();
});