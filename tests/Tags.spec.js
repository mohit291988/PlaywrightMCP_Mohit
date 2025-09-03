import { test, expect, devices } from '@playwright/test';
import { time } from 'console';


test('Test1@sanity', async ({ page }) => {

   console.log('this is my First Test1')
 
});


test('Test2@sanity', async ({ page }) => {

   console.log('this is my First Test2')
 
});

test('Test3@regression', async ({ page }) => {

   console.log('this is my First Test3')
 
});

test('Test4@regression', async ({ page }) => {

   console.log('this is my First Test4')
 
});

test('Test5@sanity@regression', async ({ page }) => {

   console.log('this is my First Test5')
 
});
