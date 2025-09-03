const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');

const excelPath = 'C:/Users/GLITEST/Desktop/TestData_Playwright.xlsx';
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

const users = rows.slice(1, 5); // rows 2 to 5

test('Login Portal Excel Driven Test - all users', async ({ page, context }) => {
  test.setTimeout(60000); // Increase timeout to 60 seconds
  // Open main page
  await page.goto('https://webdriveruniversity.com/');
  // Click Login Portal (opens new tab)
  await page.locator('#login-portal').waitFor({ state: 'visible', timeout: 15000 });
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('#login-portal').click(),
  ]);
  await newPage.waitForLoadState('domcontentloaded');
  // Verify title
  await expect(newPage).toHaveTitle('WebDriver | Login Portal');
  // Wait for fields to be visible
  await newPage.locator('input#text').waitFor({ state: 'visible', timeout: 15000 });
  await newPage.locator('input#password').waitFor({ state: 'visible', timeout: 15000 });

  // Automatically accept any dialog
  newPage.on('dialog', async dialog => {
    await dialog.accept();
  });

  for (let i = 0; i < users.length; i++) {
    const row = users[i];
    // Fill username and password
    await newPage.locator('input#text').fill(row[0]);
    await newPage.locator('input#password').fill(row[1]);
    // Click Login
    await newPage.locator('#login-button').click();

    // Try to click OK button if present (custom modal)
    try {
      await newPage.locator('button:has-text("OK")').click({ timeout: 3000 });
    } catch (e) {
      // Ignore if not present
    }

    // Wait a moment for dialog/modal to close
    await newPage.waitForTimeout(500);

    // Reload for next attempt
    if (i < users.length - 1) {
      await newPage.reload();
      await newPage.locator('input#text').waitFor({ state: 'visible', timeout: 15000 });
      await newPage.locator('input#password').waitFor({ state: 'visible', timeout: 15000 });
    }
  }
  await newPage.close(); // Close the browser tab
  await page.close(); // Close the main browser tab
});
