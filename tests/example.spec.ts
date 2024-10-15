import { test, expect } from "@playwright/test";
import { Action } from "../helpers/userTo";

test.beforeEach(async ({ page }) => {
  const baseUrl: string = process.env.WEB_BASE_URL as string;
  await page.setViewportSize({
    width: 1760,
    height: 1120,
  });
  await page.goto(baseUrl);
});

test.describe("Verify that the employee can submit only one leave request per month for this leave type", async () => {
  test("Log-in with QA Admin", async function ({ page }) {
    // Expect a title "to contain" a substring.
    // const Action = new UserActivation(page);
    // await Action.User(page);
    // await page.close();
  });

  
});
