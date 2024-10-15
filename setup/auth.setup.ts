import {test as setup, expect} from '@playwright/test';

const authFile = '.auth/user.json';

setup('authentication', async ({page}) => {
    const baseUrl: string = process.env.WEB_BASE_URL as string;
    const Username: string = process.env.QA_ADMIN_USER as string;
    const Password: string = process.env.QA_ADMIN_USER_PWD as string;
    await page.goto(baseUrl);
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/TalentOz/);
    await page.getByPlaceholder('Enter Username').fill(Username);
    await page.getByPlaceholder('Enter Password').fill(Password);
    await page.screenshot({ path: `test-results/BeforeLoginPage.png` });
    await page.getByText('Sign in').click();
    await expect(page.locator('#div_HomePage_Id_')).toBeVisible();

    //Store the file in local storage
    await page.context().storageState({path: authFile});
    await page.close();
})