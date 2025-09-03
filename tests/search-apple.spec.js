const { test, expect } = require('@playwright/test');

test('Search for Apple on automationpractice.pl', async ({ page }) => {
  // Step 1: Open the website
  await page.goto('http://www.automationpractice.pl/index.php');

  // Step 2: Enter "Apple" in the search bar
  await page.getByRole('textbox', { name: 'Search' }).fill('Apple');

  // Step 3: Press Enter
  await page.keyboard.press('Enter');

  // Assert: Search results page is loaded and search bar contains "Apple"
  await expect(page).toHaveURL(/search_query=Apple/);
  await expect(page.getByRole('textbox', { name: 'Search' })).toHaveValue('Apple');
});
