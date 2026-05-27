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

export class AddToCartPage {
  private static readonly L = {
    showHideShortcutsShiftOption: { strategy: 'css' as const, value: '#nav-assist-show-shortcuts', actionKind: 'button' as const },
    fieldKeywords: { strategy: 'css' as const, value: '#twotabsearchtextbox', actionKind: 'textbox' as const },
    expandToChangeLanguage: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
    expandAccountAndLists: { strategy: 'label' as const, value: 'Expand Account and Lists', actionKind: 'button' as const },
    primeDetails: { strategy: 'label' as const, value: 'Prime Details', actionKind: 'button' as const },
    deleteSamsungGalaxyS26: { strategy: 'label' as const, value: 'Delete Samsung Galaxy S26 Ultra 5G (Black, 12GB RAM, 512GB Storage) with Built-in Privacy Display, AI Phone, Photo Assist, Creative Studio, 200MP Camera, 5000mAh Battery and Snapdragon 8 Elite Gen 5', actionKind: 'button' as const },
    increaseQuantityByOne: { strategy: 'label' as const, value: 'Increase quantity by one Samsung Galaxy S26 Ultra 5G (Black, 12GB RAM, 512GB Storage) with Built-in Privacy Display, AI Phone, Photo Assist, Creative Studio, 200MP Camera, 5000mAh Battery and Snapdragon 8 Elite Gen 5', actionKind: 'button' as const },
    backToTop: { strategy: 'css' as const, value: '#navBackToTop', actionKind: 'button' as const },
    expandToChangeLanguage2: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickShowHideShortcutsShiftOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption));
  }

  async doubleClickShowHideShortcutsShiftOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), expected, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), substring, timeoutMs);
  }

  async scrollShowHideShortcutsShiftOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption));
  }

  async fillFieldKeywords(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, AddToCartPage.L.fieldKeywords), value);
  }

  async clearFieldKeywords(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, AddToCartPage.L.fieldKeywords));
  }

  async typeTextFieldKeywords(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, AddToCartPage.L.fieldKeywords), value);
  }

  async expectFieldKeywordsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AddToCartPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddToCartPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddToCartPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddToCartPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddToCartPage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddToCartPage.L.fieldKeywords), timeoutMs);
  }

  async scrollFieldKeywordsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddToCartPage.L.fieldKeywords));
  }

  async clickExpandToChangeLanguage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage));
  }

  async doubleClickExpandToChangeLanguage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), expected, timeoutMs);
  }

  async expectExpandToChangeLanguageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage));
  }

  async clickExpandAccountAndLists(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddToCartPage.L.expandAccountAndLists));
  }

  async doubleClickExpandAccountAndLists(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddToCartPage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), expected, timeoutMs);
  }

  async expectExpandAccountAndListsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), substring, timeoutMs);
  }

  async scrollExpandAccountAndListsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddToCartPage.L.expandAccountAndLists));
  }

  async clickPrimeDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddToCartPage.L.primeDetails));
  }

  async doubleClickPrimeDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddToCartPage.L.primeDetails));
  }

  async expectPrimeDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AddToCartPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddToCartPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddToCartPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddToCartPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddToCartPage.L.primeDetails), expected, timeoutMs);
  }

  async expectPrimeDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddToCartPage.L.primeDetails), substring, timeoutMs);
  }

  async scrollPrimeDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddToCartPage.L.primeDetails));
  }

  async clickDeleteSamsungGalaxyS26(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26));
  }

  async doubleClickDeleteSamsungGalaxyS26(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26));
  }

  async expectDeleteSamsungGalaxyS26Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), timeoutMs);
  }

  async expectDeleteSamsungGalaxyS26Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), timeoutMs);
  }

  async expectDeleteSamsungGalaxyS26Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), timeoutMs);
  }

  async expectDeleteSamsungGalaxyS26Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), timeoutMs);
  }

  async expectDeleteSamsungGalaxyS26Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), expected, timeoutMs);
  }

  async expectDeleteSamsungGalaxyS26ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), substring, timeoutMs);
  }

  async scrollDeleteSamsungGalaxyS26IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26));
  }

  async clickIncreaseQuantityByOne(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne));
  }

  async doubleClickIncreaseQuantityByOne(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne));
  }

  async expectIncreaseQuantityByOneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), timeoutMs);
  }

  async expectIncreaseQuantityByOneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), timeoutMs);
  }

  async expectIncreaseQuantityByOneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), timeoutMs);
  }

  async expectIncreaseQuantityByOneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), timeoutMs);
  }

  async expectIncreaseQuantityByOneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), expected, timeoutMs);
  }

  async expectIncreaseQuantityByOneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), substring, timeoutMs);
  }

  async scrollIncreaseQuantityByOneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne));
  }

  async clickBackToTop(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddToCartPage.L.backToTop));
  }

  async doubleClickBackToTop(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddToCartPage.L.backToTop));
  }

  async expectBackToTopVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AddToCartPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddToCartPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddToCartPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddToCartPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddToCartPage.L.backToTop), expected, timeoutMs);
  }

  async expectBackToTopContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddToCartPage.L.backToTop), substring, timeoutMs);
  }

  async scrollBackToTopIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddToCartPage.L.backToTop));
  }

  async clickExpandToChangeLanguage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2));
  }

  async doubleClickExpandToChangeLanguage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), expected, timeoutMs);
  }

  async expectExpandToChangeLanguage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2));
  }


  async longPressShowHideShortcutsShiftOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), value, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddToCartPage.L.showHideShortcutsShiftOption), count, timeoutMs);
  }

  async expectFieldKeywordsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddToCartPage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddToCartPage.L.fieldKeywords), substring, timeoutMs);
  }

  async expectFieldKeywordsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddToCartPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddToCartPage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddToCartPage.L.fieldKeywords), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), value, timeoutMs);
  }

  async expectExpandToChangeLanguageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage), count, timeoutMs);
  }

  async longPressExpandAccountAndLists(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddToCartPage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), value, timeoutMs);
  }

  async expectExpandAccountAndListsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddToCartPage.L.expandAccountAndLists), count, timeoutMs);
  }

  async longPressPrimeDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddToCartPage.L.primeDetails));
  }

  async expectPrimeDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddToCartPage.L.primeDetails), value, timeoutMs);
  }

  async expectPrimeDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddToCartPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddToCartPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddToCartPage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddToCartPage.L.primeDetails), count, timeoutMs);
  }

  async longPressDeleteSamsungGalaxyS26(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26));
  }

  async expectDeleteSamsungGalaxyS26Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), value, timeoutMs);
  }

  async expectDeleteSamsungGalaxyS26Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), timeoutMs);
  }

  async expectDeleteSamsungGalaxyS26Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), timeoutMs);
  }

  async expectDeleteSamsungGalaxyS26Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), timeoutMs);
  }

  async expectDeleteSamsungGalaxyS26Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddToCartPage.L.deleteSamsungGalaxyS26), count, timeoutMs);
  }

  async longPressIncreaseQuantityByOne(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne));
  }

  async expectIncreaseQuantityByOneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), value, timeoutMs);
  }

  async expectIncreaseQuantityByOneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), timeoutMs);
  }

  async expectIncreaseQuantityByOneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), timeoutMs);
  }

  async expectIncreaseQuantityByOneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), timeoutMs);
  }

  async expectIncreaseQuantityByOneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddToCartPage.L.increaseQuantityByOne), count, timeoutMs);
  }

  async longPressBackToTop(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddToCartPage.L.backToTop));
  }

  async expectBackToTopValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddToCartPage.L.backToTop), value, timeoutMs);
  }

  async expectBackToTopChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddToCartPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddToCartPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddToCartPage.L.backToTop), timeoutMs);
  }

  async expectBackToTopCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddToCartPage.L.backToTop), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), value, timeoutMs);
  }

  async expectExpandToChangeLanguage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddToCartPage.L.expandToChangeLanguage2), count, timeoutMs);
  }

}
