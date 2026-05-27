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

export class LoginPage {
  private static readonly L = {
    automationAIAIPoweredNoCodeTest: { strategy: 'role' as const, value: 'AutomationAI AI-Powered No-Code Test Automation', role: 'link', actionKind: 'link' as const },
    aIPoweredNoCodeTestAutomation: { strategy: 'text' as const, value: 'AI-Powered No-Code Test Automation', actionKind: 'text' as const },
    welcomeBack: { strategy: 'text' as const, value: 'Welcome back', actionKind: 'text' as const },
    signInToManage: { strategy: 'text' as const, value: 'Sign in to manage requirements, environments, and', actionKind: 'text' as const },
    requirementsTestPlans: { strategy: 'text' as const, value: 'Requirements → test plans → Playwright test code', actionKind: 'text' as const },
    browserRecorderAndPageObject: { strategy: 'text' as const, value: 'Browser recorder and page-object library', actionKind: 'text' as const },
    perOrganizationProjectsAndAccess: { strategy: 'text' as const, value: 'Per-organization projects and access control', actionKind: 'text' as const },
    backToHome: { strategy: 'role' as const, value: 'Back to home', role: 'link', actionKind: 'link' as const },
    account: { strategy: 'text' as const, value: 'Account', actionKind: 'text' as const },
    useYourWorkEmail: { strategy: 'text' as const, value: 'Use your work email and password.', actionKind: 'text' as const },
    loginEmail: { strategy: 'testId' as const, value: 'login-email-input', actionKind: 'textbox' as const },
    loginPassword: { strategy: 'testId' as const, value: 'login-password-input', actionKind: 'textbox' as const },
    signIn: { strategy: 'testId' as const, value: 'login-submit-btn', actionKind: 'button' as const },
    registrationIsByInvitation: { strategy: 'text' as const, value: 'Registration is by invitation only. Contact your', actionKind: 'text' as const },
    openNextJsDevTools: { strategy: 'css' as const, value: '#next-logo', shadowHost: 'nextjs-portal', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickAutomationAIAIPoweredNoCodeTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest));
  }

  async doubleClickAutomationAIAIPoweredNoCodeTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest));
  }

  async expectAutomationAIAIPoweredNoCodeTestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), timeoutMs);
  }

  async expectAutomationAIAIPoweredNoCodeTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), timeoutMs);
  }

  async expectAutomationAIAIPoweredNoCodeTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), expected, timeoutMs);
  }

  async expectAutomationAIAIPoweredNoCodeTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), substring, timeoutMs);
  }

  async scrollAutomationAIAIPoweredNoCodeTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest));
  }

  async getInnerTextAIPoweredNoCodeTestAutomation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation));
  }

  async expectAIPoweredNoCodeTestAutomationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), timeoutMs);
  }

  async expectAIPoweredNoCodeTestAutomationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), timeoutMs);
  }

  async expectAIPoweredNoCodeTestAutomationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), expected, timeoutMs);
  }

  async expectAIPoweredNoCodeTestAutomationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), substring, timeoutMs);
  }

  async scrollAIPoweredNoCodeTestAutomationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation));
  }

  async getInnerTextWelcomeBack(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.welcomeBack));
  }

  async expectWelcomeBackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.welcomeBack), expected, timeoutMs);
  }

  async expectWelcomeBackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.welcomeBack), substring, timeoutMs);
  }

  async scrollWelcomeBackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.welcomeBack));
  }

  async getInnerTextSignInToManage(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.signInToManage));
  }

  async expectSignInToManageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.signInToManage), timeoutMs);
  }

  async expectSignInToManageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.signInToManage), timeoutMs);
  }

  async expectSignInToManageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.signInToManage), expected, timeoutMs);
  }

  async expectSignInToManageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.signInToManage), substring, timeoutMs);
  }

  async scrollSignInToManageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.signInToManage));
  }

  async getInnerTextRequirementsTestPlans(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.requirementsTestPlans));
  }

  async expectRequirementsTestPlansVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.requirementsTestPlans), timeoutMs);
  }

  async expectRequirementsTestPlansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.requirementsTestPlans), timeoutMs);
  }

  async expectRequirementsTestPlansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.requirementsTestPlans), expected, timeoutMs);
  }

  async expectRequirementsTestPlansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.requirementsTestPlans), substring, timeoutMs);
  }

  async scrollRequirementsTestPlansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.requirementsTestPlans));
  }

  async getInnerTextBrowserRecorderAndPageObject(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject));
  }

  async expectBrowserRecorderAndPageObjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), timeoutMs);
  }

  async expectBrowserRecorderAndPageObjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), timeoutMs);
  }

  async expectBrowserRecorderAndPageObjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), expected, timeoutMs);
  }

  async expectBrowserRecorderAndPageObjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), substring, timeoutMs);
  }

  async scrollBrowserRecorderAndPageObjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject));
  }

  async getInnerTextPerOrganizationProjectsAndAccess(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess));
  }

  async expectPerOrganizationProjectsAndAccessVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), timeoutMs);
  }

  async expectPerOrganizationProjectsAndAccessHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), timeoutMs);
  }

  async expectPerOrganizationProjectsAndAccessText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), expected, timeoutMs);
  }

  async expectPerOrganizationProjectsAndAccessContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), substring, timeoutMs);
  }

  async scrollPerOrganizationProjectsAndAccessIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess));
  }

  async clickBackToHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.backToHome));
  }

  async doubleClickBackToHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.backToHome));
  }

  async expectBackToHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.backToHome), expected, timeoutMs);
  }

  async expectBackToHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.backToHome), substring, timeoutMs);
  }

  async scrollBackToHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.backToHome));
  }

  async getInnerTextAccount(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.account));
  }

  async expectAccountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.account), expected, timeoutMs);
  }

  async expectAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.account), substring, timeoutMs);
  }

  async scrollAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.account));
  }

  async getInnerTextUseYourWorkEmail(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.useYourWorkEmail));
  }

  async expectUseYourWorkEmailVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.useYourWorkEmail), timeoutMs);
  }

  async expectUseYourWorkEmailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.useYourWorkEmail), timeoutMs);
  }

  async expectUseYourWorkEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.useYourWorkEmail), expected, timeoutMs);
  }

  async expectUseYourWorkEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.useYourWorkEmail), substring, timeoutMs);
  }

  async scrollUseYourWorkEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.useYourWorkEmail));
  }

  async fillLoginEmail(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.loginEmail), value);
  }

  async clearLoginEmail(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.loginEmail));
  }

  async typeTextLoginEmail(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.loginEmail), value);
  }

  async expectLoginEmailVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginEmail), expected, timeoutMs);
  }

  async expectLoginEmailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async scrollLoginEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginEmail));
  }

  async fillLoginPassword(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.loginPassword), value);
  }

  async clearLoginPassword(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async typeTextLoginPassword(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.loginPassword), value);
  }

  async expectLoginPasswordVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginPassword), expected, timeoutMs);
  }

  async expectLoginPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async scrollLoginPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async clickSignIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async doubleClickSignIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async expectSignInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.signIn), expected, timeoutMs);
  }

  async expectSignInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.signIn), substring, timeoutMs);
  }

  async scrollSignInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async getInnerTextRegistrationIsByInvitation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.registrationIsByInvitation));
  }

  async expectRegistrationIsByInvitationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.registrationIsByInvitation), timeoutMs);
  }

  async expectRegistrationIsByInvitationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.registrationIsByInvitation), timeoutMs);
  }

  async expectRegistrationIsByInvitationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.registrationIsByInvitation), expected, timeoutMs);
  }

  async expectRegistrationIsByInvitationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.registrationIsByInvitation), substring, timeoutMs);
  }

  async scrollRegistrationIsByInvitationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.registrationIsByInvitation));
  }

  async clickOpenNextJsDevTools(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.openNextJsDevTools));
  }

  async doubleClickOpenNextJsDevTools(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.openNextJsDevTools), expected, timeoutMs);
  }

  async expectOpenNextJsDevToolsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.openNextJsDevTools), substring, timeoutMs);
  }

  async scrollOpenNextJsDevToolsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.openNextJsDevTools));
  }


  async longPressAutomationAIAIPoweredNoCodeTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest));
  }

  async expectAutomationAIAIPoweredNoCodeTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), value, timeoutMs);
  }

  async expectAutomationAIAIPoweredNoCodeTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), timeoutMs);
  }

  async expectAutomationAIAIPoweredNoCodeTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), timeoutMs);
  }

  async expectAutomationAIAIPoweredNoCodeTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), timeoutMs);
  }

  async expectAutomationAIAIPoweredNoCodeTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), timeoutMs);
  }

  async expectAutomationAIAIPoweredNoCodeTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), timeoutMs);
  }

  async expectAutomationAIAIPoweredNoCodeTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.automationAIAIPoweredNoCodeTest), count, timeoutMs);
  }

  async clickAIPoweredNoCodeTestAutomation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation));
  }

  async doubleClickAIPoweredNoCodeTestAutomation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation));
  }

  async longPressAIPoweredNoCodeTestAutomation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation));
  }

  async expectAIPoweredNoCodeTestAutomationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), value, timeoutMs);
  }

  async expectAIPoweredNoCodeTestAutomationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), timeoutMs);
  }

  async expectAIPoweredNoCodeTestAutomationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), timeoutMs);
  }

  async expectAIPoweredNoCodeTestAutomationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), timeoutMs);
  }

  async expectAIPoweredNoCodeTestAutomationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), timeoutMs);
  }

  async expectAIPoweredNoCodeTestAutomationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), timeoutMs);
  }

  async expectAIPoweredNoCodeTestAutomationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.aIPoweredNoCodeTestAutomation), count, timeoutMs);
  }

  async clickWelcomeBack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.welcomeBack));
  }

  async doubleClickWelcomeBack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.welcomeBack));
  }

  async longPressWelcomeBack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.welcomeBack));
  }

  async expectWelcomeBackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.welcomeBack), value, timeoutMs);
  }

  async expectWelcomeBackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.welcomeBack), count, timeoutMs);
  }

  async clickSignInToManage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.signInToManage));
  }

  async doubleClickSignInToManage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.signInToManage));
  }

  async longPressSignInToManage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.signInToManage));
  }

  async expectSignInToManageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.signInToManage), value, timeoutMs);
  }

  async expectSignInToManageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.signInToManage), timeoutMs);
  }

  async expectSignInToManageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.signInToManage), timeoutMs);
  }

  async expectSignInToManageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.signInToManage), timeoutMs);
  }

  async expectSignInToManageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.signInToManage), timeoutMs);
  }

  async expectSignInToManageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.signInToManage), timeoutMs);
  }

  async expectSignInToManageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.signInToManage), count, timeoutMs);
  }

  async clickRequirementsTestPlans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.requirementsTestPlans));
  }

  async doubleClickRequirementsTestPlans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.requirementsTestPlans));
  }

  async longPressRequirementsTestPlans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.requirementsTestPlans));
  }

  async expectRequirementsTestPlansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.requirementsTestPlans), value, timeoutMs);
  }

  async expectRequirementsTestPlansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.requirementsTestPlans), timeoutMs);
  }

  async expectRequirementsTestPlansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.requirementsTestPlans), timeoutMs);
  }

  async expectRequirementsTestPlansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.requirementsTestPlans), timeoutMs);
  }

  async expectRequirementsTestPlansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.requirementsTestPlans), timeoutMs);
  }

  async expectRequirementsTestPlansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.requirementsTestPlans), timeoutMs);
  }

  async expectRequirementsTestPlansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.requirementsTestPlans), count, timeoutMs);
  }

  async clickBrowserRecorderAndPageObject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject));
  }

  async doubleClickBrowserRecorderAndPageObject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject));
  }

  async longPressBrowserRecorderAndPageObject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject));
  }

  async expectBrowserRecorderAndPageObjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), value, timeoutMs);
  }

  async expectBrowserRecorderAndPageObjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), timeoutMs);
  }

  async expectBrowserRecorderAndPageObjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), timeoutMs);
  }

  async expectBrowserRecorderAndPageObjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), timeoutMs);
  }

  async expectBrowserRecorderAndPageObjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), timeoutMs);
  }

  async expectBrowserRecorderAndPageObjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), timeoutMs);
  }

  async expectBrowserRecorderAndPageObjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.browserRecorderAndPageObject), count, timeoutMs);
  }

  async clickPerOrganizationProjectsAndAccess(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess));
  }

  async doubleClickPerOrganizationProjectsAndAccess(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess));
  }

  async longPressPerOrganizationProjectsAndAccess(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess));
  }

  async expectPerOrganizationProjectsAndAccessValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), value, timeoutMs);
  }

  async expectPerOrganizationProjectsAndAccessEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), timeoutMs);
  }

  async expectPerOrganizationProjectsAndAccessDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), timeoutMs);
  }

  async expectPerOrganizationProjectsAndAccessChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), timeoutMs);
  }

  async expectPerOrganizationProjectsAndAccessUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), timeoutMs);
  }

  async expectPerOrganizationProjectsAndAccessFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), timeoutMs);
  }

  async expectPerOrganizationProjectsAndAccessCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.perOrganizationProjectsAndAccess), count, timeoutMs);
  }

  async longPressBackToHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.backToHome));
  }

  async expectBackToHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.backToHome), value, timeoutMs);
  }

  async expectBackToHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.backToHome), count, timeoutMs);
  }

  async clickAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.account));
  }

  async doubleClickAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.account));
  }

  async longPressAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.account));
  }

  async expectAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.account), value, timeoutMs);
  }

  async expectAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.account), count, timeoutMs);
  }

  async clickUseYourWorkEmail(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.useYourWorkEmail));
  }

  async doubleClickUseYourWorkEmail(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.useYourWorkEmail));
  }

  async longPressUseYourWorkEmail(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.useYourWorkEmail));
  }

  async expectUseYourWorkEmailValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.useYourWorkEmail), value, timeoutMs);
  }

  async expectUseYourWorkEmailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.useYourWorkEmail), timeoutMs);
  }

  async expectUseYourWorkEmailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.useYourWorkEmail), timeoutMs);
  }

  async expectUseYourWorkEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.useYourWorkEmail), timeoutMs);
  }

  async expectUseYourWorkEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.useYourWorkEmail), timeoutMs);
  }

  async expectUseYourWorkEmailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.useYourWorkEmail), timeoutMs);
  }

  async expectUseYourWorkEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.useYourWorkEmail), count, timeoutMs);
  }

  async expectLoginEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginEmail), expected, timeoutMs);
  }

  async expectLoginEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginEmail), substring, timeoutMs);
  }

  async expectLoginEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginEmail), count, timeoutMs);
  }

  async expectLoginPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginPassword), expected, timeoutMs);
  }

  async expectLoginPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginPassword), substring, timeoutMs);
  }

  async expectLoginPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginPassword), count, timeoutMs);
  }

  async longPressSignIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async expectSignInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.signIn), value, timeoutMs);
  }

  async expectSignInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.signIn), count, timeoutMs);
  }

  async clickRegistrationIsByInvitation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.registrationIsByInvitation));
  }

  async doubleClickRegistrationIsByInvitation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.registrationIsByInvitation));
  }

  async longPressRegistrationIsByInvitation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.registrationIsByInvitation));
  }

  async expectRegistrationIsByInvitationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.registrationIsByInvitation), value, timeoutMs);
  }

  async expectRegistrationIsByInvitationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.registrationIsByInvitation), timeoutMs);
  }

  async expectRegistrationIsByInvitationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.registrationIsByInvitation), timeoutMs);
  }

  async expectRegistrationIsByInvitationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.registrationIsByInvitation), timeoutMs);
  }

  async expectRegistrationIsByInvitationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.registrationIsByInvitation), timeoutMs);
  }

  async expectRegistrationIsByInvitationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.registrationIsByInvitation), timeoutMs);
  }

  async expectRegistrationIsByInvitationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.registrationIsByInvitation), count, timeoutMs);
  }

  async longPressOpenNextJsDevTools(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.openNextJsDevTools), value, timeoutMs);
  }

  async expectOpenNextJsDevToolsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.openNextJsDevTools), count, timeoutMs);
  }

}
