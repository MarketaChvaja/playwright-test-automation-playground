import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly nameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly OwlPicture: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });

    // OH! Fill this! Check the HTML and fill the selectors. Use whatever selector you want.
    this.nameField = page.getByPlaceholder("mamamia@czechitas.cz");
    this.passwordField = page.getByPlaceholder("your awesome password");
    this.loginButton = page.getByText("Log in!");
    this.OwlPicture = page.getByAltText("Frajersky vyhlížející sova");


  }

  async visit() {
    await this.page.goto("/login.html");
  }


}
