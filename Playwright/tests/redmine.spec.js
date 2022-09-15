const { test, expect } = require('@playwright/test');

test('test #1 clickable "Multiple projects support"', async ({ page }) => {
  await page.goto('https://www.redmine.org/projects/redmine/wiki');
  const textUrlMultiplePS = page.locator('a[href="/projects/redmine/wiki/RedmineProjects"]');
  await textUrlMultiplePS.click();
  await expect(page).toHaveURL("https://www.redmine.org/projects/redmine/wiki/RedmineProjects");
});

test('test #2 check visible book pictures', async ({ page }) => {
  await page.goto('https://www.redmine.org/projects/redmine/wiki');
  const imgBook1 = page.locator('[src="/attachments/download/8856/mastering_redmine.jpg"]');
  await imgBook1.isVisible()
  const imgBook2 = page.locator('[src="/attachments/download/13894/plugin_dev.png"]');
  await imgBook2.isVisible()
  const imgBook3 = page.locator('[src="/attachments/download/14647/redmine_cookbook.png"]');
  await imgBook3.isVisible()  
});

test('Test #3 search bar testing', async ({ page }) => {
  await page.goto('https://www.redmine.org/projects/redmine/wiki');
  const cearchInput = page.locator('#q');
  await cearchInput.fill('slack');
  await page.keyboard.press('Enter'); 
  await expect(page).toHaveURL("https://www.redmine.org/projects/redmine/search?utf8=%E2%9C%93&wiki_pages=1&q=slack");
});

test('Test #4 search bar testing', async ({ page }) => {
  await page.goto('https://www.redmine.org/projects/redmine/wiki');
  const cearchInput = page.locator('#q');
  await cearchInput.fill('GitHub');
  await page.keyboard.press('Enter');
  const nextPage = page.locator('[href="/projects/redmine/search?offset=20180724091325&q=GitHub&utf8=%E2%9C%93&wiki_pages=1"]'); 
  await nextPage.click();
  await page.screenshot({ path: 'GitHubSearch.png', fullPage: true });
});

test('Test #5 login page, log in', async ({ page }) => {
  await page.goto('https://www.redmine.org/login');
  const userNameField = page.locator('#username');
  await userNameField.fill('User123');
  const passwordField = page.locator('#password');
  await passwordField.fill('Password123');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL("https://www.redmine.org/User123");
});