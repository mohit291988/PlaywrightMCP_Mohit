const { test, expect } = require('@playwright/test');

test.use({
  httpCredentials: {
    username: 'httpwatch',
    password: 'passwd'
  }
});


test("API Authentication", async ({ page }) => {
  await page.goto('http://www.httpwatch.com/httpgallery/authentication/authenticatedimage/default.aspx?0.123');

  const image = await page.$('img');
  if (image) {
    console.log(' Image is present and loaded.');
  } else {
    console.log('Image not found or auth failed.');
  }

})

