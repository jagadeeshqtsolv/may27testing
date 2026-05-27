import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class ProductDetailPage {
  private static readonly L = {
    productSummaryShiftOption: { strategy: 'css' as const, value: '#nav-assist-product-summary', actionKind: 'button' as const },
    showHideShortcutsShiftOption: { strategy: 'css' as const, value: '#nav-assist-show-shortcuts', actionKind: 'button' as const },
    fieldKeywords: { strategy: 'css' as const, value: '#twotabsearchtextbox', actionKind: 'textbox' as const },
    navSearchSubmit: { strategy: 'css' as const, value: '#nav-search-submit-button', actionKind: 'generic' as const },
    expandToChangeLanguage: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
    expandAccountAndLists: { strategy: 'label' as const, value: 'Expand Account and Lists', actionKind: 'button' as const },
    primeDetails: { strategy: 'label' as const, value: 'Prime Details', actionKind: 'button' as const },
    mobilesAccessoriesYou: { strategy: 'label' as const, value: 'Mobiles & Accessories, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    laptopsAccessoriesYou: { strategy: 'label' as const, value: 'Laptops & Accessories, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    tVHomeEntertainment2: { strategy: 'label' as const, value: 'TV & Home Entertainment, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    audioYouAreCurrently: { strategy: 'label' as const, value: 'Audio, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    camerasYouAreCurrently: { strategy: 'label' as const, value: 'Cameras, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    computerPeripheralsYouAre: { strategy: 'label' as const, value: 'Computer Peripherals, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    smartTechnologyYouAre: { strategy: 'label' as const, value: 'Smart Technology, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    musicalInstrumentsYouAre: { strategy: 'label' as const, value: 'Musical Instruments, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    officeStationeryYou: { strategy: 'label' as const, value: 'Office & Stationery, You are currently on a drop-down. To open this drop-down, Press Enter.', actionKind: 'button' as const },
    withExchangeUpTo: { strategy: 'role' as const, value: 'With Exchange Up to 62,500.00 off', role: 'button', actionKind: 'button' as const },
    withoutExchange1509990015999900: { strategy: 'role' as const, value: 'Without Exchange 150,999.00 159,999.00', role: 'button', actionKind: 'button' as const },
    submitAddToCart: { strategy: 'css' as const, value: '#add-to-cart-button', actionKind: 'generic' as const },
    submitBuyNow: { strategy: 'css' as const, value: '#buy-now-button', actionKind: 'generic' as const },
    offeringID1: { strategy: 'css' as const, value: '#mbb-offeringID-1', actionKind: 'checkbox' as const },
    imgtagwrapperid: { strategy: 'css' as const, value: '#imgTagWrapperId', actionKind: 'generic' as const },
    submitAddToCart2: { strategy: 'css' as const, value: '[name="submit.addToCart"]', actionKind: 'generic' as const },
    clickToPlayVideo7: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    clickToPlayVideo9: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    clickToPlayVideo11: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    clickToPlayVideo13: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    clickToPlayVideo15: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    clickToPlayVideo17: { strategy: 'role' as const, value: 'Click to play video', role: 'button', actionKind: 'button' as const },
    performance34: { strategy: 'role' as const, value: 'Performance(34)', role: 'button', actionKind: 'button' as const },
    camera22: { strategy: 'role' as const, value: 'Camera(22)', role: 'button', actionKind: 'button' as const },
    batteryLife11: { strategy: 'role' as const, value: 'Battery life(11)', role: 'button', actionKind: 'button' as const },
    valueForMoney10: { strategy: 'role' as const, value: 'Value for money(10)', role: 'button', actionKind: 'button' as const },
    features9: { strategy: 'role' as const, value: 'Features(9)', role: 'button', actionKind: 'button' as const },
    privacyScreen7: { strategy: 'role' as const, value: 'Privacy screen(7)', role: 'button', actionKind: 'button' as const },
    color6: { strategy: 'role' as const, value: 'Color(6)', role: 'button', actionKind: 'button' as const },
    design6: { strategy: 'role' as const, value: 'Design(6)', role: 'button', actionKind: 'button' as const },
    backToTop: { strategy: 'css' as const, value: '#navBackToTop', actionKind: 'button' as const },
    expandToChangeLanguage2: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickProductSummaryShiftOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption));
  }

  async doubleClickProductSummaryShiftOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption));
  }

  async expectProductSummaryShiftOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), timeoutMs);
  }

  async expectProductSummaryShiftOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), timeoutMs);
  }

  async expectProductSummaryShiftOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), timeoutMs);
  }

  async expectProductSummaryShiftOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), timeoutMs);
  }

  async expectProductSummaryShiftOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), expected, timeoutMs);
  }

  async expectProductSummaryShiftOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), substring, timeoutMs);
  }

  async scrollProductSummaryShiftOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption));
  }

  async clickShowHideShortcutsShiftOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption));
  }

  async doubleClickShowHideShortcutsShiftOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), expected, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), substring, timeoutMs);
  }

  async scrollShowHideShortcutsShiftOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption));
  }

  async fillFieldKeywords(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, ProductDetailPage.L.fieldKeywords), value);
  }

  async clearFieldKeywords(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, ProductDetailPage.L.fieldKeywords));
  }

  async typeTextFieldKeywords(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, ProductDetailPage.L.fieldKeywords), value);
  }

  async expectFieldKeywordsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.fieldKeywords), timeoutMs);
  }

  async scrollFieldKeywordsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.fieldKeywords));
  }

  async clickNavSearchSubmit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.navSearchSubmit));
  }

  async doubleClickNavSearchSubmit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.navSearchSubmit));
  }

  async expectNavSearchSubmitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), expected, timeoutMs);
  }

  async expectNavSearchSubmitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), substring, timeoutMs);
  }

  async scrollNavSearchSubmitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.navSearchSubmit));
  }

  async clickExpandToChangeLanguage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage));
  }

  async doubleClickExpandToChangeLanguage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), expected, timeoutMs);
  }

  async expectExpandToChangeLanguageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage));
  }

  async clickExpandAccountAndLists(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists));
  }

  async doubleClickExpandAccountAndLists(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), expected, timeoutMs);
  }

  async expectExpandAccountAndListsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), substring, timeoutMs);
  }

  async scrollExpandAccountAndListsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists));
  }

  async clickPrimeDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.primeDetails));
  }

  async doubleClickPrimeDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.primeDetails));
  }

  async expectPrimeDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.primeDetails), expected, timeoutMs);
  }

  async expectPrimeDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.primeDetails), substring, timeoutMs);
  }

  async scrollPrimeDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.primeDetails));
  }

  async clickMobilesAccessoriesYou(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou));
  }

  async doubleClickMobilesAccessoriesYou(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou));
  }

  async expectMobilesAccessoriesYouVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), expected, timeoutMs);
  }

  async expectMobilesAccessoriesYouContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), substring, timeoutMs);
  }

  async scrollMobilesAccessoriesYouIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou));
  }

  async clickLaptopsAccessoriesYou(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou));
  }

  async doubleClickLaptopsAccessoriesYou(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou));
  }

  async expectLaptopsAccessoriesYouVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), expected, timeoutMs);
  }

  async expectLaptopsAccessoriesYouContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), substring, timeoutMs);
  }

  async scrollLaptopsAccessoriesYouIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou));
  }

  async clickTVHomeEntertainment2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2));
  }

  async doubleClickTVHomeEntertainment2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2));
  }

  async expectTVHomeEntertainment2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), expected, timeoutMs);
  }

  async expectTVHomeEntertainment2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), substring, timeoutMs);
  }

  async scrollTVHomeEntertainment2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2));
  }

  async clickAudioYouAreCurrently(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently));
  }

  async doubleClickAudioYouAreCurrently(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently));
  }

  async expectAudioYouAreCurrentlyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), expected, timeoutMs);
  }

  async expectAudioYouAreCurrentlyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), substring, timeoutMs);
  }

  async scrollAudioYouAreCurrentlyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently));
  }

  async clickCamerasYouAreCurrently(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently));
  }

  async doubleClickCamerasYouAreCurrently(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently));
  }

  async expectCamerasYouAreCurrentlyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), expected, timeoutMs);
  }

  async expectCamerasYouAreCurrentlyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), substring, timeoutMs);
  }

  async scrollCamerasYouAreCurrentlyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently));
  }

  async clickComputerPeripheralsYouAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre));
  }

  async doubleClickComputerPeripheralsYouAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre));
  }

  async expectComputerPeripheralsYouAreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), expected, timeoutMs);
  }

  async expectComputerPeripheralsYouAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), substring, timeoutMs);
  }

  async scrollComputerPeripheralsYouAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre));
  }

  async clickSmartTechnologyYouAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre));
  }

  async doubleClickSmartTechnologyYouAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre));
  }

  async expectSmartTechnologyYouAreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), expected, timeoutMs);
  }

  async expectSmartTechnologyYouAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), substring, timeoutMs);
  }

  async scrollSmartTechnologyYouAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre));
  }

  async clickMusicalInstrumentsYouAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre));
  }

  async doubleClickMusicalInstrumentsYouAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre));
  }

  async expectMusicalInstrumentsYouAreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), expected, timeoutMs);
  }

  async expectMusicalInstrumentsYouAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), substring, timeoutMs);
  }

  async scrollMusicalInstrumentsYouAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre));
  }

  async clickOfficeStationeryYou(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.officeStationeryYou));
  }

  async doubleClickOfficeStationeryYou(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.officeStationeryYou));
  }

  async expectOfficeStationeryYouVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), expected, timeoutMs);
  }

  async expectOfficeStationeryYouContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), substring, timeoutMs);
  }

  async scrollOfficeStationeryYouIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.officeStationeryYou));
  }

  async clickWithExchangeUpTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo));
  }

  async doubleClickWithExchangeUpTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo));
  }

  async expectWithExchangeUpToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), expected, timeoutMs);
  }

  async expectWithExchangeUpToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), substring, timeoutMs);
  }

  async scrollWithExchangeUpToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo));
  }

  async clickWithoutExchange1509990015999900(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900));
  }

  async doubleClickWithoutExchange1509990015999900(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900));
  }

  async expectWithoutExchange1509990015999900Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), timeoutMs);
  }

  async expectWithoutExchange1509990015999900Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), timeoutMs);
  }

  async expectWithoutExchange1509990015999900Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), timeoutMs);
  }

  async expectWithoutExchange1509990015999900Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), timeoutMs);
  }

  async expectWithoutExchange1509990015999900Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), expected, timeoutMs);
  }

  async expectWithoutExchange1509990015999900ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), substring, timeoutMs);
  }

  async scrollWithoutExchange1509990015999900IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900));
  }

  async clickSubmitAddToCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.submitAddToCart));
  }

  async doubleClickSubmitAddToCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.submitAddToCart));
  }

  async expectSubmitAddToCartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.submitAddToCart), expected, timeoutMs);
  }

  async expectSubmitAddToCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.submitAddToCart), substring, timeoutMs);
  }

  async scrollSubmitAddToCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.submitAddToCart));
  }

  async clickSubmitBuyNow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.submitBuyNow));
  }

  async doubleClickSubmitBuyNow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.submitBuyNow));
  }

  async expectSubmitBuyNowVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.submitBuyNow), timeoutMs);
  }

  async expectSubmitBuyNowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.submitBuyNow), timeoutMs);
  }

  async expectSubmitBuyNowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.submitBuyNow), timeoutMs);
  }

  async expectSubmitBuyNowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.submitBuyNow), timeoutMs);
  }

  async expectSubmitBuyNowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.submitBuyNow), expected, timeoutMs);
  }

  async expectSubmitBuyNowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.submitBuyNow), substring, timeoutMs);
  }

  async scrollSubmitBuyNowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.submitBuyNow));
  }

  async checkOfferingID1(): Promise<void> {
    await checkWhenVisible(webLocator(this.page, ProductDetailPage.L.offeringID1));
  }

  async uncheckOfferingID1(): Promise<void> {
    await uncheckWhenVisible(webLocator(this.page, ProductDetailPage.L.offeringID1));
  }

  async expectOfferingID1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.offeringID1), timeoutMs);
  }

  async scrollOfferingID1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.offeringID1));
  }

  async clickImgtagwrapperid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid));
  }

  async doubleClickImgtagwrapperid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid));
  }

  async expectImgtagwrapperidVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), timeoutMs);
  }

  async expectImgtagwrapperidHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), timeoutMs);
  }

  async expectImgtagwrapperidEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), timeoutMs);
  }

  async expectImgtagwrapperidDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), timeoutMs);
  }

  async expectImgtagwrapperidText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), expected, timeoutMs);
  }

  async expectImgtagwrapperidContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), substring, timeoutMs);
  }

  async scrollImgtagwrapperidIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid));
  }

  async clickSubmitAddToCart2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.submitAddToCart2));
  }

  async doubleClickSubmitAddToCart2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.submitAddToCart2));
  }

  async expectSubmitAddToCart2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), expected, timeoutMs);
  }

  async expectSubmitAddToCart2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), substring, timeoutMs);
  }

  async scrollSubmitAddToCart2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.submitAddToCart2));
  }

  async clickClickToPlayVideo7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7));
  }

  async doubleClickClickToPlayVideo7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7));
  }

  async expectClickToPlayVideo7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), timeoutMs);
  }

  async expectClickToPlayVideo7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), timeoutMs);
  }

  async expectClickToPlayVideo7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), timeoutMs);
  }

  async expectClickToPlayVideo7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), timeoutMs);
  }

  async expectClickToPlayVideo7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), expected, timeoutMs);
  }

  async expectClickToPlayVideo7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), substring, timeoutMs);
  }

  async scrollClickToPlayVideo7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7));
  }

  async clickClickToPlayVideo9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9));
  }

  async doubleClickClickToPlayVideo9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9));
  }

  async expectClickToPlayVideo9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), timeoutMs);
  }

  async expectClickToPlayVideo9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), timeoutMs);
  }

  async expectClickToPlayVideo9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), timeoutMs);
  }

  async expectClickToPlayVideo9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), timeoutMs);
  }

  async expectClickToPlayVideo9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), expected, timeoutMs);
  }

  async expectClickToPlayVideo9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), substring, timeoutMs);
  }

  async scrollClickToPlayVideo9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9));
  }

  async clickClickToPlayVideo11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11));
  }

  async doubleClickClickToPlayVideo11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11));
  }

  async expectClickToPlayVideo11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), timeoutMs);
  }

  async expectClickToPlayVideo11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), timeoutMs);
  }

  async expectClickToPlayVideo11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), timeoutMs);
  }

  async expectClickToPlayVideo11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), timeoutMs);
  }

  async expectClickToPlayVideo11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), expected, timeoutMs);
  }

  async expectClickToPlayVideo11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), substring, timeoutMs);
  }

  async scrollClickToPlayVideo11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11));
  }

  async clickClickToPlayVideo13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13));
  }

  async doubleClickClickToPlayVideo13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13));
  }

  async expectClickToPlayVideo13Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), timeoutMs);
  }

  async expectClickToPlayVideo13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), timeoutMs);
  }

  async expectClickToPlayVideo13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), timeoutMs);
  }

  async expectClickToPlayVideo13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), timeoutMs);
  }

  async expectClickToPlayVideo13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), expected, timeoutMs);
  }

  async expectClickToPlayVideo13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), substring, timeoutMs);
  }

  async scrollClickToPlayVideo13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13));
  }

  async clickClickToPlayVideo15(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15));
  }

  async doubleClickClickToPlayVideo15(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15));
  }

  async expectClickToPlayVideo15Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), timeoutMs);
  }

  async expectClickToPlayVideo15Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), timeoutMs);
  }

  async expectClickToPlayVideo15Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), timeoutMs);
  }

  async expectClickToPlayVideo15Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), timeoutMs);
  }

  async expectClickToPlayVideo15Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), expected, timeoutMs);
  }

  async expectClickToPlayVideo15ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), substring, timeoutMs);
  }

  async scrollClickToPlayVideo15IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15));
  }

  async clickClickToPlayVideo17(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17));
  }

  async doubleClickClickToPlayVideo17(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17));
  }

  async expectClickToPlayVideo17Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), timeoutMs);
  }

  async expectClickToPlayVideo17Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), timeoutMs);
  }

  async expectClickToPlayVideo17Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), timeoutMs);
  }

  async expectClickToPlayVideo17Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), timeoutMs);
  }

  async expectClickToPlayVideo17Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), expected, timeoutMs);
  }

  async expectClickToPlayVideo17ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), substring, timeoutMs);
  }

  async scrollClickToPlayVideo17IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17));
  }

  async clickPerformance34(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.performance34));
  }

  async doubleClickPerformance34(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.performance34));
  }

  async expectPerformance34Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.performance34), expected, timeoutMs);
  }

  async expectPerformance34ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.performance34), substring, timeoutMs);
  }

  async scrollPerformance34IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.performance34));
  }

  async clickCamera22(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.camera22));
  }

  async doubleClickCamera22(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.camera22));
  }

  async expectCamera22Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.camera22), expected, timeoutMs);
  }

  async expectCamera22ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.camera22), substring, timeoutMs);
  }

  async scrollCamera22IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.camera22));
  }

  async clickBatteryLife11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.batteryLife11));
  }

  async doubleClickBatteryLife11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.batteryLife11));
  }

  async expectBatteryLife11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.batteryLife11), expected, timeoutMs);
  }

  async expectBatteryLife11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.batteryLife11), substring, timeoutMs);
  }

  async scrollBatteryLife11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.batteryLife11));
  }

  async clickValueForMoney10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.valueForMoney10));
  }

  async doubleClickValueForMoney10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.valueForMoney10));
  }

  async expectValueForMoney10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.valueForMoney10), expected, timeoutMs);
  }

  async expectValueForMoney10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.valueForMoney10), substring, timeoutMs);
  }

  async scrollValueForMoney10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.valueForMoney10));
  }

  async clickFeatures9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.features9));
  }

  async doubleClickFeatures9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.features9));
  }

  async expectFeatures9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.features9), expected, timeoutMs);
  }

  async expectFeatures9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.features9), substring, timeoutMs);
  }

  async scrollFeatures9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.features9));
  }

  async clickPrivacyScreen7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.privacyScreen7));
  }

  async doubleClickPrivacyScreen7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.privacyScreen7));
  }

  async expectPrivacyScreen7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.privacyScreen7), expected, timeoutMs);
  }

  async expectPrivacyScreen7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.privacyScreen7), substring, timeoutMs);
  }

  async scrollPrivacyScreen7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.privacyScreen7));
  }

  async clickColor6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.color6));
  }

  async doubleClickColor6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.color6));
  }

  async expectColor6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.color6), timeoutMs);
  }

  async expectColor6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.color6), timeoutMs);
  }

  async expectColor6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.color6), timeoutMs);
  }

  async expectColor6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.color6), timeoutMs);
  }

  async expectColor6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.color6), expected, timeoutMs);
  }

  async expectColor6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.color6), substring, timeoutMs);
  }

  async scrollColor6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.color6));
  }

  async clickDesign6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.design6));
  }

  async doubleClickDesign6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.design6));
  }

  async expectDesign6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.design6), expected, timeoutMs);
  }

  async expectDesign6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.design6), substring, timeoutMs);
  }

  async scrollDesign6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.design6));
  }

  async clickBackToTop(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.backToTop));
  }

  async doubleClickBackToTop(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.backToTop));
  }

  async expectBackToTopVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.backToTop), expected, timeoutMs);
  }

  async expectBackToTopContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.backToTop), substring, timeoutMs);
  }

  async scrollBackToTopIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.backToTop));
  }

  async clickExpandToChangeLanguage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2));
  }

  async doubleClickExpandToChangeLanguage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), expected, timeoutMs);
  }

  async expectExpandToChangeLanguage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2));
  }


  async longPressProductSummaryShiftOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption));
  }

  async expectProductSummaryShiftOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), value, timeoutMs);
  }

  async expectProductSummaryShiftOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), timeoutMs);
  }

  async expectProductSummaryShiftOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), timeoutMs);
  }

  async expectProductSummaryShiftOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), timeoutMs);
  }

  async expectProductSummaryShiftOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.productSummaryShiftOption), count, timeoutMs);
  }

  async longPressShowHideShortcutsShiftOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), value, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.showHideShortcutsShiftOption), count, timeoutMs);
  }

  async expectFieldKeywordsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.fieldKeywords), substring, timeoutMs);
  }

  async expectFieldKeywordsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.fieldKeywords), count, timeoutMs);
  }

  async longPressNavSearchSubmit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.navSearchSubmit));
  }

  async expectNavSearchSubmitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), value, timeoutMs);
  }

  async expectNavSearchSubmitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.navSearchSubmit), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), value, timeoutMs);
  }

  async expectExpandToChangeLanguageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage), count, timeoutMs);
  }

  async longPressExpandAccountAndLists(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), value, timeoutMs);
  }

  async expectExpandAccountAndListsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.expandAccountAndLists), count, timeoutMs);
  }

  async longPressPrimeDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.primeDetails));
  }

  async expectPrimeDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.primeDetails), value, timeoutMs);
  }

  async expectPrimeDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.primeDetails), count, timeoutMs);
  }

  async longPressMobilesAccessoriesYou(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou));
  }

  async expectMobilesAccessoriesYouValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), value, timeoutMs);
  }

  async expectMobilesAccessoriesYouChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), timeoutMs);
  }

  async expectMobilesAccessoriesYouCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.mobilesAccessoriesYou), count, timeoutMs);
  }

  async longPressLaptopsAccessoriesYou(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou));
  }

  async expectLaptopsAccessoriesYouValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), value, timeoutMs);
  }

  async expectLaptopsAccessoriesYouChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), timeoutMs);
  }

  async expectLaptopsAccessoriesYouCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.laptopsAccessoriesYou), count, timeoutMs);
  }

  async longPressTVHomeEntertainment2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2));
  }

  async expectTVHomeEntertainment2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), value, timeoutMs);
  }

  async expectTVHomeEntertainment2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), timeoutMs);
  }

  async expectTVHomeEntertainment2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.tVHomeEntertainment2), count, timeoutMs);
  }

  async longPressAudioYouAreCurrently(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently));
  }

  async expectAudioYouAreCurrentlyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), value, timeoutMs);
  }

  async expectAudioYouAreCurrentlyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), timeoutMs);
  }

  async expectAudioYouAreCurrentlyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.audioYouAreCurrently), count, timeoutMs);
  }

  async longPressCamerasYouAreCurrently(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently));
  }

  async expectCamerasYouAreCurrentlyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), value, timeoutMs);
  }

  async expectCamerasYouAreCurrentlyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), timeoutMs);
  }

  async expectCamerasYouAreCurrentlyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.camerasYouAreCurrently), count, timeoutMs);
  }

  async longPressComputerPeripheralsYouAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre));
  }

  async expectComputerPeripheralsYouAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), value, timeoutMs);
  }

  async expectComputerPeripheralsYouAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), timeoutMs);
  }

  async expectComputerPeripheralsYouAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.computerPeripheralsYouAre), count, timeoutMs);
  }

  async longPressSmartTechnologyYouAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre));
  }

  async expectSmartTechnologyYouAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), value, timeoutMs);
  }

  async expectSmartTechnologyYouAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), timeoutMs);
  }

  async expectSmartTechnologyYouAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.smartTechnologyYouAre), count, timeoutMs);
  }

  async longPressMusicalInstrumentsYouAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre));
  }

  async expectMusicalInstrumentsYouAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), value, timeoutMs);
  }

  async expectMusicalInstrumentsYouAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), timeoutMs);
  }

  async expectMusicalInstrumentsYouAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.musicalInstrumentsYouAre), count, timeoutMs);
  }

  async longPressOfficeStationeryYou(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.officeStationeryYou));
  }

  async expectOfficeStationeryYouValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), value, timeoutMs);
  }

  async expectOfficeStationeryYouChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), timeoutMs);
  }

  async expectOfficeStationeryYouCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.officeStationeryYou), count, timeoutMs);
  }

  async longPressWithExchangeUpTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo));
  }

  async expectWithExchangeUpToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), value, timeoutMs);
  }

  async expectWithExchangeUpToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), timeoutMs);
  }

  async expectWithExchangeUpToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.withExchangeUpTo), count, timeoutMs);
  }

  async longPressWithoutExchange1509990015999900(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900));
  }

  async expectWithoutExchange1509990015999900Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), value, timeoutMs);
  }

  async expectWithoutExchange1509990015999900Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), timeoutMs);
  }

  async expectWithoutExchange1509990015999900Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), timeoutMs);
  }

  async expectWithoutExchange1509990015999900Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), timeoutMs);
  }

  async expectWithoutExchange1509990015999900Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.withoutExchange1509990015999900), count, timeoutMs);
  }

  async longPressSubmitAddToCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.submitAddToCart));
  }

  async expectSubmitAddToCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.submitAddToCart), value, timeoutMs);
  }

  async expectSubmitAddToCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.submitAddToCart), count, timeoutMs);
  }

  async longPressSubmitBuyNow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.submitBuyNow));
  }

  async expectSubmitBuyNowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.submitBuyNow), value, timeoutMs);
  }

  async expectSubmitBuyNowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.submitBuyNow), timeoutMs);
  }

  async expectSubmitBuyNowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.submitBuyNow), timeoutMs);
  }

  async expectSubmitBuyNowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.submitBuyNow), timeoutMs);
  }

  async expectSubmitBuyNowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.submitBuyNow), count, timeoutMs);
  }

  async expectOfferingID1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductDetailPage.L.offeringID1), expected, timeoutMs);
  }

  async expectOfferingID1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductDetailPage.L.offeringID1), substring, timeoutMs);
  }

  async expectOfferingID1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.offeringID1), value, timeoutMs);
  }

  async expectOfferingID1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.offeringID1), timeoutMs);
  }

  async expectOfferingID1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.offeringID1), count, timeoutMs);
  }

  async longPressImgtagwrapperid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid));
  }

  async expectImgtagwrapperidValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), value, timeoutMs);
  }

  async expectImgtagwrapperidChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), timeoutMs);
  }

  async expectImgtagwrapperidUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), timeoutMs);
  }

  async expectImgtagwrapperidFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), timeoutMs);
  }

  async expectImgtagwrapperidCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.imgtagwrapperid), count, timeoutMs);
  }

  async longPressSubmitAddToCart2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.submitAddToCart2));
  }

  async expectSubmitAddToCart2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), value, timeoutMs);
  }

  async expectSubmitAddToCart2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.submitAddToCart2), count, timeoutMs);
  }

  async longPressClickToPlayVideo7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7));
  }

  async expectClickToPlayVideo7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), value, timeoutMs);
  }

  async expectClickToPlayVideo7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), timeoutMs);
  }

  async expectClickToPlayVideo7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), timeoutMs);
  }

  async expectClickToPlayVideo7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), timeoutMs);
  }

  async expectClickToPlayVideo7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo7), count, timeoutMs);
  }

  async longPressClickToPlayVideo9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9));
  }

  async expectClickToPlayVideo9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), value, timeoutMs);
  }

  async expectClickToPlayVideo9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), timeoutMs);
  }

  async expectClickToPlayVideo9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), timeoutMs);
  }

  async expectClickToPlayVideo9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), timeoutMs);
  }

  async expectClickToPlayVideo9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo9), count, timeoutMs);
  }

  async longPressClickToPlayVideo11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11));
  }

  async expectClickToPlayVideo11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), value, timeoutMs);
  }

  async expectClickToPlayVideo11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), timeoutMs);
  }

  async expectClickToPlayVideo11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), timeoutMs);
  }

  async expectClickToPlayVideo11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), timeoutMs);
  }

  async expectClickToPlayVideo11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo11), count, timeoutMs);
  }

  async longPressClickToPlayVideo13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13));
  }

  async expectClickToPlayVideo13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), value, timeoutMs);
  }

  async expectClickToPlayVideo13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), timeoutMs);
  }

  async expectClickToPlayVideo13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), timeoutMs);
  }

  async expectClickToPlayVideo13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), timeoutMs);
  }

  async expectClickToPlayVideo13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo13), count, timeoutMs);
  }

  async longPressClickToPlayVideo15(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15));
  }

  async expectClickToPlayVideo15Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), value, timeoutMs);
  }

  async expectClickToPlayVideo15Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), timeoutMs);
  }

  async expectClickToPlayVideo15Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), timeoutMs);
  }

  async expectClickToPlayVideo15Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), timeoutMs);
  }

  async expectClickToPlayVideo15Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo15), count, timeoutMs);
  }

  async longPressClickToPlayVideo17(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17));
  }

  async expectClickToPlayVideo17Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), value, timeoutMs);
  }

  async expectClickToPlayVideo17Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), timeoutMs);
  }

  async expectClickToPlayVideo17Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), timeoutMs);
  }

  async expectClickToPlayVideo17Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), timeoutMs);
  }

  async expectClickToPlayVideo17Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.clickToPlayVideo17), count, timeoutMs);
  }

  async longPressPerformance34(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.performance34));
  }

  async expectPerformance34Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.performance34), value, timeoutMs);
  }

  async expectPerformance34Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.performance34), timeoutMs);
  }

  async expectPerformance34Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.performance34), count, timeoutMs);
  }

  async longPressCamera22(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.camera22));
  }

  async expectCamera22Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.camera22), value, timeoutMs);
  }

  async expectCamera22Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.camera22), timeoutMs);
  }

  async expectCamera22Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.camera22), count, timeoutMs);
  }

  async longPressBatteryLife11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.batteryLife11));
  }

  async expectBatteryLife11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.batteryLife11), value, timeoutMs);
  }

  async expectBatteryLife11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.batteryLife11), timeoutMs);
  }

  async expectBatteryLife11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.batteryLife11), count, timeoutMs);
  }

  async longPressValueForMoney10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.valueForMoney10));
  }

  async expectValueForMoney10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.valueForMoney10), value, timeoutMs);
  }

  async expectValueForMoney10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.valueForMoney10), timeoutMs);
  }

  async expectValueForMoney10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.valueForMoney10), count, timeoutMs);
  }

  async longPressFeatures9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.features9));
  }

  async expectFeatures9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.features9), value, timeoutMs);
  }

  async expectFeatures9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.features9), timeoutMs);
  }

  async expectFeatures9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.features9), count, timeoutMs);
  }

  async longPressPrivacyScreen7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.privacyScreen7));
  }

  async expectPrivacyScreen7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.privacyScreen7), value, timeoutMs);
  }

  async expectPrivacyScreen7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.privacyScreen7), timeoutMs);
  }

  async expectPrivacyScreen7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.privacyScreen7), count, timeoutMs);
  }

  async longPressColor6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.color6));
  }

  async expectColor6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.color6), value, timeoutMs);
  }

  async expectColor6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.color6), timeoutMs);
  }

  async expectColor6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.color6), timeoutMs);
  }

  async expectColor6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.color6), timeoutMs);
  }

  async expectColor6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.color6), count, timeoutMs);
  }

  async longPressDesign6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.design6));
  }

  async expectDesign6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.design6), value, timeoutMs);
  }

  async expectDesign6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.design6), timeoutMs);
  }

  async expectDesign6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.design6), count, timeoutMs);
  }

  async longPressBackToTop(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.backToTop));
  }

  async expectBackToTopValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.backToTop), value, timeoutMs);
  }

  async expectBackToTopChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.backToTop), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), value, timeoutMs);
  }

  async expectExpandToChangeLanguage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductDetailPage.L.expandToChangeLanguage2), count, timeoutMs);
  }

}
