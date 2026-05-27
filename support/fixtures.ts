import { test as base, expect } from "@playwright/test";
import { AddToCartPage } from "../pageobjects/AddToCartPage";
import { HomePage } from "../pageobjects/HomePage";
import { ProductDetailPage } from "../pageobjects/ProductDetailPage";
import { SearchResultsPage } from "../pageobjects/SearchResultsPage";
import { SigninPage } from "../pageobjects/SigninPage";

type AppFixtures = {
  addToCartPage: AddToCartPage;
  homePage: HomePage;
  productDetailPage: ProductDetailPage;
  searchResultsPage: SearchResultsPage;
  signinPage: SigninPage;
};

export const test = base.extend<AppFixtures>({
  addToCartPage: async ({ page }, use) => {
    await use(new AddToCartPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productDetailPage: async ({ page }, use) => {
    await use(new ProductDetailPage(page));
  },
  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
  signinPage: async ({ page }, use) => {
    await use(new SigninPage(page));
  },
});

export { expect };
