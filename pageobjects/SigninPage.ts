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

export class SigninPage {
  private static readonly L = {
    signInOrCreate: { strategy: 'text' as const, value: 'Sign in or create account', actionKind: 'text' as const },
    email: { strategy: 'css' as const, value: '#ap_email_login', actionKind: 'textbox' as const },
    continueAnnounce: { strategy: 'css' as const, value: '#continue-announce', actionKind: 'text' as const },
    byContinuingYouAgree: { strategy: 'text' as const, value: 'By continuing, you agree to Amazon\'s Conditions of', actionKind: 'text' as const },
    conditionsOfUse: { strategy: 'role' as const, value: 'Conditions of Use', role: 'link', actionKind: 'link' as const },
    privacyNotice: { strategy: 'role' as const, value: 'Privacy Notice', role: 'link', actionKind: 'link' as const },
    buyingForWork: { strategy: 'text' as const, value: 'Buying for work?', actionKind: 'text' as const },
    createAFreeBusiness: { strategy: 'css' as const, value: '#ab-registration-ingress-link', actionKind: 'link' as const },
    conditionsOfUse2: { strategy: 'role' as const, value: 'Conditions of Use', role: 'link', actionKind: 'link' as const },
    privacyNotice2: { strategy: 'role' as const, value: 'Privacy Notice', role: 'link', actionKind: 'link' as const },
    help: { strategy: 'role' as const, value: 'Help', role: 'link', actionKind: 'link' as const },
    AmazonComInc: { strategy: 'text' as const, value: '© 1996–2026, Amazon.com, Inc. or its affiliates', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextSignInOrCreate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SigninPage.L.signInOrCreate));
  }

  async expectSignInOrCreateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.signInOrCreate), timeoutMs);
  }

  async expectSignInOrCreateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.signInOrCreate), timeoutMs);
  }

  async expectSignInOrCreateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.signInOrCreate), expected, timeoutMs);
  }

  async expectSignInOrCreateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.signInOrCreate), substring, timeoutMs);
  }

  async scrollSignInOrCreateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.signInOrCreate));
  }

  async fillEmail(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SigninPage.L.email), value);
  }

  async clearEmail(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SigninPage.L.email));
  }

  async typeTextEmail(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SigninPage.L.email), value);
  }

  async expectEmailVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.email), timeoutMs);
  }

  async expectEmailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.email), timeoutMs);
  }

  async expectEmailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.email), timeoutMs);
  }

  async expectEmailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.email), timeoutMs);
  }

  async expectEmailValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.email), expected, timeoutMs);
  }

  async expectEmailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.email), timeoutMs);
  }

  async scrollEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.email));
  }

  async getInnerTextContinueAnnounce(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SigninPage.L.continueAnnounce));
  }

  async expectContinueAnnounceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.continueAnnounce), timeoutMs);
  }

  async expectContinueAnnounceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.continueAnnounce), timeoutMs);
  }

  async expectContinueAnnounceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.continueAnnounce), expected, timeoutMs);
  }

  async expectContinueAnnounceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.continueAnnounce), substring, timeoutMs);
  }

  async scrollContinueAnnounceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.continueAnnounce));
  }

  async getInnerTextByContinuingYouAgree(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SigninPage.L.byContinuingYouAgree));
  }

  async expectByContinuingYouAgreeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.byContinuingYouAgree), timeoutMs);
  }

  async expectByContinuingYouAgreeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.byContinuingYouAgree), timeoutMs);
  }

  async expectByContinuingYouAgreeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.byContinuingYouAgree), expected, timeoutMs);
  }

  async expectByContinuingYouAgreeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.byContinuingYouAgree), substring, timeoutMs);
  }

  async scrollByContinuingYouAgreeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.byContinuingYouAgree));
  }

  async clickConditionsOfUse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.conditionsOfUse));
  }

  async doubleClickConditionsOfUse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.conditionsOfUse));
  }

  async expectConditionsOfUseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.conditionsOfUse), expected, timeoutMs);
  }

  async expectConditionsOfUseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.conditionsOfUse), substring, timeoutMs);
  }

  async scrollConditionsOfUseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.conditionsOfUse));
  }

  async clickPrivacyNotice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.privacyNotice));
  }

  async doubleClickPrivacyNotice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.privacyNotice));
  }

  async expectPrivacyNoticeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.privacyNotice), expected, timeoutMs);
  }

  async expectPrivacyNoticeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.privacyNotice), substring, timeoutMs);
  }

  async scrollPrivacyNoticeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.privacyNotice));
  }

  async getInnerTextBuyingForWork(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SigninPage.L.buyingForWork));
  }

  async expectBuyingForWorkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.buyingForWork), timeoutMs);
  }

  async expectBuyingForWorkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.buyingForWork), timeoutMs);
  }

  async expectBuyingForWorkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.buyingForWork), expected, timeoutMs);
  }

  async expectBuyingForWorkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.buyingForWork), substring, timeoutMs);
  }

  async scrollBuyingForWorkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.buyingForWork));
  }

  async clickCreateAFreeBusiness(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.createAFreeBusiness));
  }

  async doubleClickCreateAFreeBusiness(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.createAFreeBusiness));
  }

  async expectCreateAFreeBusinessVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.createAFreeBusiness), timeoutMs);
  }

  async expectCreateAFreeBusinessHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.createAFreeBusiness), timeoutMs);
  }

  async expectCreateAFreeBusinessText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.createAFreeBusiness), expected, timeoutMs);
  }

  async expectCreateAFreeBusinessContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.createAFreeBusiness), substring, timeoutMs);
  }

  async scrollCreateAFreeBusinessIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.createAFreeBusiness));
  }

  async clickConditionsOfUse2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.conditionsOfUse2));
  }

  async doubleClickConditionsOfUse2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.conditionsOfUse2));
  }

  async expectConditionsOfUse2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.conditionsOfUse2), timeoutMs);
  }

  async expectConditionsOfUse2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.conditionsOfUse2), timeoutMs);
  }

  async expectConditionsOfUse2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.conditionsOfUse2), expected, timeoutMs);
  }

  async expectConditionsOfUse2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.conditionsOfUse2), substring, timeoutMs);
  }

  async scrollConditionsOfUse2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.conditionsOfUse2));
  }

  async clickPrivacyNotice2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.privacyNotice2));
  }

  async doubleClickPrivacyNotice2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.privacyNotice2));
  }

  async expectPrivacyNotice2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.privacyNotice2), timeoutMs);
  }

  async expectPrivacyNotice2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.privacyNotice2), timeoutMs);
  }

  async expectPrivacyNotice2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.privacyNotice2), expected, timeoutMs);
  }

  async expectPrivacyNotice2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.privacyNotice2), substring, timeoutMs);
  }

  async scrollPrivacyNotice2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.privacyNotice2));
  }

  async clickHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.help));
  }

  async doubleClickHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.help));
  }

  async expectHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.help), timeoutMs);
  }

  async expectHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.help), timeoutMs);
  }

  async expectHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.help), expected, timeoutMs);
  }

  async expectHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.help), substring, timeoutMs);
  }

  async scrollHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.help));
  }

  async getInnerTextAmazonComInc(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SigninPage.L.AmazonComInc));
  }

  async expectAmazonComIncVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SigninPage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SigninPage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.AmazonComInc), expected, timeoutMs);
  }

  async expectAmazonComIncContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.AmazonComInc), substring, timeoutMs);
  }

  async scrollAmazonComIncIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SigninPage.L.AmazonComInc));
  }


  async clickSignInOrCreate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.signInOrCreate));
  }

  async doubleClickSignInOrCreate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.signInOrCreate));
  }

  async longPressSignInOrCreate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.signInOrCreate));
  }

  async expectSignInOrCreateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.signInOrCreate), value, timeoutMs);
  }

  async expectSignInOrCreateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.signInOrCreate), timeoutMs);
  }

  async expectSignInOrCreateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.signInOrCreate), timeoutMs);
  }

  async expectSignInOrCreateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.signInOrCreate), timeoutMs);
  }

  async expectSignInOrCreateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.signInOrCreate), timeoutMs);
  }

  async expectSignInOrCreateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.signInOrCreate), timeoutMs);
  }

  async expectSignInOrCreateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.signInOrCreate), count, timeoutMs);
  }

  async expectEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SigninPage.L.email), expected, timeoutMs);
  }

  async expectEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SigninPage.L.email), substring, timeoutMs);
  }

  async expectEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.email), timeoutMs);
  }

  async expectEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.email), timeoutMs);
  }

  async expectEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.email), count, timeoutMs);
  }

  async clickContinueAnnounce(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.continueAnnounce));
  }

  async doubleClickContinueAnnounce(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.continueAnnounce));
  }

  async longPressContinueAnnounce(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.continueAnnounce));
  }

  async expectContinueAnnounceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.continueAnnounce), value, timeoutMs);
  }

  async expectContinueAnnounceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.continueAnnounce), timeoutMs);
  }

  async expectContinueAnnounceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.continueAnnounce), timeoutMs);
  }

  async expectContinueAnnounceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.continueAnnounce), timeoutMs);
  }

  async expectContinueAnnounceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.continueAnnounce), timeoutMs);
  }

  async expectContinueAnnounceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.continueAnnounce), timeoutMs);
  }

  async expectContinueAnnounceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.continueAnnounce), count, timeoutMs);
  }

  async clickByContinuingYouAgree(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.byContinuingYouAgree));
  }

  async doubleClickByContinuingYouAgree(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.byContinuingYouAgree));
  }

  async longPressByContinuingYouAgree(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.byContinuingYouAgree));
  }

  async expectByContinuingYouAgreeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.byContinuingYouAgree), value, timeoutMs);
  }

  async expectByContinuingYouAgreeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.byContinuingYouAgree), timeoutMs);
  }

  async expectByContinuingYouAgreeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.byContinuingYouAgree), timeoutMs);
  }

  async expectByContinuingYouAgreeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.byContinuingYouAgree), timeoutMs);
  }

  async expectByContinuingYouAgreeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.byContinuingYouAgree), timeoutMs);
  }

  async expectByContinuingYouAgreeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.byContinuingYouAgree), timeoutMs);
  }

  async expectByContinuingYouAgreeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.byContinuingYouAgree), count, timeoutMs);
  }

  async longPressConditionsOfUse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.conditionsOfUse));
  }

  async expectConditionsOfUseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.conditionsOfUse), value, timeoutMs);
  }

  async expectConditionsOfUseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.conditionsOfUse), timeoutMs);
  }

  async expectConditionsOfUseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.conditionsOfUse), count, timeoutMs);
  }

  async longPressPrivacyNotice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.privacyNotice));
  }

  async expectPrivacyNoticeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.privacyNotice), value, timeoutMs);
  }

  async expectPrivacyNoticeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.privacyNotice), timeoutMs);
  }

  async expectPrivacyNoticeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.privacyNotice), count, timeoutMs);
  }

  async clickBuyingForWork(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.buyingForWork));
  }

  async doubleClickBuyingForWork(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.buyingForWork));
  }

  async longPressBuyingForWork(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.buyingForWork));
  }

  async expectBuyingForWorkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.buyingForWork), value, timeoutMs);
  }

  async expectBuyingForWorkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.buyingForWork), timeoutMs);
  }

  async expectBuyingForWorkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.buyingForWork), timeoutMs);
  }

  async expectBuyingForWorkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.buyingForWork), timeoutMs);
  }

  async expectBuyingForWorkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.buyingForWork), timeoutMs);
  }

  async expectBuyingForWorkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.buyingForWork), timeoutMs);
  }

  async expectBuyingForWorkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.buyingForWork), count, timeoutMs);
  }

  async longPressCreateAFreeBusiness(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.createAFreeBusiness));
  }

  async expectCreateAFreeBusinessValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.createAFreeBusiness), value, timeoutMs);
  }

  async expectCreateAFreeBusinessEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.createAFreeBusiness), timeoutMs);
  }

  async expectCreateAFreeBusinessDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.createAFreeBusiness), timeoutMs);
  }

  async expectCreateAFreeBusinessChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.createAFreeBusiness), timeoutMs);
  }

  async expectCreateAFreeBusinessUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.createAFreeBusiness), timeoutMs);
  }

  async expectCreateAFreeBusinessFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.createAFreeBusiness), timeoutMs);
  }

  async expectCreateAFreeBusinessCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.createAFreeBusiness), count, timeoutMs);
  }

  async longPressConditionsOfUse2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.conditionsOfUse2));
  }

  async expectConditionsOfUse2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.conditionsOfUse2), value, timeoutMs);
  }

  async expectConditionsOfUse2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.conditionsOfUse2), timeoutMs);
  }

  async expectConditionsOfUse2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.conditionsOfUse2), timeoutMs);
  }

  async expectConditionsOfUse2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.conditionsOfUse2), timeoutMs);
  }

  async expectConditionsOfUse2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.conditionsOfUse2), timeoutMs);
  }

  async expectConditionsOfUse2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.conditionsOfUse2), timeoutMs);
  }

  async expectConditionsOfUse2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.conditionsOfUse2), count, timeoutMs);
  }

  async longPressPrivacyNotice2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.privacyNotice2));
  }

  async expectPrivacyNotice2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.privacyNotice2), value, timeoutMs);
  }

  async expectPrivacyNotice2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.privacyNotice2), timeoutMs);
  }

  async expectPrivacyNotice2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.privacyNotice2), timeoutMs);
  }

  async expectPrivacyNotice2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.privacyNotice2), timeoutMs);
  }

  async expectPrivacyNotice2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.privacyNotice2), timeoutMs);
  }

  async expectPrivacyNotice2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.privacyNotice2), timeoutMs);
  }

  async expectPrivacyNotice2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.privacyNotice2), count, timeoutMs);
  }

  async longPressHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.help));
  }

  async expectHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.help), value, timeoutMs);
  }

  async expectHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.help), timeoutMs);
  }

  async expectHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.help), timeoutMs);
  }

  async expectHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.help), timeoutMs);
  }

  async expectHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.help), timeoutMs);
  }

  async expectHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.help), timeoutMs);
  }

  async expectHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.help), count, timeoutMs);
  }

  async clickAmazonComInc(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SigninPage.L.AmazonComInc));
  }

  async doubleClickAmazonComInc(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SigninPage.L.AmazonComInc));
  }

  async longPressAmazonComInc(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SigninPage.L.AmazonComInc));
  }

  async expectAmazonComIncValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SigninPage.L.AmazonComInc), value, timeoutMs);
  }

  async expectAmazonComIncEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SigninPage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SigninPage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SigninPage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SigninPage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SigninPage.L.AmazonComInc), timeoutMs);
  }

  async expectAmazonComIncCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SigninPage.L.AmazonComInc), count, timeoutMs);
  }

}
