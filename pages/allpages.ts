import { Page } from "@playwright/test";
import { ButtonPage } from "./buttons";
import { CatsPage } from "./cats";
import { LoginPage } from "./prihlaseni";

export class AllPages {
  readonly buttonPage: ButtonPage;
  readonly catsPage: CatsPage;
  readonly LoginPage: LoginPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.buttonPage = new ButtonPage(page);
    this.catsPage = new CatsPage(page);
    this.LoginPage = new LoginPage(page);
  }

  async visit(url: string) {
    await this.page.goto(url);
  }
}
