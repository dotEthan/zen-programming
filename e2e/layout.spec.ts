import { test, expect } from '@playwright/test';

test('Layout renders basic DOM structure', async ({ page }) => {
  await page.goto('/');

  const headerLogo = page.locator('header').getByText('Zenful Programming').first();
  
  await expect(headerLogo).toBeVisible();
  await expect(page.getByRole('navigation')).toBeVisible(); // NavMenu
  await expect(page.getByText('Login')).toBeVisible(); // AuthButtons
});