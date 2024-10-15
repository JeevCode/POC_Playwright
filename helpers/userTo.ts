import { expect, Page } from "@playwright/test";

export class Action {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkProfilePage(page: any) {
    await expect(page.locator("#div_HomePage_Id_")).toBeVisible();
    await page.screenshot({ path: `test-results/AfterLoginHomePage.png` });
    await page.waitForTimeout(3000);
    await page.locator("#undivname").click();
    await page.getByText("My Profile").nth(0).click();
    await expect(page.getByTitle("My Profile")).toBeVisible();
  }
}
 