// @ts-check
import { test, expect } from '@playwright/test';
import { myPom } from '../page_model/pom';

test.beforeEach(async ({page, baseURL}) => {
  await page.goto('practice-test-login/');
});

test('Login', async ({ page }) => {
  const usePom = new myPom(page);
  await usePom.loginUser();
  await expect(usePom.logoutButton).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
});

test('Login Error', async ({ page }) => {
  const usePom = new myPom(page);
  const errorElement = page.locator('#error');
  await usePom.username.fill('student');
  await usePom.wrongPassword(10);
  await usePom.loginButton.click();
  await expect(errorElement).toBeVisible();
  await expect(errorElement).toHaveText('Your password is invalid!');
});

