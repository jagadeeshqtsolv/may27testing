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

export class SearchResultsPage {
  private static readonly L = {
    showHideShortcutsShiftOption: { strategy: 'css' as const, value: '#nav-assist-show-shortcuts', actionKind: 'button' as const },
    fieldKeywords: { strategy: 'css' as const, value: '#twotabsearchtextbox', actionKind: 'textbox' as const },
    navSearchSubmit: { strategy: 'css' as const, value: '#nav-search-submit-button', actionKind: 'generic' as const },
    expandToChangeLanguage: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
    expandAccountAndLists: { strategy: 'label' as const, value: 'Expand Account and Lists', actionKind: 'button' as const },
    primeDetails: { strategy: 'label' as const, value: 'Prime Details', actionKind: 'button' as const },
    samsungS26Ultra: { strategy: 'text' as const, value: '"samsung s26 ultra"', actionKind: 'text' as const },
    s: { strategy: 'css' as const, value: '#s-result-sort-select', actionKind: 'combobox' as const },
    leaveFeedbackOnSponsored: { strategy: 'label' as const, value: 'Leave feedback on Sponsored ad', actionKind: 'generic' as const },
    submitAddToCart: { strategy: 'css' as const, value: '#a-autoid-3-announce', actionKind: 'button' as const },
    submitAddToCart2: { strategy: 'css' as const, value: '#a-autoid-4-announce', actionKind: 'button' as const },
    submitAddToCart3: { strategy: 'css' as const, value: '#a-autoid-5-announce', actionKind: 'button' as const },
    submitAddToCart4: { strategy: 'css' as const, value: '#a-autoid-6-announce', actionKind: 'button' as const },
    submitAddToCart5: { strategy: 'css' as const, value: '#a-autoid-7-announce', actionKind: 'button' as const },
    submitAddToCart6: { strategy: 'css' as const, value: '#a-autoid-8-announce', actionKind: 'button' as const },
    submitAddToCart7: { strategy: 'css' as const, value: '#a-autoid-9-announce', actionKind: 'button' as const },
    submitAddToCart8: { strategy: 'css' as const, value: '#a-autoid-10-announce', actionKind: 'button' as const },
    submitAddToCart9: { strategy: 'css' as const, value: '#a-autoid-11-announce', actionKind: 'button' as const },
    submitAddToCart10: { strategy: 'css' as const, value: '#a-autoid-12-announce', actionKind: 'button' as const },
    submitAddToCart11: { strategy: 'css' as const, value: '#a-autoid-13-announce', actionKind: 'button' as const },
    submitAddToCart12: { strategy: 'css' as const, value: '#a-autoid-14-announce', actionKind: 'button' as const },
    submitAddToCart13: { strategy: 'css' as const, value: '#a-autoid-15-announce', actionKind: 'button' as const },
    submitAddToCart14: { strategy: 'css' as const, value: '#a-autoid-16-announce', actionKind: 'button' as const },
    submitAddToCart15: { strategy: 'css' as const, value: '#a-autoid-17-announce', actionKind: 'button' as const },
    submitAddToCart16: { strategy: 'css' as const, value: '#a-autoid-18-announce', actionKind: 'button' as const },
    submitAddToCart17: { strategy: 'css' as const, value: '#a-autoid-19-announce', actionKind: 'button' as const },
    submitAddToCart18: { strategy: 'css' as const, value: '#a-autoid-20-announce', actionKind: 'button' as const },
    previous: { strategy: 'role' as const, value: 'Previous', role: 'button', actionKind: 'button' as const },
    page1: { strategy: 'label' as const, value: 'Page 1', actionKind: 'generic' as const },
    span: { strategy: 'role' as const, value: '20', role: 'button', actionKind: 'button' as const },
    leaveFeedbackOnSponsored2: { strategy: 'label' as const, value: 'Leave feedback on Sponsored ad', actionKind: 'generic' as const },
    backToTop: { strategy: 'css' as const, value: '#navBackToTop', actionKind: 'button' as const },
    expandToChangeLanguage2: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickShowHideShortcutsShiftOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption));
  }

  async doubleClickShowHideShortcutsShiftOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), expected, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), substring, timeoutMs);
  }

  async scrollShowHideShortcutsShiftOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption));
  }

  async fillFieldKeywords(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SearchResultsPage.L.fieldKeywords), value);
  }

  async clearFieldKeywords(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SearchResultsPage.L.fieldKeywords));
  }

  async typeTextFieldKeywords(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SearchResultsPage.L.fieldKeywords), value);
  }

  async expectFieldKeywordsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.fieldKeywords), timeoutMs);
  }

  async scrollFieldKeywordsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.fieldKeywords));
  }

  async clickNavSearchSubmit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.navSearchSubmit));
  }

  async doubleClickNavSearchSubmit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.navSearchSubmit));
  }

  async expectNavSearchSubmitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), expected, timeoutMs);
  }

  async expectNavSearchSubmitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), substring, timeoutMs);
  }

  async scrollNavSearchSubmitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.navSearchSubmit));
  }

  async clickExpandToChangeLanguage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage));
  }

  async doubleClickExpandToChangeLanguage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), expected, timeoutMs);
  }

  async expectExpandToChangeLanguageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage));
  }

  async clickExpandAccountAndLists(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists));
  }

  async doubleClickExpandAccountAndLists(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), expected, timeoutMs);
  }

  async expectExpandAccountAndListsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), substring, timeoutMs);
  }

  async scrollExpandAccountAndListsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists));
  }

  async clickPrimeDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.primeDetails));
  }

  async doubleClickPrimeDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.primeDetails));
  }

  async expectPrimeDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.primeDetails), expected, timeoutMs);
  }

  async expectPrimeDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.primeDetails), substring, timeoutMs);
  }

  async scrollPrimeDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.primeDetails));
  }

  async getInnerTextSamsungS26Ultra(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra));
  }

  async expectSamsungS26UltraVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), timeoutMs);
  }

  async expectSamsungS26UltraHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), timeoutMs);
  }

  async expectSamsungS26UltraText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), expected, timeoutMs);
  }

  async expectSamsungS26UltraContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), substring, timeoutMs);
  }

  async scrollSamsungS26UltraIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra));
  }

  async selectS(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, SearchResultsPage.L.s), value);
  }

  async expectSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.s), timeoutMs);
  }

  async expectSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.s), timeoutMs);
  }

  async expectSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.s), timeoutMs);
  }

  async expectSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.s), timeoutMs);
  }

  async expectSValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.s), expected, timeoutMs);
  }

  async expectSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.s), timeoutMs);
  }

  async scrollSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.s));
  }

  async clickLeaveFeedbackOnSponsored(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored));
  }

  async doubleClickLeaveFeedbackOnSponsored(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored));
  }

  async expectLeaveFeedbackOnSponsoredVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsoredHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsoredEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsoredDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsoredText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), expected, timeoutMs);
  }

  async expectLeaveFeedbackOnSponsoredContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), substring, timeoutMs);
  }

  async scrollLeaveFeedbackOnSponsoredIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored));
  }

  async clickSubmitAddToCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart));
  }

  async doubleClickSubmitAddToCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart));
  }

  async expectSubmitAddToCartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart), expected, timeoutMs);
  }

  async expectSubmitAddToCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart), substring, timeoutMs);
  }

  async scrollSubmitAddToCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart));
  }

  async clickSubmitAddToCart2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart2));
  }

  async doubleClickSubmitAddToCart2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart2));
  }

  async expectSubmitAddToCart2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), expected, timeoutMs);
  }

  async expectSubmitAddToCart2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), substring, timeoutMs);
  }

  async scrollSubmitAddToCart2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart2));
  }

  async clickSubmitAddToCart3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart3));
  }

  async doubleClickSubmitAddToCart3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart3));
  }

  async expectSubmitAddToCart3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), timeoutMs);
  }

  async expectSubmitAddToCart3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), timeoutMs);
  }

  async expectSubmitAddToCart3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), timeoutMs);
  }

  async expectSubmitAddToCart3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), timeoutMs);
  }

  async expectSubmitAddToCart3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), expected, timeoutMs);
  }

  async expectSubmitAddToCart3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), substring, timeoutMs);
  }

  async scrollSubmitAddToCart3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart3));
  }

  async clickSubmitAddToCart4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart4));
  }

  async doubleClickSubmitAddToCart4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart4));
  }

  async expectSubmitAddToCart4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), timeoutMs);
  }

  async expectSubmitAddToCart4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), timeoutMs);
  }

  async expectSubmitAddToCart4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), timeoutMs);
  }

  async expectSubmitAddToCart4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), timeoutMs);
  }

  async expectSubmitAddToCart4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), expected, timeoutMs);
  }

  async expectSubmitAddToCart4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), substring, timeoutMs);
  }

  async scrollSubmitAddToCart4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart4));
  }

  async clickSubmitAddToCart5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart5));
  }

  async doubleClickSubmitAddToCart5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart5));
  }

  async expectSubmitAddToCart5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), timeoutMs);
  }

  async expectSubmitAddToCart5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), timeoutMs);
  }

  async expectSubmitAddToCart5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), timeoutMs);
  }

  async expectSubmitAddToCart5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), timeoutMs);
  }

  async expectSubmitAddToCart5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), expected, timeoutMs);
  }

  async expectSubmitAddToCart5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), substring, timeoutMs);
  }

  async scrollSubmitAddToCart5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart5));
  }

  async clickSubmitAddToCart6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart6));
  }

  async doubleClickSubmitAddToCart6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart6));
  }

  async expectSubmitAddToCart6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), timeoutMs);
  }

  async expectSubmitAddToCart6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), timeoutMs);
  }

  async expectSubmitAddToCart6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), timeoutMs);
  }

  async expectSubmitAddToCart6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), timeoutMs);
  }

  async expectSubmitAddToCart6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), expected, timeoutMs);
  }

  async expectSubmitAddToCart6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), substring, timeoutMs);
  }

  async scrollSubmitAddToCart6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart6));
  }

  async clickSubmitAddToCart7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart7));
  }

  async doubleClickSubmitAddToCart7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart7));
  }

  async expectSubmitAddToCart7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), timeoutMs);
  }

  async expectSubmitAddToCart7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), timeoutMs);
  }

  async expectSubmitAddToCart7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), timeoutMs);
  }

  async expectSubmitAddToCart7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), timeoutMs);
  }

  async expectSubmitAddToCart7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), expected, timeoutMs);
  }

  async expectSubmitAddToCart7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), substring, timeoutMs);
  }

  async scrollSubmitAddToCart7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart7));
  }

  async clickSubmitAddToCart8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart8));
  }

  async doubleClickSubmitAddToCart8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart8));
  }

  async expectSubmitAddToCart8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), timeoutMs);
  }

  async expectSubmitAddToCart8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), timeoutMs);
  }

  async expectSubmitAddToCart8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), timeoutMs);
  }

  async expectSubmitAddToCart8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), timeoutMs);
  }

  async expectSubmitAddToCart8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), expected, timeoutMs);
  }

  async expectSubmitAddToCart8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), substring, timeoutMs);
  }

  async scrollSubmitAddToCart8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart8));
  }

  async clickSubmitAddToCart9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart9));
  }

  async doubleClickSubmitAddToCart9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart9));
  }

  async expectSubmitAddToCart9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), timeoutMs);
  }

  async expectSubmitAddToCart9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), timeoutMs);
  }

  async expectSubmitAddToCart9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), timeoutMs);
  }

  async expectSubmitAddToCart9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), timeoutMs);
  }

  async expectSubmitAddToCart9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), expected, timeoutMs);
  }

  async expectSubmitAddToCart9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), substring, timeoutMs);
  }

  async scrollSubmitAddToCart9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart9));
  }

  async clickSubmitAddToCart10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart10));
  }

  async doubleClickSubmitAddToCart10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart10));
  }

  async expectSubmitAddToCart10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), timeoutMs);
  }

  async expectSubmitAddToCart10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), timeoutMs);
  }

  async expectSubmitAddToCart10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), timeoutMs);
  }

  async expectSubmitAddToCart10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), timeoutMs);
  }

  async expectSubmitAddToCart10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), expected, timeoutMs);
  }

  async expectSubmitAddToCart10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), substring, timeoutMs);
  }

  async scrollSubmitAddToCart10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart10));
  }

  async clickSubmitAddToCart11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart11));
  }

  async doubleClickSubmitAddToCart11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart11));
  }

  async expectSubmitAddToCart11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), timeoutMs);
  }

  async expectSubmitAddToCart11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), timeoutMs);
  }

  async expectSubmitAddToCart11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), timeoutMs);
  }

  async expectSubmitAddToCart11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), timeoutMs);
  }

  async expectSubmitAddToCart11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), expected, timeoutMs);
  }

  async expectSubmitAddToCart11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), substring, timeoutMs);
  }

  async scrollSubmitAddToCart11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart11));
  }

  async clickSubmitAddToCart12(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart12));
  }

  async doubleClickSubmitAddToCart12(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart12));
  }

  async expectSubmitAddToCart12Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), timeoutMs);
  }

  async expectSubmitAddToCart12Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), timeoutMs);
  }

  async expectSubmitAddToCart12Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), timeoutMs);
  }

  async expectSubmitAddToCart12Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), timeoutMs);
  }

  async expectSubmitAddToCart12Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), expected, timeoutMs);
  }

  async expectSubmitAddToCart12ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), substring, timeoutMs);
  }

  async scrollSubmitAddToCart12IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart12));
  }

  async clickSubmitAddToCart13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart13));
  }

  async doubleClickSubmitAddToCart13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart13));
  }

  async expectSubmitAddToCart13Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), timeoutMs);
  }

  async expectSubmitAddToCart13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), timeoutMs);
  }

  async expectSubmitAddToCart13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), timeoutMs);
  }

  async expectSubmitAddToCart13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), timeoutMs);
  }

  async expectSubmitAddToCart13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), expected, timeoutMs);
  }

  async expectSubmitAddToCart13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), substring, timeoutMs);
  }

  async scrollSubmitAddToCart13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart13));
  }

  async clickSubmitAddToCart14(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart14));
  }

  async doubleClickSubmitAddToCart14(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart14));
  }

  async expectSubmitAddToCart14Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), timeoutMs);
  }

  async expectSubmitAddToCart14Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), timeoutMs);
  }

  async expectSubmitAddToCart14Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), timeoutMs);
  }

  async expectSubmitAddToCart14Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), timeoutMs);
  }

  async expectSubmitAddToCart14Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), expected, timeoutMs);
  }

  async expectSubmitAddToCart14ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), substring, timeoutMs);
  }

  async scrollSubmitAddToCart14IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart14));
  }

  async clickSubmitAddToCart15(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart15));
  }

  async doubleClickSubmitAddToCart15(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart15));
  }

  async expectSubmitAddToCart15Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), timeoutMs);
  }

  async expectSubmitAddToCart15Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), timeoutMs);
  }

  async expectSubmitAddToCart15Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), timeoutMs);
  }

  async expectSubmitAddToCart15Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), timeoutMs);
  }

  async expectSubmitAddToCart15Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), expected, timeoutMs);
  }

  async expectSubmitAddToCart15ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), substring, timeoutMs);
  }

  async scrollSubmitAddToCart15IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart15));
  }

  async clickSubmitAddToCart16(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart16));
  }

  async doubleClickSubmitAddToCart16(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart16));
  }

  async expectSubmitAddToCart16Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), timeoutMs);
  }

  async expectSubmitAddToCart16Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), timeoutMs);
  }

  async expectSubmitAddToCart16Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), timeoutMs);
  }

  async expectSubmitAddToCart16Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), timeoutMs);
  }

  async expectSubmitAddToCart16Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), expected, timeoutMs);
  }

  async expectSubmitAddToCart16ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), substring, timeoutMs);
  }

  async scrollSubmitAddToCart16IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart16));
  }

  async clickSubmitAddToCart17(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart17));
  }

  async doubleClickSubmitAddToCart17(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart17));
  }

  async expectSubmitAddToCart17Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), timeoutMs);
  }

  async expectSubmitAddToCart17Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), timeoutMs);
  }

  async expectSubmitAddToCart17Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), timeoutMs);
  }

  async expectSubmitAddToCart17Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), timeoutMs);
  }

  async expectSubmitAddToCart17Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), expected, timeoutMs);
  }

  async expectSubmitAddToCart17ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), substring, timeoutMs);
  }

  async scrollSubmitAddToCart17IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart17));
  }

  async clickSubmitAddToCart18(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart18));
  }

  async doubleClickSubmitAddToCart18(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart18));
  }

  async expectSubmitAddToCart18Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), timeoutMs);
  }

  async expectSubmitAddToCart18Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), timeoutMs);
  }

  async expectSubmitAddToCart18Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), timeoutMs);
  }

  async expectSubmitAddToCart18Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), timeoutMs);
  }

  async expectSubmitAddToCart18Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), expected, timeoutMs);
  }

  async expectSubmitAddToCart18ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), substring, timeoutMs);
  }

  async scrollSubmitAddToCart18IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart18));
  }

  async clickPrevious(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.previous));
  }

  async doubleClickPrevious(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.previous));
  }

  async expectPreviousVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.previous), timeoutMs);
  }

  async expectPreviousHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.previous), timeoutMs);
  }

  async expectPreviousEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.previous), timeoutMs);
  }

  async expectPreviousDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.previous), timeoutMs);
  }

  async expectPreviousText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.previous), expected, timeoutMs);
  }

  async expectPreviousContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.previous), substring, timeoutMs);
  }

  async scrollPreviousIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.previous));
  }

  async clickPage1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.page1));
  }

  async doubleClickPage1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.page1));
  }

  async expectPage1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.page1), timeoutMs);
  }

  async expectPage1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.page1), timeoutMs);
  }

  async expectPage1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.page1), timeoutMs);
  }

  async expectPage1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.page1), timeoutMs);
  }

  async expectPage1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.page1), expected, timeoutMs);
  }

  async expectPage1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.page1), substring, timeoutMs);
  }

  async scrollPage1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.page1));
  }

  async clickSpan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.span));
  }

  async doubleClickSpan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.span));
  }

  async expectSpanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.span), timeoutMs);
  }

  async expectSpanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.span), timeoutMs);
  }

  async expectSpanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.span), timeoutMs);
  }

  async expectSpanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.span), timeoutMs);
  }

  async expectSpanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.span), expected, timeoutMs);
  }

  async expectSpanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.span), substring, timeoutMs);
  }

  async scrollSpanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.span));
  }

  async clickLeaveFeedbackOnSponsored2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2));
  }

  async doubleClickLeaveFeedbackOnSponsored2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2));
  }

  async expectLeaveFeedbackOnSponsored2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsored2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsored2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsored2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsored2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), expected, timeoutMs);
  }

  async expectLeaveFeedbackOnSponsored2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), substring, timeoutMs);
  }

  async scrollLeaveFeedbackOnSponsored2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2));
  }

  async clickBackToTop(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.backToTop));
  }

  async doubleClickBackToTop(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.backToTop));
  }

  async expectBackToTopVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.backToTop), expected, timeoutMs);
  }

  async expectBackToTopContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.backToTop), substring, timeoutMs);
  }

  async scrollBackToTopIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.backToTop));
  }

  async clickExpandToChangeLanguage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2));
  }

  async doubleClickExpandToChangeLanguage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), expected, timeoutMs);
  }

  async expectExpandToChangeLanguage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2));
  }


  async longPressShowHideShortcutsShiftOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), value, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.showHideShortcutsShiftOption), count, timeoutMs);
  }

  async expectFieldKeywordsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.fieldKeywords), substring, timeoutMs);
  }

  async expectFieldKeywordsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.fieldKeywords), count, timeoutMs);
  }

  async longPressNavSearchSubmit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.navSearchSubmit));
  }

  async expectNavSearchSubmitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), value, timeoutMs);
  }

  async expectNavSearchSubmitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.navSearchSubmit), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), value, timeoutMs);
  }

  async expectExpandToChangeLanguageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage), count, timeoutMs);
  }

  async longPressExpandAccountAndLists(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), value, timeoutMs);
  }

  async expectExpandAccountAndListsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.expandAccountAndLists), count, timeoutMs);
  }

  async longPressPrimeDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.primeDetails));
  }

  async expectPrimeDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.primeDetails), value, timeoutMs);
  }

  async expectPrimeDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.primeDetails), count, timeoutMs);
  }

  async clickSamsungS26Ultra(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra));
  }

  async doubleClickSamsungS26Ultra(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra));
  }

  async longPressSamsungS26Ultra(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra));
  }

  async expectSamsungS26UltraValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), value, timeoutMs);
  }

  async expectSamsungS26UltraEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), timeoutMs);
  }

  async expectSamsungS26UltraDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), timeoutMs);
  }

  async expectSamsungS26UltraChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), timeoutMs);
  }

  async expectSamsungS26UltraUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), timeoutMs);
  }

  async expectSamsungS26UltraFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), timeoutMs);
  }

  async expectSamsungS26UltraCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.samsungS26Ultra), count, timeoutMs);
  }

  async expectSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultsPage.L.s), expected, timeoutMs);
  }

  async expectSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultsPage.L.s), substring, timeoutMs);
  }

  async expectSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.s), timeoutMs);
  }

  async expectSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.s), timeoutMs);
  }

  async expectSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.s), count, timeoutMs);
  }

  async longPressLeaveFeedbackOnSponsored(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored));
  }

  async expectLeaveFeedbackOnSponsoredValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), value, timeoutMs);
  }

  async expectLeaveFeedbackOnSponsoredChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsoredUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsoredFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsoredCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored), count, timeoutMs);
  }

  async longPressSubmitAddToCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart));
  }

  async expectSubmitAddToCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart), value, timeoutMs);
  }

  async expectSubmitAddToCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart), timeoutMs);
  }

  async expectSubmitAddToCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart), count, timeoutMs);
  }

  async longPressSubmitAddToCart2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart2));
  }

  async expectSubmitAddToCart2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), value, timeoutMs);
  }

  async expectSubmitAddToCart2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), timeoutMs);
  }

  async expectSubmitAddToCart2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart2), count, timeoutMs);
  }

  async longPressSubmitAddToCart3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart3));
  }

  async expectSubmitAddToCart3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), value, timeoutMs);
  }

  async expectSubmitAddToCart3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), timeoutMs);
  }

  async expectSubmitAddToCart3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), timeoutMs);
  }

  async expectSubmitAddToCart3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), timeoutMs);
  }

  async expectSubmitAddToCart3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart3), count, timeoutMs);
  }

  async longPressSubmitAddToCart4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart4));
  }

  async expectSubmitAddToCart4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), value, timeoutMs);
  }

  async expectSubmitAddToCart4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), timeoutMs);
  }

  async expectSubmitAddToCart4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), timeoutMs);
  }

  async expectSubmitAddToCart4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), timeoutMs);
  }

  async expectSubmitAddToCart4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart4), count, timeoutMs);
  }

  async longPressSubmitAddToCart5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart5));
  }

  async expectSubmitAddToCart5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), value, timeoutMs);
  }

  async expectSubmitAddToCart5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), timeoutMs);
  }

  async expectSubmitAddToCart5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), timeoutMs);
  }

  async expectSubmitAddToCart5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), timeoutMs);
  }

  async expectSubmitAddToCart5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart5), count, timeoutMs);
  }

  async longPressSubmitAddToCart6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart6));
  }

  async expectSubmitAddToCart6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), value, timeoutMs);
  }

  async expectSubmitAddToCart6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), timeoutMs);
  }

  async expectSubmitAddToCart6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), timeoutMs);
  }

  async expectSubmitAddToCart6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), timeoutMs);
  }

  async expectSubmitAddToCart6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart6), count, timeoutMs);
  }

  async longPressSubmitAddToCart7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart7));
  }

  async expectSubmitAddToCart7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), value, timeoutMs);
  }

  async expectSubmitAddToCart7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), timeoutMs);
  }

  async expectSubmitAddToCart7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), timeoutMs);
  }

  async expectSubmitAddToCart7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), timeoutMs);
  }

  async expectSubmitAddToCart7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart7), count, timeoutMs);
  }

  async longPressSubmitAddToCart8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart8));
  }

  async expectSubmitAddToCart8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), value, timeoutMs);
  }

  async expectSubmitAddToCart8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), timeoutMs);
  }

  async expectSubmitAddToCart8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), timeoutMs);
  }

  async expectSubmitAddToCart8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), timeoutMs);
  }

  async expectSubmitAddToCart8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart8), count, timeoutMs);
  }

  async longPressSubmitAddToCart9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart9));
  }

  async expectSubmitAddToCart9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), value, timeoutMs);
  }

  async expectSubmitAddToCart9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), timeoutMs);
  }

  async expectSubmitAddToCart9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), timeoutMs);
  }

  async expectSubmitAddToCart9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), timeoutMs);
  }

  async expectSubmitAddToCart9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart9), count, timeoutMs);
  }

  async longPressSubmitAddToCart10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart10));
  }

  async expectSubmitAddToCart10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), value, timeoutMs);
  }

  async expectSubmitAddToCart10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), timeoutMs);
  }

  async expectSubmitAddToCart10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), timeoutMs);
  }

  async expectSubmitAddToCart10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), timeoutMs);
  }

  async expectSubmitAddToCart10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart10), count, timeoutMs);
  }

  async longPressSubmitAddToCart11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart11));
  }

  async expectSubmitAddToCart11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), value, timeoutMs);
  }

  async expectSubmitAddToCart11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), timeoutMs);
  }

  async expectSubmitAddToCart11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), timeoutMs);
  }

  async expectSubmitAddToCart11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), timeoutMs);
  }

  async expectSubmitAddToCart11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart11), count, timeoutMs);
  }

  async longPressSubmitAddToCart12(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart12));
  }

  async expectSubmitAddToCart12Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), value, timeoutMs);
  }

  async expectSubmitAddToCart12Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), timeoutMs);
  }

  async expectSubmitAddToCart12Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), timeoutMs);
  }

  async expectSubmitAddToCart12Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), timeoutMs);
  }

  async expectSubmitAddToCart12Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart12), count, timeoutMs);
  }

  async longPressSubmitAddToCart13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart13));
  }

  async expectSubmitAddToCart13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), value, timeoutMs);
  }

  async expectSubmitAddToCart13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), timeoutMs);
  }

  async expectSubmitAddToCart13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), timeoutMs);
  }

  async expectSubmitAddToCart13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), timeoutMs);
  }

  async expectSubmitAddToCart13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart13), count, timeoutMs);
  }

  async longPressSubmitAddToCart14(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart14));
  }

  async expectSubmitAddToCart14Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), value, timeoutMs);
  }

  async expectSubmitAddToCart14Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), timeoutMs);
  }

  async expectSubmitAddToCart14Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), timeoutMs);
  }

  async expectSubmitAddToCart14Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), timeoutMs);
  }

  async expectSubmitAddToCart14Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart14), count, timeoutMs);
  }

  async longPressSubmitAddToCart15(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart15));
  }

  async expectSubmitAddToCart15Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), value, timeoutMs);
  }

  async expectSubmitAddToCart15Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), timeoutMs);
  }

  async expectSubmitAddToCart15Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), timeoutMs);
  }

  async expectSubmitAddToCart15Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), timeoutMs);
  }

  async expectSubmitAddToCart15Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart15), count, timeoutMs);
  }

  async longPressSubmitAddToCart16(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart16));
  }

  async expectSubmitAddToCart16Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), value, timeoutMs);
  }

  async expectSubmitAddToCart16Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), timeoutMs);
  }

  async expectSubmitAddToCart16Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), timeoutMs);
  }

  async expectSubmitAddToCart16Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), timeoutMs);
  }

  async expectSubmitAddToCart16Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart16), count, timeoutMs);
  }

  async longPressSubmitAddToCart17(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart17));
  }

  async expectSubmitAddToCart17Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), value, timeoutMs);
  }

  async expectSubmitAddToCart17Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), timeoutMs);
  }

  async expectSubmitAddToCart17Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), timeoutMs);
  }

  async expectSubmitAddToCart17Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), timeoutMs);
  }

  async expectSubmitAddToCart17Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart17), count, timeoutMs);
  }

  async longPressSubmitAddToCart18(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.submitAddToCart18));
  }

  async expectSubmitAddToCart18Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), value, timeoutMs);
  }

  async expectSubmitAddToCart18Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), timeoutMs);
  }

  async expectSubmitAddToCart18Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), timeoutMs);
  }

  async expectSubmitAddToCart18Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), timeoutMs);
  }

  async expectSubmitAddToCart18Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.submitAddToCart18), count, timeoutMs);
  }

  async longPressPrevious(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.previous));
  }

  async expectPreviousValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.previous), value, timeoutMs);
  }

  async expectPreviousChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.previous), timeoutMs);
  }

  async expectPreviousUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.previous), timeoutMs);
  }

  async expectPreviousFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.previous), timeoutMs);
  }

  async expectPreviousCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.previous), count, timeoutMs);
  }

  async longPressPage1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.page1));
  }

  async expectPage1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.page1), value, timeoutMs);
  }

  async expectPage1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.page1), timeoutMs);
  }

  async expectPage1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.page1), timeoutMs);
  }

  async expectPage1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.page1), timeoutMs);
  }

  async expectPage1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.page1), count, timeoutMs);
  }

  async longPressSpan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.span));
  }

  async expectSpanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.span), value, timeoutMs);
  }

  async expectSpanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.span), timeoutMs);
  }

  async expectSpanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.span), timeoutMs);
  }

  async expectSpanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.span), timeoutMs);
  }

  async expectSpanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.span), count, timeoutMs);
  }

  async longPressLeaveFeedbackOnSponsored2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2));
  }

  async expectLeaveFeedbackOnSponsored2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), value, timeoutMs);
  }

  async expectLeaveFeedbackOnSponsored2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsored2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsored2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), timeoutMs);
  }

  async expectLeaveFeedbackOnSponsored2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.leaveFeedbackOnSponsored2), count, timeoutMs);
  }

  async longPressBackToTop(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.backToTop));
  }

  async expectBackToTopValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.backToTop), value, timeoutMs);
  }

  async expectBackToTopChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.backToTop), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), value, timeoutMs);
  }

  async expectExpandToChangeLanguage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultsPage.L.expandToChangeLanguage2), count, timeoutMs);
  }

}
