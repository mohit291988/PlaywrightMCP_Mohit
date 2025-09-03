const { test, expect } = require('@playwright/test');

test('Google Search for Apple', async ({ page }) => {
  // Step 1: Open Google
  await page.goto('https://google.com');

  // Step 2: Enter "Apple" in the search bar
  await page.getByRole('combobox', { name: 'Search' }).fill('Apple');

  // Step 3: Press Enter
  await page.keyboard.press('Enter');

  // Assert: Search results page is loaded
  await expect(page).toHaveURL(/search\?q=Apple/);
  await expect(page.getByRole('combobox', { name: 'Search' })).toHaveValue('Apple');
});
