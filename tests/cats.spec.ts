import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Cats", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.catsPage.visit();
  });

  test("Jeden klik na Přidat kočku přidá jednu kočku", async ({ page }) => {
    //když
    await pages.catsPage.addCatButton.click();
    //tak
    await expect(pages.catsPage.catCards).toHaveCount(1);
    
  });


  test("Přidám jednu kočku - počitadlo ukazuje č. 1", async ({ page }) => {
    //když
    await pages.catsPage.addCatButton.click();
    //tak
    await expect(pages.catsPage.catCounter).toHaveText("1");
    
  });


  test("Přidám 3 kočky varianta 1", async ({ page }) => {
    //když
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    //tak
    await expect(pages.catsPage.catCards).toHaveCount(3);
    
  });

  test("Přidám 3 kočky varianta 2", async ({ page }) => {
    //když
    for (let i = 0; i < 3; i++) {
    await pages.catsPage.addCatButton.click();
    }
    //tak
    await expect(pages.catsPage.catCards).toHaveCount(3);
    
  });

  test("Přidám 20 koček", async ({ page }) => {
    //když
    for (let i = 0; i < 20; i++) {
    await pages.catsPage.addCatButton.click();
    }
    //tak
    await expect(pages.catsPage.catCards).toHaveCount(20);
    
  });


  //počet kliknutí jednodušeji:
  test("Přidám 10 koček", async ({ page }) => {
    //když
    await pages.catsPage.addCatButton.click({ clickCount: 10 });
    //tak
    await expect(pages.catsPage.catCards).toHaveCount(10);
    
  });





  test("Přidám 20 koček, udělám apokalypsu, mám 0", async ({ page }) => {
    //když
    for (let i = 0; i < 20; i++) {
    await pages.catsPage.addCatButton.click();
    }
    await pages.catsPage.apocalypseButton.click();
    //tak
    await expect(pages.catsPage.catCards).toHaveCount(0);
    await expect(pages.catsPage.catCounter).toHaveText("0");
    
  });

  test("Přidám kočku, odeberu kočku, mám 0 koček", async ({ page }) => {
    //když
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.removeCatButton.click();
    //tak
    await expect(pages.catsPage.catCards).toHaveCount(0);
    
  });


  test("Přidám jednu kočku - tlačítko odeber kočku je aktivní", async ({ page }) => {
    //když
    await pages.catsPage.addCatButton.click();
    //tak
    await expect(pages.catsPage.removeCatButton).toBeEnabled;
    
  });

  test("Přidám jednu kočku - tlačítko Apokalypsa je aktivní", async ({ page }) => {
    //když
    await pages.catsPage.addCatButton.click();
    //tak
    await expect(pages.catsPage.apocalypseButton).toBeEnabled();
    
  });
    
  test("Přidám a odeberu jednu kočku - tlačítko odeber kočku je NEaktivní", async ({ page }) => {
    //když
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.removeCatButton.click();
    //tak
    await expect(pages.catsPage.removeCatButton).toBeDisabled();
    
  });

  test("Přidám a odeberu jednu kočku - tlačítko Apokalypsa je NEaktivní", async ({ page }) => {
    //když
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.removeCatButton.click();
    //tak
    await expect(pages.catsPage.apocalypseButton).toBeDisabled();
    
  });

});
