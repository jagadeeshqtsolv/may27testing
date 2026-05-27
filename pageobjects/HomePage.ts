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

export class HomePage {
  private static readonly L = {
    navAssistantLinksHeading: { strategy: 'css' as const, value: '#nav-assistant-links-heading', actionKind: 'text' as const },
    mainContent: { strategy: 'css' as const, value: '#nav-assist-skip-to-main-content', actionKind: 'link' as const },
    navAssistShortcutsHeading: { strategy: 'css' as const, value: '#nav-assist-shortcuts-heading', actionKind: 'text' as const },
    searchOpt: { strategy: 'text' as const, value: 'Search opt + /', actionKind: 'text' as const },
    searchOptionForwardSlash: { strategy: 'css' as const, value: '#nav-assist-search', actionKind: 'link' as const },
    showHideShortcutsShiftOption: { strategy: 'css' as const, value: '#nav-assist-show-shortcuts', actionKind: 'button' as const },
    amazonIn: { strategy: 'css' as const, value: '#nav-logo-sprites', actionKind: 'link' as const },
    navSearchLabelId: { strategy: 'css' as const, value: '#nav-search-label-id', actionKind: 'text' as const },
    fieldKeywords: { strategy: 'css' as const, value: '#twotabsearchtextbox', actionKind: 'textbox' as const },
    navSearchSubmit: { strategy: 'css' as const, value: '#nav-search-submit-button', actionKind: 'generic' as const },
    expandToChangeLanguage: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
    expandAccountAndLists: { strategy: 'label' as const, value: 'Expand Account and Lists', actionKind: 'button' as const },
    primeDetails: { strategy: 'label' as const, value: 'Prime Details', actionKind: 'button' as const },
    watchNow: { strategy: 'testId' as const, value: 'OverlayClick', actionKind: 'generic' as const },
    tapWatchNowTo: { strategy: 'testId' as const, value: 'watchNow', actionKind: 'button' as const },
    unmute: { strategy: 'label' as const, value: 'Unmute', actionKind: 'button' as const },
    play: { strategy: 'label' as const, value: 'Play', actionKind: 'button' as const },
    himalayaProteinHairFloral: { strategy: 'text' as const, value: 'Himalaya Protein Hair Floral Scent Cream for All Hair Types, 200 Millilitres', actionKind: 'generic' as const },
    nebesaOrganicsSkincareBaby: { strategy: 'text' as const, value: 'Nebesa Organics Skincare Baby Glow Massage Oil For Baby Care 100ml', actionKind: 'generic' as const },
    natureSureJonkShampoo: { strategy: 'text' as const, value: 'Nature Sure Jonk Shampoo Hair Cleanser for Men & Women – 1 Pack (300ml)', actionKind: 'generic' as const },
    hairCareHair: { strategy: 'role' as const, value: 'Hair & Care Hair Oil, 100ml', role: 'button', actionKind: 'button' as const },
    titleWatchMoreLivestreamsLinkTextSee: { strategy: 'label' as const, value: 'Title:Watch more livestreams LinkText:See more', actionKind: 'generic' as const },
    watchMoreLivestreams: { strategy: 'role' as const, value: 'Watch more livestreams', role: 'button', actionKind: 'button' as const },
    backToTop: { strategy: 'css' as const, value: '#navBackToTop', actionKind: 'button' as const },
    amazonAppDownload: { strategy: 'role' as const, value: 'Amazon App Download', role: 'link', actionKind: 'link' as const },
    help: { strategy: 'role' as const, value: 'Help', role: 'link', actionKind: 'link' as const },
    amazonIndiaHome: { strategy: 'label' as const, value: 'Amazon India Home', actionKind: 'link' as const },
    chooseALanguageFor2: { strategy: 'label' as const, value: 'Choose a language for shopping. Current selection is English. ', actionKind: 'link' as const },
    expandToChangeLanguage2: { strategy: 'label' as const, value: 'Expand to Change Language or Country', actionKind: 'button' as const },
    conditionsOfUse: { strategy: 'role' as const, value: 'Conditions of Use & Sale', role: 'link', actionKind: 'link' as const },
    privacyNotice: { strategy: 'role' as const, value: 'Privacy Notice', role: 'link', actionKind: 'link' as const },
    interestBasedAds: { strategy: 'role' as const, value: 'Interest-Based Ads', role: 'link', actionKind: 'link' as const },
    AmazonComInc: { strategy: 'text' as const, value: '© 1996-2026, Amazon.com, Inc. or its affiliates', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextNavAssistantLinksHeading(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.navAssistantLinksHeading));
  }

  async expectNavAssistantLinksHeadingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.navAssistantLinksHeading), timeoutMs);
  }

  async expectNavAssistantLinksHeadingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.navAssistantLinksHeading), timeoutMs);
  }

  async expectNavAssistantLinksHeadingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.navAssistantLinksHeading), expected, timeoutMs);
  }

  async expectNavAssistantLinksHeadingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.navAssistantLinksHeading), substring, timeoutMs);
  }

  async scrollNavAssistantLinksHeadingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.navAssistantLinksHeading));
  }

  async clickMainContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.mainContent));
  }

  async doubleClickMainContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.mainContent));
  }

  async expectMainContentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.mainContent), timeoutMs);
  }

  async expectMainContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.mainContent), timeoutMs);
  }

  async expectMainContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.mainContent), expected, timeoutMs);
  }

  async expectMainContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.mainContent), substring, timeoutMs);
  }

  async scrollMainContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.mainContent));
  }

  async getInnerTextNavAssistShortcutsHeading(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.navAssistShortcutsHeading));
  }

  async expectNavAssistShortcutsHeadingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), timeoutMs);
  }

  async expectNavAssistShortcutsHeadingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), timeoutMs);
  }

  async expectNavAssistShortcutsHeadingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), expected, timeoutMs);
  }

  async expectNavAssistShortcutsHeadingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), substring, timeoutMs);
  }

  async scrollNavAssistShortcutsHeadingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.navAssistShortcutsHeading));
  }

  async getInnerTextSearchOpt(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.searchOpt));
  }

  async expectSearchOptVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.searchOpt), expected, timeoutMs);
  }

  async expectSearchOptContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.searchOpt), substring, timeoutMs);
  }

  async scrollSearchOptIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.searchOpt));
  }

  async clickSearchOptionForwardSlash(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.searchOptionForwardSlash));
  }

  async doubleClickSearchOptionForwardSlash(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.searchOptionForwardSlash));
  }

  async expectSearchOptionForwardSlashVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.searchOptionForwardSlash), expected, timeoutMs);
  }

  async expectSearchOptionForwardSlashContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.searchOptionForwardSlash), substring, timeoutMs);
  }

  async scrollSearchOptionForwardSlashIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.searchOptionForwardSlash));
  }

  async clickShowHideShortcutsShiftOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption));
  }

  async doubleClickShowHideShortcutsShiftOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), expected, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), substring, timeoutMs);
  }

  async scrollShowHideShortcutsShiftOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption));
  }

  async clickAmazonIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.amazonIn));
  }

  async doubleClickAmazonIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.amazonIn));
  }

  async expectAmazonInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.amazonIn), timeoutMs);
  }

  async expectAmazonInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.amazonIn), timeoutMs);
  }

  async expectAmazonInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.amazonIn), expected, timeoutMs);
  }

  async expectAmazonInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.amazonIn), substring, timeoutMs);
  }

  async scrollAmazonInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.amazonIn));
  }

  async getInnerTextNavSearchLabelId(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.navSearchLabelId));
  }

  async expectNavSearchLabelIdVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.navSearchLabelId), timeoutMs);
  }

  async expectNavSearchLabelIdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.navSearchLabelId), timeoutMs);
  }

  async expectNavSearchLabelIdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.navSearchLabelId), expected, timeoutMs);
  }

  async expectNavSearchLabelIdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.navSearchLabelId), substring, timeoutMs);
  }

  async scrollNavSearchLabelIdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.navSearchLabelId));
  }

  async fillFieldKeywords(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.fieldKeywords), value);
  }

  async clearFieldKeywords(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.fieldKeywords));
  }

  async typeTextFieldKeywords(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.fieldKeywords), value);
  }

  async expectFieldKeywordsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async scrollFieldKeywordsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.fieldKeywords));
  }

  async clickNavSearchSubmit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.navSearchSubmit));
  }

  async doubleClickNavSearchSubmit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.navSearchSubmit));
  }

  async expectNavSearchSubmitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.navSearchSubmit), expected, timeoutMs);
  }

  async expectNavSearchSubmitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.navSearchSubmit), substring, timeoutMs);
  }

  async scrollNavSearchSubmitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.navSearchSubmit));
  }

  async clickExpandToChangeLanguage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage));
  }

  async doubleClickExpandToChangeLanguage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.expandToChangeLanguage), expected, timeoutMs);
  }

  async expectExpandToChangeLanguageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.expandToChangeLanguage), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage));
  }

  async clickExpandAccountAndLists(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.expandAccountAndLists));
  }

  async doubleClickExpandAccountAndLists(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.expandAccountAndLists), expected, timeoutMs);
  }

  async expectExpandAccountAndListsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.expandAccountAndLists), substring, timeoutMs);
  }

  async scrollExpandAccountAndListsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.expandAccountAndLists));
  }

  async clickPrimeDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.primeDetails));
  }

  async doubleClickPrimeDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.primeDetails));
  }

  async expectPrimeDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.primeDetails), expected, timeoutMs);
  }

  async expectPrimeDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.primeDetails), substring, timeoutMs);
  }

  async scrollPrimeDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.primeDetails));
  }

  async clickWatchNow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.watchNow));
  }

  async doubleClickWatchNow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.watchNow));
  }

  async expectWatchNowVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.watchNow), expected, timeoutMs);
  }

  async expectWatchNowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.watchNow), substring, timeoutMs);
  }

  async scrollWatchNowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.watchNow));
  }

  async clickTapWatchNowTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.tapWatchNowTo));
  }

  async doubleClickTapWatchNowTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.tapWatchNowTo));
  }

  async expectTapWatchNowToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.tapWatchNowTo), expected, timeoutMs);
  }

  async expectTapWatchNowToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.tapWatchNowTo), substring, timeoutMs);
  }

  async scrollTapWatchNowToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.tapWatchNowTo));
  }

  async clickUnmute(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.unmute));
  }

  async doubleClickUnmute(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.unmute));
  }

  async expectUnmuteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.unmute), expected, timeoutMs);
  }

  async expectUnmuteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.unmute), substring, timeoutMs);
  }

  async scrollUnmuteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.unmute));
  }

  async clickPlay(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.play));
  }

  async doubleClickPlay(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.play));
  }

  async expectPlayVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.play), expected, timeoutMs);
  }

  async expectPlayContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.play), substring, timeoutMs);
  }

  async scrollPlayIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.play));
  }

  async clickHimalayaProteinHairFloral(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.himalayaProteinHairFloral));
  }

  async doubleClickHimalayaProteinHairFloral(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.himalayaProteinHairFloral));
  }

  async expectHimalayaProteinHairFloralVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), timeoutMs);
  }

  async expectHimalayaProteinHairFloralHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), timeoutMs);
  }

  async expectHimalayaProteinHairFloralEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), timeoutMs);
  }

  async expectHimalayaProteinHairFloralDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), timeoutMs);
  }

  async expectHimalayaProteinHairFloralText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), expected, timeoutMs);
  }

  async expectHimalayaProteinHairFloralContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), substring, timeoutMs);
  }

  async scrollHimalayaProteinHairFloralIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.himalayaProteinHairFloral));
  }

  async clickNebesaOrganicsSkincareBaby(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby));
  }

  async doubleClickNebesaOrganicsSkincareBaby(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby));
  }

  async expectNebesaOrganicsSkincareBabyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), timeoutMs);
  }

  async expectNebesaOrganicsSkincareBabyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), timeoutMs);
  }

  async expectNebesaOrganicsSkincareBabyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), timeoutMs);
  }

  async expectNebesaOrganicsSkincareBabyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), timeoutMs);
  }

  async expectNebesaOrganicsSkincareBabyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), expected, timeoutMs);
  }

  async expectNebesaOrganicsSkincareBabyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), substring, timeoutMs);
  }

  async scrollNebesaOrganicsSkincareBabyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby));
  }

  async clickNatureSureJonkShampoo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.natureSureJonkShampoo));
  }

  async doubleClickNatureSureJonkShampoo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.natureSureJonkShampoo));
  }

  async expectNatureSureJonkShampooVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.natureSureJonkShampoo), timeoutMs);
  }

  async expectNatureSureJonkShampooHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.natureSureJonkShampoo), timeoutMs);
  }

  async expectNatureSureJonkShampooEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.natureSureJonkShampoo), timeoutMs);
  }

  async expectNatureSureJonkShampooDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.natureSureJonkShampoo), timeoutMs);
  }

  async expectNatureSureJonkShampooText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.natureSureJonkShampoo), expected, timeoutMs);
  }

  async expectNatureSureJonkShampooContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.natureSureJonkShampoo), substring, timeoutMs);
  }

  async scrollNatureSureJonkShampooIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.natureSureJonkShampoo));
  }

  async clickHairCareHair(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.hairCareHair));
  }

  async doubleClickHairCareHair(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.hairCareHair));
  }

  async expectHairCareHairVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.hairCareHair), timeoutMs);
  }

  async expectHairCareHairHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.hairCareHair), timeoutMs);
  }

  async expectHairCareHairEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.hairCareHair), timeoutMs);
  }

  async expectHairCareHairDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.hairCareHair), timeoutMs);
  }

  async expectHairCareHairText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.hairCareHair), expected, timeoutMs);
  }

  async expectHairCareHairContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.hairCareHair), substring, timeoutMs);
  }

  async scrollHairCareHairIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.hairCareHair));
  }

  async clickTitleWatchMoreLivestreamsLinkTextSee(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee));
  }

  async doubleClickTitleWatchMoreLivestreamsLinkTextSee(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee));
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), expected, timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), substring, timeoutMs);
  }

  async scrollTitleWatchMoreLivestreamsLinkTextSeeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee));
  }

  async clickWatchMoreLivestreams(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.watchMoreLivestreams));
  }

  async doubleClickWatchMoreLivestreams(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.watchMoreLivestreams));
  }

  async expectWatchMoreLivestreamsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.watchMoreLivestreams), expected, timeoutMs);
  }

  async expectWatchMoreLivestreamsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.watchMoreLivestreams), substring, timeoutMs);
  }

  async scrollWatchMoreLivestreamsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.watchMoreLivestreams));
  }

  async clickBackToTop(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.backToTop));
  }

  async doubleClickBackToTop(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.backToTop));
  }

  async expectBackToTopVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.backToTop), expected, timeoutMs);
  }

  async expectBackToTopContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.backToTop), substring, timeoutMs);
  }

  async scrollBackToTopIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.backToTop));
  }

  async clickAmazonAppDownload(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.amazonAppDownload));
  }

  async doubleClickAmazonAppDownload(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.amazonAppDownload));
  }

  async expectAmazonAppDownloadVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.amazonAppDownload), timeoutMs);
  }

  async expectAmazonAppDownloadHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.amazonAppDownload), timeoutMs);
  }

  async expectAmazonAppDownloadText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.amazonAppDownload), expected, timeoutMs);
  }

  async expectAmazonAppDownloadContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.amazonAppDownload), substring, timeoutMs);
  }

  async scrollAmazonAppDownloadIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.amazonAppDownload));
  }

  async clickHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.help));
  }

  async doubleClickHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.help));
  }

  async expectHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.help), timeoutMs);
  }

  async expectHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.help), timeoutMs);
  }

  async expectHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.help), expected, timeoutMs);
  }

  async expectHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.help), substring, timeoutMs);
  }

  async scrollHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.help));
  }

  async clickAmazonIndiaHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.amazonIndiaHome));
  }

  async doubleClickAmazonIndiaHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.amazonIndiaHome));
  }

  async expectAmazonIndiaHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.amazonIndiaHome), timeoutMs);
  }

  async expectAmazonIndiaHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.amazonIndiaHome), timeoutMs);
  }

  async expectAmazonIndiaHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.amazonIndiaHome), expected, timeoutMs);
  }

  async expectAmazonIndiaHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.amazonIndiaHome), substring, timeoutMs);
  }

  async scrollAmazonIndiaHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.amazonIndiaHome));
  }

  async clickChooseALanguageFor2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.chooseALanguageFor2));
  }

  async doubleClickChooseALanguageFor2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.chooseALanguageFor2));
  }

  async expectChooseALanguageFor2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.chooseALanguageFor2), timeoutMs);
  }

  async expectChooseALanguageFor2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.chooseALanguageFor2), timeoutMs);
  }

  async expectChooseALanguageFor2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.chooseALanguageFor2), expected, timeoutMs);
  }

  async expectChooseALanguageFor2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.chooseALanguageFor2), substring, timeoutMs);
  }

  async scrollChooseALanguageFor2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.chooseALanguageFor2));
  }

  async clickExpandToChangeLanguage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage2));
  }

  async doubleClickExpandToChangeLanguage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.expandToChangeLanguage2), expected, timeoutMs);
  }

  async expectExpandToChangeLanguage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.expandToChangeLanguage2), substring, timeoutMs);
  }

  async scrollExpandToChangeLanguage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage2));
  }

  async clickConditionsOfUse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.conditionsOfUse));
  }

  async doubleClickConditionsOfUse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.conditionsOfUse));
  }

  async expectConditionsOfUseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.conditionsOfUse), expected, timeoutMs);
  }

  async expectConditionsOfUseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.conditionsOfUse), substring, timeoutMs);
  }

  async scrollConditionsOfUseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.conditionsOfUse));
  }

  async clickPrivacyNotice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.privacyNotice));
  }

  async doubleClickPrivacyNotice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.privacyNotice));
  }

  async expectPrivacyNoticeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.privacyNotice), expected, timeoutMs);
  }

  async expectPrivacyNoticeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.privacyNotice), substring, timeoutMs);
  }

  async scrollPrivacyNoticeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.privacyNotice));
  }

  async clickInterestBasedAds(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.interestBasedAds));
  }

  async doubleClickInterestBasedAds(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.interestBasedAds));
  }

  async expectInterestBasedAdsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.interestBasedAds), timeoutMs);
  }

  async expectInterestBasedAdsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.interestBasedAds), timeoutMs);
  }

  async expectInterestBasedAdsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.interestBasedAds), expected, timeoutMs);
  }

  async expectInterestBasedAdsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.interestBasedAds), substring, timeoutMs);
  }

  async scrollInterestBasedAdsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.interestBasedAds));
  }

  async getInnerTextAmazonComInc(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.AmazonComInc));
  }

  async expectAmazonComIncVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.AmazonComInc), expected, timeoutMs);
  }

  async expectAmazonComIncContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.AmazonComInc), substring, timeoutMs);
  }

  async scrollAmazonComIncIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.AmazonComInc));
  }


  async clickNavAssistantLinksHeading(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.navAssistantLinksHeading));
  }

  async doubleClickNavAssistantLinksHeading(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.navAssistantLinksHeading));
  }

  async longPressNavAssistantLinksHeading(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.navAssistantLinksHeading));
  }

  async expectNavAssistantLinksHeadingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.navAssistantLinksHeading), value, timeoutMs);
  }

  async expectNavAssistantLinksHeadingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.navAssistantLinksHeading), timeoutMs);
  }

  async expectNavAssistantLinksHeadingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.navAssistantLinksHeading), timeoutMs);
  }

  async expectNavAssistantLinksHeadingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.navAssistantLinksHeading), timeoutMs);
  }

  async expectNavAssistantLinksHeadingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.navAssistantLinksHeading), timeoutMs);
  }

  async expectNavAssistantLinksHeadingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.navAssistantLinksHeading), timeoutMs);
  }

  async expectNavAssistantLinksHeadingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.navAssistantLinksHeading), count, timeoutMs);
  }

  async longPressMainContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.mainContent));
  }

  async expectMainContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.mainContent), value, timeoutMs);
  }

  async expectMainContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.mainContent), timeoutMs);
  }

  async expectMainContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.mainContent), timeoutMs);
  }

  async expectMainContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.mainContent), timeoutMs);
  }

  async expectMainContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.mainContent), timeoutMs);
  }

  async expectMainContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.mainContent), timeoutMs);
  }

  async expectMainContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.mainContent), count, timeoutMs);
  }

  async clickNavAssistShortcutsHeading(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.navAssistShortcutsHeading));
  }

  async doubleClickNavAssistShortcutsHeading(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.navAssistShortcutsHeading));
  }

  async longPressNavAssistShortcutsHeading(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.navAssistShortcutsHeading));
  }

  async expectNavAssistShortcutsHeadingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), value, timeoutMs);
  }

  async expectNavAssistShortcutsHeadingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), timeoutMs);
  }

  async expectNavAssistShortcutsHeadingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), timeoutMs);
  }

  async expectNavAssistShortcutsHeadingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), timeoutMs);
  }

  async expectNavAssistShortcutsHeadingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), timeoutMs);
  }

  async expectNavAssistShortcutsHeadingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), timeoutMs);
  }

  async expectNavAssistShortcutsHeadingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.navAssistShortcutsHeading), count, timeoutMs);
  }

  async clickSearchOpt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.searchOpt));
  }

  async doubleClickSearchOpt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.searchOpt));
  }

  async longPressSearchOpt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.searchOpt));
  }

  async expectSearchOptValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.searchOpt), value, timeoutMs);
  }

  async expectSearchOptEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.searchOpt), timeoutMs);
  }

  async expectSearchOptCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.searchOpt), count, timeoutMs);
  }

  async longPressSearchOptionForwardSlash(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.searchOptionForwardSlash));
  }

  async expectSearchOptionForwardSlashValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.searchOptionForwardSlash), value, timeoutMs);
  }

  async expectSearchOptionForwardSlashEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.searchOptionForwardSlash), timeoutMs);
  }

  async expectSearchOptionForwardSlashCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.searchOptionForwardSlash), count, timeoutMs);
  }

  async longPressShowHideShortcutsShiftOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption));
  }

  async expectShowHideShortcutsShiftOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), value, timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), timeoutMs);
  }

  async expectShowHideShortcutsShiftOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showHideShortcutsShiftOption), count, timeoutMs);
  }

  async longPressAmazonIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.amazonIn));
  }

  async expectAmazonInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.amazonIn), value, timeoutMs);
  }

  async expectAmazonInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.amazonIn), timeoutMs);
  }

  async expectAmazonInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.amazonIn), timeoutMs);
  }

  async expectAmazonInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.amazonIn), timeoutMs);
  }

  async expectAmazonInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.amazonIn), timeoutMs);
  }

  async expectAmazonInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.amazonIn), timeoutMs);
  }

  async expectAmazonInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.amazonIn), count, timeoutMs);
  }

  async clickNavSearchLabelId(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.navSearchLabelId));
  }

  async doubleClickNavSearchLabelId(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.navSearchLabelId));
  }

  async longPressNavSearchLabelId(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.navSearchLabelId));
  }

  async expectNavSearchLabelIdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.navSearchLabelId), value, timeoutMs);
  }

  async expectNavSearchLabelIdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.navSearchLabelId), timeoutMs);
  }

  async expectNavSearchLabelIdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.navSearchLabelId), timeoutMs);
  }

  async expectNavSearchLabelIdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.navSearchLabelId), timeoutMs);
  }

  async expectNavSearchLabelIdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.navSearchLabelId), timeoutMs);
  }

  async expectNavSearchLabelIdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.navSearchLabelId), timeoutMs);
  }

  async expectNavSearchLabelIdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.navSearchLabelId), count, timeoutMs);
  }

  async expectFieldKeywordsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.fieldKeywords), expected, timeoutMs);
  }

  async expectFieldKeywordsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.fieldKeywords), substring, timeoutMs);
  }

  async expectFieldKeywordsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.fieldKeywords), timeoutMs);
  }

  async expectFieldKeywordsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.fieldKeywords), count, timeoutMs);
  }

  async longPressNavSearchSubmit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.navSearchSubmit));
  }

  async expectNavSearchSubmitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.navSearchSubmit), value, timeoutMs);
  }

  async expectNavSearchSubmitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.navSearchSubmit), timeoutMs);
  }

  async expectNavSearchSubmitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.navSearchSubmit), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage));
  }

  async expectExpandToChangeLanguageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.expandToChangeLanguage), value, timeoutMs);
  }

  async expectExpandToChangeLanguageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.expandToChangeLanguage), timeoutMs);
  }

  async expectExpandToChangeLanguageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.expandToChangeLanguage), count, timeoutMs);
  }

  async longPressExpandAccountAndLists(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.expandAccountAndLists));
  }

  async expectExpandAccountAndListsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.expandAccountAndLists), value, timeoutMs);
  }

  async expectExpandAccountAndListsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.expandAccountAndLists), timeoutMs);
  }

  async expectExpandAccountAndListsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.expandAccountAndLists), count, timeoutMs);
  }

  async longPressPrimeDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.primeDetails));
  }

  async expectPrimeDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.primeDetails), value, timeoutMs);
  }

  async expectPrimeDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.primeDetails), timeoutMs);
  }

  async expectPrimeDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.primeDetails), count, timeoutMs);
  }

  async longPressWatchNow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.watchNow));
  }

  async expectWatchNowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.watchNow), value, timeoutMs);
  }

  async expectWatchNowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.watchNow), timeoutMs);
  }

  async expectWatchNowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.watchNow), count, timeoutMs);
  }

  async longPressTapWatchNowTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.tapWatchNowTo));
  }

  async expectTapWatchNowToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.tapWatchNowTo), value, timeoutMs);
  }

  async expectTapWatchNowToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.tapWatchNowTo), timeoutMs);
  }

  async expectTapWatchNowToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.tapWatchNowTo), count, timeoutMs);
  }

  async longPressUnmute(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.unmute));
  }

  async expectUnmuteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.unmute), value, timeoutMs);
  }

  async expectUnmuteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.unmute), timeoutMs);
  }

  async expectUnmuteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.unmute), count, timeoutMs);
  }

  async longPressPlay(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.play));
  }

  async expectPlayValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.play), value, timeoutMs);
  }

  async expectPlayChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.play), timeoutMs);
  }

  async expectPlayCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.play), count, timeoutMs);
  }

  async longPressHimalayaProteinHairFloral(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.himalayaProteinHairFloral));
  }

  async expectHimalayaProteinHairFloralValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), value, timeoutMs);
  }

  async expectHimalayaProteinHairFloralChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), timeoutMs);
  }

  async expectHimalayaProteinHairFloralUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), timeoutMs);
  }

  async expectHimalayaProteinHairFloralFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), timeoutMs);
  }

  async expectHimalayaProteinHairFloralCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.himalayaProteinHairFloral), count, timeoutMs);
  }

  async longPressNebesaOrganicsSkincareBaby(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby));
  }

  async expectNebesaOrganicsSkincareBabyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), value, timeoutMs);
  }

  async expectNebesaOrganicsSkincareBabyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), timeoutMs);
  }

  async expectNebesaOrganicsSkincareBabyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), timeoutMs);
  }

  async expectNebesaOrganicsSkincareBabyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), timeoutMs);
  }

  async expectNebesaOrganicsSkincareBabyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.nebesaOrganicsSkincareBaby), count, timeoutMs);
  }

  async longPressNatureSureJonkShampoo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.natureSureJonkShampoo));
  }

  async expectNatureSureJonkShampooValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.natureSureJonkShampoo), value, timeoutMs);
  }

  async expectNatureSureJonkShampooChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.natureSureJonkShampoo), timeoutMs);
  }

  async expectNatureSureJonkShampooUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.natureSureJonkShampoo), timeoutMs);
  }

  async expectNatureSureJonkShampooFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.natureSureJonkShampoo), timeoutMs);
  }

  async expectNatureSureJonkShampooCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.natureSureJonkShampoo), count, timeoutMs);
  }

  async longPressHairCareHair(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.hairCareHair));
  }

  async expectHairCareHairValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.hairCareHair), value, timeoutMs);
  }

  async expectHairCareHairChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.hairCareHair), timeoutMs);
  }

  async expectHairCareHairUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.hairCareHair), timeoutMs);
  }

  async expectHairCareHairFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.hairCareHair), timeoutMs);
  }

  async expectHairCareHairCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.hairCareHair), count, timeoutMs);
  }

  async longPressTitleWatchMoreLivestreamsLinkTextSee(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee));
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), value, timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), timeoutMs);
  }

  async expectTitleWatchMoreLivestreamsLinkTextSeeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.titleWatchMoreLivestreamsLinkTextSee), count, timeoutMs);
  }

  async longPressWatchMoreLivestreams(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.watchMoreLivestreams));
  }

  async expectWatchMoreLivestreamsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.watchMoreLivestreams), value, timeoutMs);
  }

  async expectWatchMoreLivestreamsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.watchMoreLivestreams), timeoutMs);
  }

  async expectWatchMoreLivestreamsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.watchMoreLivestreams), count, timeoutMs);
  }

  async longPressBackToTop(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.backToTop));
  }

  async expectBackToTopValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.backToTop), value, timeoutMs);
  }

  async expectBackToTopChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.backToTop), timeoutMs);
  }

  async expectBackToTopCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.backToTop), count, timeoutMs);
  }

  async longPressAmazonAppDownload(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.amazonAppDownload));
  }

  async expectAmazonAppDownloadValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.amazonAppDownload), value, timeoutMs);
  }

  async expectAmazonAppDownloadEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.amazonAppDownload), timeoutMs);
  }

  async expectAmazonAppDownloadDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.amazonAppDownload), timeoutMs);
  }

  async expectAmazonAppDownloadChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.amazonAppDownload), timeoutMs);
  }

  async expectAmazonAppDownloadUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.amazonAppDownload), timeoutMs);
  }

  async expectAmazonAppDownloadFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.amazonAppDownload), timeoutMs);
  }

  async expectAmazonAppDownloadCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.amazonAppDownload), count, timeoutMs);
  }

  async longPressHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.help));
  }

  async expectHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.help), value, timeoutMs);
  }

  async expectHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.help), timeoutMs);
  }

  async expectHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.help), timeoutMs);
  }

  async expectHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.help), timeoutMs);
  }

  async expectHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.help), timeoutMs);
  }

  async expectHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.help), timeoutMs);
  }

  async expectHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.help), count, timeoutMs);
  }

  async longPressAmazonIndiaHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.amazonIndiaHome));
  }

  async expectAmazonIndiaHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.amazonIndiaHome), value, timeoutMs);
  }

  async expectAmazonIndiaHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.amazonIndiaHome), timeoutMs);
  }

  async expectAmazonIndiaHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.amazonIndiaHome), timeoutMs);
  }

  async expectAmazonIndiaHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.amazonIndiaHome), timeoutMs);
  }

  async expectAmazonIndiaHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.amazonIndiaHome), timeoutMs);
  }

  async expectAmazonIndiaHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.amazonIndiaHome), timeoutMs);
  }

  async expectAmazonIndiaHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.amazonIndiaHome), count, timeoutMs);
  }

  async longPressChooseALanguageFor2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.chooseALanguageFor2));
  }

  async expectChooseALanguageFor2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.chooseALanguageFor2), value, timeoutMs);
  }

  async expectChooseALanguageFor2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.chooseALanguageFor2), timeoutMs);
  }

  async expectChooseALanguageFor2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.chooseALanguageFor2), timeoutMs);
  }

  async expectChooseALanguageFor2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.chooseALanguageFor2), timeoutMs);
  }

  async expectChooseALanguageFor2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.chooseALanguageFor2), timeoutMs);
  }

  async expectChooseALanguageFor2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.chooseALanguageFor2), timeoutMs);
  }

  async expectChooseALanguageFor2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.chooseALanguageFor2), count, timeoutMs);
  }

  async longPressExpandToChangeLanguage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.expandToChangeLanguage2));
  }

  async expectExpandToChangeLanguage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.expandToChangeLanguage2), value, timeoutMs);
  }

  async expectExpandToChangeLanguage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.expandToChangeLanguage2), timeoutMs);
  }

  async expectExpandToChangeLanguage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.expandToChangeLanguage2), count, timeoutMs);
  }

  async longPressConditionsOfUse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.conditionsOfUse));
  }

  async expectConditionsOfUseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.conditionsOfUse), value, timeoutMs);
  }

  async expectConditionsOfUseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.conditionsOfUse), count, timeoutMs);
  }

  async longPressPrivacyNotice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.privacyNotice));
  }

  async expectPrivacyNoticeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.privacyNotice), value, timeoutMs);
  }

  async expectPrivacyNoticeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.privacyNotice), count, timeoutMs);
  }

  async longPressInterestBasedAds(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.interestBasedAds));
  }

  async expectInterestBasedAdsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.interestBasedAds), value, timeoutMs);
  }

  async expectInterestBasedAdsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.interestBasedAds), timeoutMs);
  }

  async expectInterestBasedAdsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.interestBasedAds), timeoutMs);
  }

  async expectInterestBasedAdsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.interestBasedAds), timeoutMs);
  }

  async expectInterestBasedAdsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.interestBasedAds), timeoutMs);
  }

  async expectInterestBasedAdsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.interestBasedAds), timeoutMs);
  }

  async expectInterestBasedAdsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.interestBasedAds), count, timeoutMs);
  }

  async clickAmazonComInc(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.AmazonComInc));
  }

  async doubleClickAmazonComInc(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.AmazonComInc));
  }

  async longPressAmazonComInc(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.AmazonComInc));
  }

  async expectAmazonComIncValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.AmazonComInc), value, timeoutMs);
  }

  async expectAmazonComIncEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.AmazonComInc), count, timeoutMs);
  }

}
