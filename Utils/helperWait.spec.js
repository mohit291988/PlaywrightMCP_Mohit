// Utils/helperWait.spec.js
const { test, expect } = require('@playwright/test');
const {
  waitForVisible,
  waitForHidden,
  waitForNavigation,
  waitForText,
} = require('./helperWait');

test('waitForVisible waits for element to be visible', async ({ page }) => {
  await page.goto('https://example.com');
  await waitForVisible(page, 'h1');
  expect(await page.isVisible('h1')).toBe(true);
});

test('waitForHidden waits for element to be hidden', async ({ page }) => {
  await page.goto('https://example.com');
  // Example: hide element via JS for test
  await page.evaluate(() => document.querySelector('h1').style.display = 'none');
  await waitForHidden(page, 'h1');
  expect(await page.isHidden('h1')).toBe(true);
});

test('waitForNavigation waits for navigation', async ({ page }) => {
  await page.goto('https://example.com');
  // Example: trigger navigation
  await page.evaluate(() => window.location.href = 'https://www.wikipedia.org');
  await waitForNavigation(page);
  expect(page.url()).toBe('https://www.wikipedia.org/');
});

test('waitForText waits for text in element', async ({ page }) => {
  await page.goto('https://example.com');
  await waitForText(page, 'h1', 'Example Domain');
  const text = await page.textContent('h1');
  expect(text).toContain('Example Domain');
});
