import test from "@playwright/test";

// these tests are not tests due we are not testing anything :) this is for demonstration purposes
test.describe("Hooks", () => {
  test.beforeAll(() => {
    console.log("🔵 beforeAll");
  });

  test.beforeEach(() => {
    console.log("🟢 beforeEach");
  });

  test.afterEach(() => {
    console.log("🟡 afterEach");
  });

  test.afterAll(() => {
    console.log("🔴 afterAll");
  });

  test("test1", async ({}) => {
    console.log("🟣 test1");
  });

  test("test2", async ({}) => {
    console.log("🟣 test2");
  });

  test("test3", async ({}) => {
    console.log("🟣 test3");
  });
});
