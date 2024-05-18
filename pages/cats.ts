import { Locator, Page, expect } from "@playwright/test";

export class CatsPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly addCatButton: Locator;
  readonly removeCaButton: Locator;
  readonly apocalypseButton: Locator;
  readonly catCounter: Locator;

  readonly catCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });

    // OH! Fill this! Check the HTML and fill the selectors. Use whatever selector you want.
    this.addCatButton = page.getByRole('button', { name: 'Přidej kočku' });
    this.removeCaButton = page.getByRole('button', { name: 'Odeber kočku' });
    this.apocalypseButton = page.getByRole('button', { name: 'Apokalypsa' });
    this.catCards = page.getByText("Kočka");
    this.catCounter = page.locator("#counter");
  }

  async visit() {
    await this.page.goto("/adding.html");
  }

  // or you can use expext(pages.catsPage.catCards).toHaveCount(3)
  // or different number
  getCountOfCatCards = async () => {
    return await this.catCards.count();
  };
}
