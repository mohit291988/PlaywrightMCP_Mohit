import { test, expect, devices } from '@playwright/test';


//test.only tag - to execute only test case
test('Test1', async ({ page }) => {

   console.log('this is my First Test1')
 
});


test.skip('Test2', async ({ page }) => {

   console.log('this is my First Test2')
 
});

//Conditional Skip
test('Test3', async ({ page, browserName }) => {

    console.log('this is my First Test3')
    if(browserName=='chromium')
        test.skip();
        console.log("Test is Skipped")
});

//Fix Me
test('Test4', async ({ page }) => {
    test.fixme();
   console.log('this is my First Test4')
 
});

test('Test5', async ({ page }) => {
   test.fail();
   console.log('this is my First Test5')
   expect(1).toBe(2);
 
});

test('Test6', async ({ page, browserName }) => {
   console.log('this is my First Test6')
  if(browserName=='firefox')
      {
         test.fail()  //Annotation - Fail
      }
      expect(browserName).toBe('chromium')
 
});

test('Test7', async ({ page }) => {
   console.log('this is my First Test7')
  if(browserName=='chromium')
      {
         test.fail()
      }
      expect(browserName).toBe('chromium')
 
});


