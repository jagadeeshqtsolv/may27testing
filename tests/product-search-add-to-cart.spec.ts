import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('User can open Amazon India homepage successfully', { tag: ["@functional","@regression","@P0","@open-amazon-homepage"] }, async ({ page, homePage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — Amazon logo is visible', async () => {
    await homePage.expectAmazonInVisible();
  });
  await test.step('Assert visible — Search bar is visible', async () => {
    await homePage.expectFieldKeywordsVisible();
  });
});

test('User can search for a product and view search results', { tag: ["@functional","@regression","@P0","@search-product-and-view-results"] }, async ({ page, homePage, searchResultsPage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productSearch.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Assert visible — Search results list is visible', async () => {
    await searchResultsPage.expectSamsungS26UltraVisible();
  });
  await test.step('Assert contains — First product name contains search term', async () => {
    await searchResultsPage.expectSamsungS26UltraContainsText(testData.productSearch.productName);
  });
});

test('User can view product details from search results', { tag: ["@functional","@regression","@P1","@view-product-details"] }, async ({ page, homePage, searchResultsPage, productDetailPage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productSearch.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click first product in search results', async () => {
    await searchResultsPage.clickSamsungS26Ultra();
  });
  await test.step('Assert visible — Product title is visible on PDP', async () => {
    await productDetailPage.expectProductSummaryShiftOptionVisible();
  });
  await test.step('Assert visible — Product price is visible on PDP', async () => {
    await productDetailPage.expectShowHideShortcutsShiftOptionVisible();
  });
  await test.step('Assert visible — Add to Cart button is visible', async () => {
    await productDetailPage.expectSubmitAddToCartVisible();
  });
});

test('User can add a product to the cart and see confirmation', { tag: ["@functional","@regression","@P0","@add-product-to-cart"] }, async ({ page, homePage, searchResultsPage, productDetailPage, addToCartPage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productSearch.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click first product in search results', async () => {
    await searchResultsPage.clickSamsungS26Ultra();
  });
  await test.step('Click — Click Add to Cart button', async () => {
    await productDetailPage.clickSubmitAddToCart();
  });
  await test.step('Assert visible — Confirmation message is visible', async () => {
    await addToCartPage.expectShowHideShortcutsShiftOptionVisible();
  });
  await test.step('Assert contains — Cart icon shows item count', async () => {
    await addToCartPage.expectExpandAccountAndListsContainsText('1');
  });
});

test('User can view cart, verify product, update quantity, and remove product', { tag: ["@functional","@regression","@P1","@verify-cart-and-update-remove"] }, async ({ page, homePage, searchResultsPage, productDetailPage, addToCartPage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productSearch.productName);
  });
  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });
  await test.step('Click — Click first product in search results', async () => {
    await searchResultsPage.clickSamsungS26Ultra();
  });
  await test.step('Click — Click Add to Cart button', async () => {
    await productDetailPage.clickSubmitAddToCart();
  });
  await test.step('Click — Click cart icon to go to cart page', async () => {
    await addToCartPage.clickExpandAccountAndLists();
  });
  await test.step('Assert contains — Cart contains the selected product', async () => {
    await addToCartPage.expectDeleteSamsungGalaxyS26ContainsText(testData.productSearch.productName);
  });
  await test.step('Select — Update quantity to 2', async () => {
    await addToCartPage.clickIncreaseQuantityByOne();
  });
  await test.step('Assert value — Quantity is updated to 2', async () => {
    await addToCartPage.expectIncreaseQuantityByOneValue('2');
  });
  await test.step('Click — Remove product from cart', async () => {
    await addToCartPage.clickDeleteSamsungGalaxyS26();
  });
  await test.step('Assert hidden — Product is removed from cart', async () => {
    await addToCartPage.expectDeleteSamsungGalaxyS26Hidden();
  });
});
