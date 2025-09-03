// Reusable screenshot utility for Playwright
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

/**
 * Takes a screenshot of the current page or a specific element.
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {Object} options - Options for screenshot
 * @param {string} options.fileName - Name of the screenshot file
 * @param {string} [options.folder='screenshots'] - Folder to save screenshot
 * @param {import('@playwright/test').Locator} [options.element] - Element locator for element screenshot
 * @param {boolean} [options.fullPage=false] - Capture full page screenshot
 */
async function takeScreenshot(page, { fileName, folder = 'screenshots', element, fullPage = false }) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
    const filePath = path.join(folder, fileName);
    if (element) {
        await element.screenshot({ path: filePath });
    } else {
        await page.screenshot({ path: filePath, fullPage });
    }
    return filePath;
}

// Example usage in a Playwright test
// Remove or modify this test as needed

test('Reusable screenshot utility example', async ({ page }) => {
    await page.goto('https://playwright.dev');
    // Full page screenshot
    await takeScreenshot(page, { fileName: 'fullpage.png', fullPage: true });
    // Element screenshot
    const element = page.locator('text=Get Started');
    await takeScreenshot(page, { fileName: 'element.png', element });
    expect(fs.existsSync(path.join('screenshots', 'fullpage.png'))).toBeTruthy();
    expect(fs.existsSync(path.join('screenshots', 'element.png'))).toBeTruthy();
});
