import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Login", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.visit("/login.html");
  });

  test("template for you", async ({ page }) => {
    //pises kod sem :)
  });
});
