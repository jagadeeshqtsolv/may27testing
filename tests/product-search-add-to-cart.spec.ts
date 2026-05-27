import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('Search for a product and add to cart', { tag: ["@e2e","@regression","@P0","@search-add-to-cart-basic"] }, async ({ page, homePage, searchResultsPage, productDetailPage, addToCartPage }) => {
  await test.step('Open — Navigate to Amazon India homepage', async () => {
    await page.goto('/');
  });

  await test.step('Assert visible — Amazon logo is visible', async () => {
    await homePage.expectAmazonInVisible();
  });

  await test.step('Fill — Enter product name in search bar', async () => {
    await homePage.fillFieldKeywords(testData.productSearch.productName);
  });

  await test.step('Click — Click search button', async () => {
    await homePage.clickNavSearchSubmit();
  });

  await test.step('Assert visible — Search results list is visible', async () => {
    await searchResultsPage.expectShowHideShortcutsShiftOptionVisible();
  });

  await test.step('Click — Click first product in results', async () => {
    await searchResultsPage.clickSamsungS26Ultra();
  });

  await test.step('Assert contains — Product title is visible on PDP', async () => {
    await productDetailPage.expectProductSummaryShiftOptionContainsText(testData.productSearch.productName);
  });

  await test.step('Click — Click Add to Cart button', async () => {
    await productDetailPage.clickSubmitAddToCart();
  });

  await test.step('Assert visible — Cart confirmation message is visible', async () => {
    await addToCartPage.expectShowHideShortcutsShiftOptionVisible();
  });

  await test.step('Click — Click cart icon', async () => {
    await addToCartPage.clickExpandAccountAndLists();
  });

  await test.step('Assert contains — Product is present in cart', async () => {
    await addToCartPage.expectFieldKeywordsContainsText(testData.productSearch.productName);
  });
});
