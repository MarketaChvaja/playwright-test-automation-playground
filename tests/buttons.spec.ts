import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Buttons", () => {
  let pages: AllPages;
  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.buttonPage.visit();
  });

  // this works
  test("button ID should be clicked", async () => {
    await pages.buttonPage.buttonById.click({ timeout: 1000 });
    await expect(pages.buttonPage.buttonById).toHaveClass(/btn-success/);
  });

  // ------------------------------ 👀
  // these tests needs to be fixed - add locator to buttons
  test("button name should be clicked", async () => {
    await pages.buttonPage.buttonByName.click({ timeout: 1000 });
    await expect(pages.buttonPage.buttonByName).toHaveClass(/btn-success/);
  });

  test("button class should be clicked", async () => {
    await pages.buttonPage.buttonByClass.click({ timeout: 1000 });
    await expect(pages.buttonPage.buttonByClass).toHaveClass(/btn-success/);
  });

  test("button text should be clicked", async () => {
    await pages.buttonPage.buttonByText.click({ timeout: 1000 });
    await expect(pages.buttonPage.buttonByText).toHaveClass(/btn-success/);
  });

  test("button XPath should be clicked", async () => {
    await pages.buttonPage.buttonByXPath.click({ timeout: 1000 });
    await expect(pages.buttonPage.buttonByXPath).toHaveClass(/btn-success/);
  });

  test("button partial text should be clicked", async () => {
    await pages.buttonPage.buttonByPartialText.click({ timeout: 1000 });
    await expect(pages.buttonPage.buttonByPartialText).toHaveClass(
      /btn-success/,
    );
  });

  test("button data-qa should be clicked", async () => {
    await pages.buttonPage.buttonByDataQA.click({ timeout: 1000 });
    await expect(pages.buttonPage.buttonByDataQA).toHaveClass(/btn-success/);
  });

  test("button outside div should be clicked", async () => {
    await pages.buttonPage.buttonOutsideDiv.click({ timeout: 1000 });
    await expect(pages.buttonPage.buttonOutsideDiv).toHaveClass(/btn-success/);
  });
});
