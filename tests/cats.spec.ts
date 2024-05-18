import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Cats", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.catsPage.visit();
  });

  test("test 1", async ({ page }) => {
    await pages.catsPage.addCatButton.click();

    await expect(pages.catsPage.catCards).toHaveCount(1);
    
  });
  test.only("test 2", async ({ page }) => {
    await pages.catsPage.addCatButton.click();

    await expect(pages.catsPage.catCounter).toHaveText("1");
    
  });



});
