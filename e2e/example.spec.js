import { test, expect } from '@playwright/test';

test('sum works', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Get the input fields and button
  const input1 = page.locator('#numbera');
  const input2 = page.locator('#numberb');
  const button = page.locator('#calculateButton');
  const result = page.locator('#result');

  // Input values
  await input1.fill('5');
  await input2.fill('10');

  // Click the button
  await button.click();

  // Check the result
  await expect(result).toHaveText('15');
});