import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Login", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.LoginPage.visit();
  });

  test.only("Přihlášení happy path", async ({ page }) => {
    //když
    await pages.LoginPage.nameField.fill("czechitas");
    await pages.LoginPage.passwordField.fill("budoucnost");
    await pages.LoginPage.loginButton.click();
    //tak
    await expect(pages.LoginPage.OwlPicture).toBeVisible;
    
  });

  test("Přihlášení - špatné jméno - nelze se přihlásit", async ({ page }) => {
    //když
    await pages.LoginPage.nameField.fill("Marki");
    await pages.LoginPage.passwordField.fill("budoucnost");
    await pages.LoginPage.loginButton.click();
    //tak
    await expect(pages.LoginPage.OwlPicture).not.toBeVisible;
    
  });

  test("Přihlášení - žádné jméno - nelze se přihlásit", async ({ page }) => {
    //když
    await pages.LoginPage.nameField.fill("");
    await pages.LoginPage.passwordField.fill("budoucnost");
    await pages.LoginPage.loginButton.click();
    //tak
    await expect(pages.LoginPage.OwlPicture).not.toBeVisible;
    
  });

  test("Přihlášení - špatné heslo - nelze se přihlásit", async ({ page }) => {
    //když
    await pages.LoginPage.nameField.fill("czechitas");
    await pages.LoginPage.passwordField.fill("minulost");
    await pages.LoginPage.loginButton.click();
    //tak
    await expect(pages.LoginPage.OwlPicture).not.toBeVisible;
    
  });

  test("Přihlášení - žádné heslo - nelze se přihlásit", async ({ page }) => {
    //když
    await pages.LoginPage.nameField.fill("czechitas");
    await pages.LoginPage.passwordField.fill("");
    await pages.LoginPage.loginButton.click();
    //tak
    await expect(pages.LoginPage.OwlPicture).not.toBeVisible;
    
  });


});
