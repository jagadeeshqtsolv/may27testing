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

export class DashboardPage {
  private static readonly L = {
    aUTOMATIONAI: { strategy: 'text' as const, value: 'AUTOMATIONAI', actionKind: 'text' as const },
    dashboard: { strategy: 'text' as const, value: 'Dashboard', actionKind: 'text' as const },
    workspaceAnalyticsAcrossProjects: { strategy: 'text' as const, value: 'Workspace analytics across projects, requirements,', actionKind: 'text' as const },
    workspace: { strategy: 'text' as const, value: 'Workspace', actionKind: 'text' as const },
    quarks: { strategy: 'text' as const, value: 'Quarks', actionKind: 'text' as const },
    jagadeeshQtsolvCom: { strategy: 'text' as const, value: 'jagadeesh@qtsolv.com', actionKind: 'text' as const },
    admin: { strategy: 'testId' as const, value: 'nav-admin-link', actionKind: 'link' as const },
    home: { strategy: 'testId' as const, value: 'nav-home-link', actionKind: 'link' as const },
    signOut: { strategy: 'testId' as const, value: 'nav-signout-btn', actionKind: 'button' as const },
    oRGANIZATIONOVERVIEW: { strategy: 'text' as const, value: 'ORGANIZATION OVERVIEW', actionKind: 'text' as const },
    totalsAcrossProjectsYou: { strategy: 'text' as const, value: 'Totals across projects you can access in this', actionKind: 'text' as const },
    pROJECTS: { strategy: 'text' as const, value: 'PROJECTS', actionKind: 'text' as const },
    rEQUIREMENTS: { strategy: 'text' as const, value: 'REQUIREMENTS', actionKind: 'text' as const },
    capturedIntent: { strategy: 'text' as const, value: 'Captured intent', actionKind: 'text' as const },
    eNVIRONMENTS: { strategy: 'text' as const, value: 'ENVIRONMENTS', actionKind: 'text' as const },
    targetsConfig: { strategy: 'text' as const, value: 'Targets & config', actionKind: 'text' as const },
    pAGEOBJECTS: { strategy: 'text' as const, value: 'PAGE OBJECTS', actionKind: 'text' as const },
    screensOnDisk: { strategy: 'text' as const, value: 'Screens on disk + DB', actionKind: 'text' as const },
    tESTPLANS: { strategy: 'text' as const, value: 'TEST PLANS', actionKind: 'text' as const },
    lLMPlans: { strategy: 'text' as const, value: 'LLM plans', actionKind: 'text' as const },
    tESTCASES: { strategy: 'text' as const, value: 'TEST CASES', actionKind: 'text' as const },
    acrossAllPlans: { strategy: 'text' as const, value: 'Across all plans', actionKind: 'text' as const },
    gENERATEDCODE: { strategy: 'text' as const, value: 'GENERATED CODE', actionKind: 'text' as const },
    compiledOutputs: { strategy: 'text' as const, value: 'Compiled outputs', actionKind: 'text' as const },
    pROJECTS2: { strategy: 'text' as const, value: 'PROJECTS', actionKind: 'text' as const },
    eachProjectHasIts: { strategy: 'text' as const, value: 'Each project has its own requirements,', actionKind: 'text' as const },
    demo5262026105846PM: { strategy: 'text' as const, value: 'Demo 5/26/2026, 10:58:46 PM Req 1 Env 1 POM 4', actionKind: 'text' as const },
    demo: { strategy: 'text' as const, value: 'Demo', actionKind: 'text' as const },
    PM: { strategy: 'text' as const, value: '5/26/2026, 10:58:46 PM', actionKind: 'text' as const },
    req: { strategy: 'text' as const, value: 'Req', actionKind: 'text' as const },
    env: { strategy: 'text' as const, value: 'Env', actionKind: 'text' as const },
    pOM: { strategy: 'text' as const, value: 'POM', actionKind: 'text' as const },
    plans: { strategy: 'text' as const, value: 'Plans', actionKind: 'text' as const },
    cases: { strategy: 'text' as const, value: 'Cases', actionKind: 'text' as const },
    code: { strategy: 'text' as const, value: 'Code', actionKind: 'text' as const },
    open: { strategy: 'testId' as const, value: 'project-open-link-d2c04710-213b-4ab5-8ff7-cb81c345b707', actionKind: 'link' as const },
    delete: { strategy: 'testId' as const, value: 'project-delete-btn-d2c04710-213b-4ab5-8ff7-cb81c345b707', actionKind: 'button' as const },
    newProject: { strategy: 'text' as const, value: 'New project', actionKind: 'text' as const },
    setUpAWorkspace: { strategy: 'text' as const, value: 'Set up a workspace for your application\'s test', actionKind: 'text' as const },
    platform: { strategy: 'text' as const, value: 'Platform', actionKind: 'text' as const },
    platformType: { strategy: 'testId' as const, value: 'create-project-platform-web-radio', actionKind: 'generic' as const },
    comingSoon: { strategy: 'text' as const, value: 'Coming soon', actionKind: 'text' as const },
    webAutomationRunsIn: { strategy: 'text' as const, value: 'Web automation runs in the browser using', actionKind: 'text' as const },
    createProjectName: { strategy: 'testId' as const, value: 'create-project-name-input', actionKind: 'textbox' as const },
    createProject: { strategy: 'testId' as const, value: 'create-project-submit-btn', actionKind: 'button' as const },
    openNextJsDevTools: { strategy: 'css' as const, value: '#next-logo', shadowHost: 'nextjs-portal', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAUTOMATIONAI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.aUTOMATIONAI));
  }

  async expectAUTOMATIONAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), timeoutMs);
  }

  async expectAUTOMATIONAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), timeoutMs);
  }

  async expectAUTOMATIONAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), expected, timeoutMs);
  }

  async expectAUTOMATIONAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), substring, timeoutMs);
  }

  async scrollAUTOMATIONAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.aUTOMATIONAI));
  }

  async getInnerTextDashboard(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async expectDashboardVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.dashboard), expected, timeoutMs);
  }

  async expectDashboardContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.dashboard), substring, timeoutMs);
  }

  async scrollDashboardIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async getInnerTextWorkspaceAnalyticsAcrossProjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects));
  }

  async expectWorkspaceAnalyticsAcrossProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), timeoutMs);
  }

  async expectWorkspaceAnalyticsAcrossProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), timeoutMs);
  }

  async expectWorkspaceAnalyticsAcrossProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), expected, timeoutMs);
  }

  async expectWorkspaceAnalyticsAcrossProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), substring, timeoutMs);
  }

  async scrollWorkspaceAnalyticsAcrossProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects));
  }

  async getInnerTextWorkspace(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.workspace));
  }

  async expectWorkspaceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.workspace), timeoutMs);
  }

  async expectWorkspaceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.workspace), timeoutMs);
  }

  async expectWorkspaceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.workspace), expected, timeoutMs);
  }

  async expectWorkspaceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.workspace), substring, timeoutMs);
  }

  async scrollWorkspaceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.workspace));
  }

  async getInnerTextQuarks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.quarks));
  }

  async expectQuarksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.quarks), timeoutMs);
  }

  async expectQuarksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.quarks), timeoutMs);
  }

  async expectQuarksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.quarks), expected, timeoutMs);
  }

  async expectQuarksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.quarks), substring, timeoutMs);
  }

  async scrollQuarksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.quarks));
  }

  async getInnerTextJagadeeshQtsolvCom(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom));
  }

  async expectJagadeeshQtsolvComVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), timeoutMs);
  }

  async expectJagadeeshQtsolvComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), timeoutMs);
  }

  async expectJagadeeshQtsolvComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), expected, timeoutMs);
  }

  async expectJagadeeshQtsolvComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), substring, timeoutMs);
  }

  async scrollJagadeeshQtsolvComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom));
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.admin));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.admin), timeoutMs);
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.admin), substring, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.admin));
  }

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.home));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.home), substring, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.home));
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.signOut), timeoutMs);
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.signOut), timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.signOut), substring, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.signOut));
  }

  async getInnerTextORGANIZATIONOVERVIEW(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW));
  }

  async expectORGANIZATIONOVERVIEWVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), timeoutMs);
  }

  async expectORGANIZATIONOVERVIEWHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), timeoutMs);
  }

  async expectORGANIZATIONOVERVIEWText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), expected, timeoutMs);
  }

  async expectORGANIZATIONOVERVIEWContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), substring, timeoutMs);
  }

  async scrollORGANIZATIONOVERVIEWIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW));
  }

  async getInnerTextTotalsAcrossProjectsYou(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou));
  }

  async expectTotalsAcrossProjectsYouVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), timeoutMs);
  }

  async expectTotalsAcrossProjectsYouHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), timeoutMs);
  }

  async expectTotalsAcrossProjectsYouText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), expected, timeoutMs);
  }

  async expectTotalsAcrossProjectsYouContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), substring, timeoutMs);
  }

  async scrollTotalsAcrossProjectsYouIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou));
  }

  async getInnerTextPROJECTS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.pROJECTS));
  }

  async expectPROJECTSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.pROJECTS), timeoutMs);
  }

  async expectPROJECTSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.pROJECTS), timeoutMs);
  }

  async expectPROJECTSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.pROJECTS), expected, timeoutMs);
  }

  async expectPROJECTSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.pROJECTS), substring, timeoutMs);
  }

  async scrollPROJECTSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.pROJECTS));
  }

  async getInnerTextREQUIREMENTS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.rEQUIREMENTS));
  }

  async expectREQUIREMENTSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), timeoutMs);
  }

  async expectREQUIREMENTSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), timeoutMs);
  }

  async expectREQUIREMENTSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), expected, timeoutMs);
  }

  async expectREQUIREMENTSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), substring, timeoutMs);
  }

  async scrollREQUIREMENTSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.rEQUIREMENTS));
  }

  async getInnerTextCapturedIntent(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.capturedIntent));
  }

  async expectCapturedIntentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.capturedIntent), timeoutMs);
  }

  async expectCapturedIntentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.capturedIntent), timeoutMs);
  }

  async expectCapturedIntentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.capturedIntent), expected, timeoutMs);
  }

  async expectCapturedIntentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.capturedIntent), substring, timeoutMs);
  }

  async scrollCapturedIntentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.capturedIntent));
  }

  async getInnerTextENVIRONMENTS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.eNVIRONMENTS));
  }

  async expectENVIRONMENTSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), timeoutMs);
  }

  async expectENVIRONMENTSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), timeoutMs);
  }

  async expectENVIRONMENTSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), expected, timeoutMs);
  }

  async expectENVIRONMENTSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), substring, timeoutMs);
  }

  async scrollENVIRONMENTSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.eNVIRONMENTS));
  }

  async getInnerTextTargetsConfig(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.targetsConfig));
  }

  async expectTargetsConfigVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.targetsConfig), timeoutMs);
  }

  async expectTargetsConfigHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.targetsConfig), timeoutMs);
  }

  async expectTargetsConfigText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.targetsConfig), expected, timeoutMs);
  }

  async expectTargetsConfigContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.targetsConfig), substring, timeoutMs);
  }

  async scrollTargetsConfigIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.targetsConfig));
  }

  async getInnerTextPAGEOBJECTS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.pAGEOBJECTS));
  }

  async expectPAGEOBJECTSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), timeoutMs);
  }

  async expectPAGEOBJECTSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), timeoutMs);
  }

  async expectPAGEOBJECTSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), expected, timeoutMs);
  }

  async expectPAGEOBJECTSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), substring, timeoutMs);
  }

  async scrollPAGEOBJECTSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.pAGEOBJECTS));
  }

  async getInnerTextScreensOnDisk(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.screensOnDisk));
  }

  async expectScreensOnDiskVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.screensOnDisk), timeoutMs);
  }

  async expectScreensOnDiskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.screensOnDisk), timeoutMs);
  }

  async expectScreensOnDiskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.screensOnDisk), expected, timeoutMs);
  }

  async expectScreensOnDiskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.screensOnDisk), substring, timeoutMs);
  }

  async scrollScreensOnDiskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.screensOnDisk));
  }

  async getInnerTextTESTPLANS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.tESTPLANS));
  }

  async expectTESTPLANSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.tESTPLANS), timeoutMs);
  }

  async expectTESTPLANSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.tESTPLANS), timeoutMs);
  }

  async expectTESTPLANSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.tESTPLANS), expected, timeoutMs);
  }

  async expectTESTPLANSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.tESTPLANS), substring, timeoutMs);
  }

  async scrollTESTPLANSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.tESTPLANS));
  }

  async getInnerTextLLMPlans(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.lLMPlans));
  }

  async expectLLMPlansVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.lLMPlans), timeoutMs);
  }

  async expectLLMPlansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.lLMPlans), timeoutMs);
  }

  async expectLLMPlansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.lLMPlans), expected, timeoutMs);
  }

  async expectLLMPlansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.lLMPlans), substring, timeoutMs);
  }

  async scrollLLMPlansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.lLMPlans));
  }

  async getInnerTextTESTCASES(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.tESTCASES));
  }

  async expectTESTCASESVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.tESTCASES), timeoutMs);
  }

  async expectTESTCASESHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.tESTCASES), timeoutMs);
  }

  async expectTESTCASESText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.tESTCASES), expected, timeoutMs);
  }

  async expectTESTCASESContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.tESTCASES), substring, timeoutMs);
  }

  async scrollTESTCASESIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.tESTCASES));
  }

  async getInnerTextAcrossAllPlans(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.acrossAllPlans));
  }

  async expectAcrossAllPlansVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.acrossAllPlans), timeoutMs);
  }

  async expectAcrossAllPlansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.acrossAllPlans), timeoutMs);
  }

  async expectAcrossAllPlansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.acrossAllPlans), expected, timeoutMs);
  }

  async expectAcrossAllPlansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.acrossAllPlans), substring, timeoutMs);
  }

  async scrollAcrossAllPlansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.acrossAllPlans));
  }

  async getInnerTextGENERATEDCODE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.gENERATEDCODE));
  }

  async expectGENERATEDCODEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.gENERATEDCODE), timeoutMs);
  }

  async expectGENERATEDCODEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.gENERATEDCODE), timeoutMs);
  }

  async expectGENERATEDCODEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.gENERATEDCODE), expected, timeoutMs);
  }

  async expectGENERATEDCODEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.gENERATEDCODE), substring, timeoutMs);
  }

  async scrollGENERATEDCODEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.gENERATEDCODE));
  }

  async getInnerTextCompiledOutputs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.compiledOutputs));
  }

  async expectCompiledOutputsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.compiledOutputs), timeoutMs);
  }

  async expectCompiledOutputsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.compiledOutputs), timeoutMs);
  }

  async expectCompiledOutputsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.compiledOutputs), expected, timeoutMs);
  }

  async expectCompiledOutputsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.compiledOutputs), substring, timeoutMs);
  }

  async scrollCompiledOutputsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.compiledOutputs));
  }

  async getInnerTextPROJECTS2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.pROJECTS2));
  }

  async expectPROJECTS2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.pROJECTS2), timeoutMs);
  }

  async expectPROJECTS2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.pROJECTS2), timeoutMs);
  }

  async expectPROJECTS2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.pROJECTS2), expected, timeoutMs);
  }

  async expectPROJECTS2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.pROJECTS2), substring, timeoutMs);
  }

  async scrollPROJECTS2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.pROJECTS2));
  }

  async getInnerTextEachProjectHasIts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.eachProjectHasIts));
  }

  async expectEachProjectHasItsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.eachProjectHasIts), timeoutMs);
  }

  async expectEachProjectHasItsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.eachProjectHasIts), timeoutMs);
  }

  async expectEachProjectHasItsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.eachProjectHasIts), expected, timeoutMs);
  }

  async expectEachProjectHasItsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.eachProjectHasIts), substring, timeoutMs);
  }

  async scrollEachProjectHasItsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.eachProjectHasIts));
  }

  async getInnerTextDemo5262026105846PM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.demo5262026105846PM));
  }

  async expectDemo5262026105846PMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.demo5262026105846PM), timeoutMs);
  }

  async expectDemo5262026105846PMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.demo5262026105846PM), timeoutMs);
  }

  async expectDemo5262026105846PMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.demo5262026105846PM), expected, timeoutMs);
  }

  async expectDemo5262026105846PMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.demo5262026105846PM), substring, timeoutMs);
  }

  async scrollDemo5262026105846PMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.demo5262026105846PM));
  }

  async getInnerTextDemo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.demo));
  }

  async expectDemoVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.demo), timeoutMs);
  }

  async expectDemoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.demo), timeoutMs);
  }

  async expectDemoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.demo), expected, timeoutMs);
  }

  async expectDemoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.demo), substring, timeoutMs);
  }

  async scrollDemoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.demo));
  }

  async getInnerTextPM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.PM));
  }

  async expectPMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.PM), timeoutMs);
  }

  async expectPMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.PM), timeoutMs);
  }

  async expectPMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.PM), expected, timeoutMs);
  }

  async expectPMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.PM), substring, timeoutMs);
  }

  async scrollPMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.PM));
  }

  async getInnerTextReq(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.req));
  }

  async expectReqVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.req), timeoutMs);
  }

  async expectReqHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.req), timeoutMs);
  }

  async expectReqText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.req), expected, timeoutMs);
  }

  async expectReqContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.req), substring, timeoutMs);
  }

  async scrollReqIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.req));
  }

  async getInnerTextEnv(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.env));
  }

  async expectEnvVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.env), timeoutMs);
  }

  async expectEnvHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.env), timeoutMs);
  }

  async expectEnvText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.env), expected, timeoutMs);
  }

  async expectEnvContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.env), substring, timeoutMs);
  }

  async scrollEnvIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.env));
  }

  async getInnerTextPOM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.pOM));
  }

  async expectPOMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.pOM), timeoutMs);
  }

  async expectPOMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.pOM), timeoutMs);
  }

  async expectPOMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.pOM), expected, timeoutMs);
  }

  async expectPOMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.pOM), substring, timeoutMs);
  }

  async scrollPOMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.pOM));
  }

  async getInnerTextPlans(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.plans));
  }

  async expectPlansVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.plans), timeoutMs);
  }

  async expectPlansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.plans), timeoutMs);
  }

  async expectPlansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.plans), expected, timeoutMs);
  }

  async expectPlansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.plans), substring, timeoutMs);
  }

  async scrollPlansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.plans));
  }

  async getInnerTextCases(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.cases));
  }

  async expectCasesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.cases), timeoutMs);
  }

  async expectCasesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.cases), timeoutMs);
  }

  async expectCasesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.cases), expected, timeoutMs);
  }

  async expectCasesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.cases), substring, timeoutMs);
  }

  async scrollCasesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.cases));
  }

  async getInnerTextCode(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.code));
  }

  async expectCodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.code), timeoutMs);
  }

  async expectCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.code), timeoutMs);
  }

  async expectCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.code), expected, timeoutMs);
  }

  async expectCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.code), substring, timeoutMs);
  }

  async scrollCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.code));
  }

  async clickOpen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.open));
  }

  async doubleClickOpen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.open));
  }

  async expectOpenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.open), timeoutMs);
  }

  async expectOpenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.open), timeoutMs);
  }

  async expectOpenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.open), expected, timeoutMs);
  }

  async expectOpenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.open), substring, timeoutMs);
  }

  async scrollOpenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.open));
  }

  async clickDelete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.delete));
  }

  async doubleClickDelete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.delete));
  }

  async expectDeleteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.delete), timeoutMs);
  }

  async expectDeleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.delete), timeoutMs);
  }

  async expectDeleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.delete), timeoutMs);
  }

  async expectDeleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.delete), timeoutMs);
  }

  async expectDeleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.delete), expected, timeoutMs);
  }

  async expectDeleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.delete), substring, timeoutMs);
  }

  async scrollDeleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.delete));
  }

  async getInnerTextNewProject(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.newProject));
  }

  async expectNewProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.newProject), expected, timeoutMs);
  }

  async expectNewProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.newProject), substring, timeoutMs);
  }

  async scrollNewProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.newProject));
  }

  async getInnerTextSetUpAWorkspace(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.setUpAWorkspace));
  }

  async expectSetUpAWorkspaceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.setUpAWorkspace), timeoutMs);
  }

  async expectSetUpAWorkspaceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.setUpAWorkspace), timeoutMs);
  }

  async expectSetUpAWorkspaceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.setUpAWorkspace), expected, timeoutMs);
  }

  async expectSetUpAWorkspaceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.setUpAWorkspace), substring, timeoutMs);
  }

  async scrollSetUpAWorkspaceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.setUpAWorkspace));
  }

  async getInnerTextPlatform(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.platform));
  }

  async expectPlatformVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.platform), timeoutMs);
  }

  async expectPlatformHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.platform), timeoutMs);
  }

  async expectPlatformText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.platform), expected, timeoutMs);
  }

  async expectPlatformContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.platform), substring, timeoutMs);
  }

  async scrollPlatformIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.platform));
  }

  async clickPlatformType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.platformType));
  }

  async doubleClickPlatformType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.platformType));
  }

  async expectPlatformTypeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.platformType), timeoutMs);
  }

  async expectPlatformTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.platformType), timeoutMs);
  }

  async expectPlatformTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.platformType), timeoutMs);
  }

  async expectPlatformTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.platformType), timeoutMs);
  }

  async expectPlatformTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.platformType), expected, timeoutMs);
  }

  async expectPlatformTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.platformType), substring, timeoutMs);
  }

  async scrollPlatformTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.platformType));
  }

  async getInnerTextComingSoon(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.comingSoon));
  }

  async expectComingSoonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.comingSoon), timeoutMs);
  }

  async expectComingSoonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.comingSoon), timeoutMs);
  }

  async expectComingSoonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.comingSoon), expected, timeoutMs);
  }

  async expectComingSoonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.comingSoon), substring, timeoutMs);
  }

  async scrollComingSoonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.comingSoon));
  }

  async getInnerTextWebAutomationRunsIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.webAutomationRunsIn));
  }

  async expectWebAutomationRunsInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), timeoutMs);
  }

  async expectWebAutomationRunsInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), timeoutMs);
  }

  async expectWebAutomationRunsInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), expected, timeoutMs);
  }

  async expectWebAutomationRunsInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), substring, timeoutMs);
  }

  async scrollWebAutomationRunsInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.webAutomationRunsIn));
  }

  async fillCreateProjectName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, DashboardPage.L.createProjectName), value);
  }

  async clearCreateProjectName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, DashboardPage.L.createProjectName));
  }

  async typeTextCreateProjectName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, DashboardPage.L.createProjectName), value);
  }

  async expectCreateProjectNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.createProjectName), expected, timeoutMs);
  }

  async expectCreateProjectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async scrollCreateProjectNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.createProjectName));
  }

  async clickCreateProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.createProject));
  }

  async doubleClickCreateProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.createProject));
  }

  async expectCreateProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.createProject), expected, timeoutMs);
  }

  async expectCreateProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.createProject), substring, timeoutMs);
  }

  async scrollCreateProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.createProject));
  }

  async clickOpenNextJsDevTools(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.openNextJsDevTools));
  }

  async doubleClickOpenNextJsDevTools(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.openNextJsDevTools), expected, timeoutMs);
  }

  async expectOpenNextJsDevToolsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.openNextJsDevTools), substring, timeoutMs);
  }

  async scrollOpenNextJsDevToolsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.openNextJsDevTools));
  }


  async clickAUTOMATIONAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.aUTOMATIONAI));
  }

  async doubleClickAUTOMATIONAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.aUTOMATIONAI));
  }

  async longPressAUTOMATIONAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.aUTOMATIONAI));
  }

  async expectAUTOMATIONAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), value, timeoutMs);
  }

  async expectAUTOMATIONAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), timeoutMs);
  }

  async expectAUTOMATIONAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), timeoutMs);
  }

  async expectAUTOMATIONAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), timeoutMs);
  }

  async expectAUTOMATIONAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), timeoutMs);
  }

  async expectAUTOMATIONAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), timeoutMs);
  }

  async expectAUTOMATIONAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.aUTOMATIONAI), count, timeoutMs);
  }

  async clickDashboard(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async doubleClickDashboard(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async longPressDashboard(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async expectDashboardValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.dashboard), value, timeoutMs);
  }

  async expectDashboardEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.dashboard), count, timeoutMs);
  }

  async clickWorkspaceAnalyticsAcrossProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects));
  }

  async doubleClickWorkspaceAnalyticsAcrossProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects));
  }

  async longPressWorkspaceAnalyticsAcrossProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects));
  }

  async expectWorkspaceAnalyticsAcrossProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), value, timeoutMs);
  }

  async expectWorkspaceAnalyticsAcrossProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), timeoutMs);
  }

  async expectWorkspaceAnalyticsAcrossProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), timeoutMs);
  }

  async expectWorkspaceAnalyticsAcrossProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), timeoutMs);
  }

  async expectWorkspaceAnalyticsAcrossProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), timeoutMs);
  }

  async expectWorkspaceAnalyticsAcrossProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), timeoutMs);
  }

  async expectWorkspaceAnalyticsAcrossProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.workspaceAnalyticsAcrossProjects), count, timeoutMs);
  }

  async clickWorkspace(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.workspace));
  }

  async doubleClickWorkspace(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.workspace));
  }

  async longPressWorkspace(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.workspace));
  }

  async expectWorkspaceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.workspace), value, timeoutMs);
  }

  async expectWorkspaceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.workspace), timeoutMs);
  }

  async expectWorkspaceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.workspace), timeoutMs);
  }

  async expectWorkspaceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.workspace), timeoutMs);
  }

  async expectWorkspaceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.workspace), timeoutMs);
  }

  async expectWorkspaceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.workspace), timeoutMs);
  }

  async expectWorkspaceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.workspace), count, timeoutMs);
  }

  async clickQuarks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.quarks));
  }

  async doubleClickQuarks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.quarks));
  }

  async longPressQuarks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.quarks));
  }

  async expectQuarksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.quarks), value, timeoutMs);
  }

  async expectQuarksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.quarks), timeoutMs);
  }

  async expectQuarksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.quarks), timeoutMs);
  }

  async expectQuarksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.quarks), timeoutMs);
  }

  async expectQuarksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.quarks), timeoutMs);
  }

  async expectQuarksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.quarks), timeoutMs);
  }

  async expectQuarksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.quarks), count, timeoutMs);
  }

  async clickJagadeeshQtsolvCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom));
  }

  async doubleClickJagadeeshQtsolvCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom));
  }

  async longPressJagadeeshQtsolvCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom));
  }

  async expectJagadeeshQtsolvComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), value, timeoutMs);
  }

  async expectJagadeeshQtsolvComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), timeoutMs);
  }

  async expectJagadeeshQtsolvComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), timeoutMs);
  }

  async expectJagadeeshQtsolvComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), timeoutMs);
  }

  async expectJagadeeshQtsolvComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), timeoutMs);
  }

  async expectJagadeeshQtsolvComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), timeoutMs);
  }

  async expectJagadeeshQtsolvComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.jagadeeshQtsolvCom), count, timeoutMs);
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.admin));
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.admin), count, timeoutMs);
  }

  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.home));
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.home), count, timeoutMs);
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.signOut));
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.signOut), value, timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.signOut), count, timeoutMs);
  }

  async clickORGANIZATIONOVERVIEW(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW));
  }

  async doubleClickORGANIZATIONOVERVIEW(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW));
  }

  async longPressORGANIZATIONOVERVIEW(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW));
  }

  async expectORGANIZATIONOVERVIEWValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), value, timeoutMs);
  }

  async expectORGANIZATIONOVERVIEWEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), timeoutMs);
  }

  async expectORGANIZATIONOVERVIEWDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), timeoutMs);
  }

  async expectORGANIZATIONOVERVIEWChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), timeoutMs);
  }

  async expectORGANIZATIONOVERVIEWUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), timeoutMs);
  }

  async expectORGANIZATIONOVERVIEWFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), timeoutMs);
  }

  async expectORGANIZATIONOVERVIEWCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.oRGANIZATIONOVERVIEW), count, timeoutMs);
  }

  async clickTotalsAcrossProjectsYou(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou));
  }

  async doubleClickTotalsAcrossProjectsYou(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou));
  }

  async longPressTotalsAcrossProjectsYou(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou));
  }

  async expectTotalsAcrossProjectsYouValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), value, timeoutMs);
  }

  async expectTotalsAcrossProjectsYouEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), timeoutMs);
  }

  async expectTotalsAcrossProjectsYouDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), timeoutMs);
  }

  async expectTotalsAcrossProjectsYouChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), timeoutMs);
  }

  async expectTotalsAcrossProjectsYouUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), timeoutMs);
  }

  async expectTotalsAcrossProjectsYouFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), timeoutMs);
  }

  async expectTotalsAcrossProjectsYouCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.totalsAcrossProjectsYou), count, timeoutMs);
  }

  async clickPROJECTS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.pROJECTS));
  }

  async doubleClickPROJECTS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.pROJECTS));
  }

  async longPressPROJECTS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.pROJECTS));
  }

  async expectPROJECTSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.pROJECTS), value, timeoutMs);
  }

  async expectPROJECTSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.pROJECTS), timeoutMs);
  }

  async expectPROJECTSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.pROJECTS), timeoutMs);
  }

  async expectPROJECTSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.pROJECTS), timeoutMs);
  }

  async expectPROJECTSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.pROJECTS), timeoutMs);
  }

  async expectPROJECTSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.pROJECTS), timeoutMs);
  }

  async expectPROJECTSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.pROJECTS), count, timeoutMs);
  }

  async clickREQUIREMENTS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.rEQUIREMENTS));
  }

  async doubleClickREQUIREMENTS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.rEQUIREMENTS));
  }

  async longPressREQUIREMENTS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.rEQUIREMENTS));
  }

  async expectREQUIREMENTSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), value, timeoutMs);
  }

  async expectREQUIREMENTSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), timeoutMs);
  }

  async expectREQUIREMENTSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), timeoutMs);
  }

  async expectREQUIREMENTSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), timeoutMs);
  }

  async expectREQUIREMENTSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), timeoutMs);
  }

  async expectREQUIREMENTSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), timeoutMs);
  }

  async expectREQUIREMENTSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.rEQUIREMENTS), count, timeoutMs);
  }

  async clickCapturedIntent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.capturedIntent));
  }

  async doubleClickCapturedIntent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.capturedIntent));
  }

  async longPressCapturedIntent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.capturedIntent));
  }

  async expectCapturedIntentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.capturedIntent), value, timeoutMs);
  }

  async expectCapturedIntentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.capturedIntent), timeoutMs);
  }

  async expectCapturedIntentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.capturedIntent), timeoutMs);
  }

  async expectCapturedIntentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.capturedIntent), timeoutMs);
  }

  async expectCapturedIntentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.capturedIntent), timeoutMs);
  }

  async expectCapturedIntentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.capturedIntent), timeoutMs);
  }

  async expectCapturedIntentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.capturedIntent), count, timeoutMs);
  }

  async clickENVIRONMENTS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.eNVIRONMENTS));
  }

  async doubleClickENVIRONMENTS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.eNVIRONMENTS));
  }

  async longPressENVIRONMENTS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.eNVIRONMENTS));
  }

  async expectENVIRONMENTSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), value, timeoutMs);
  }

  async expectENVIRONMENTSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), timeoutMs);
  }

  async expectENVIRONMENTSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), timeoutMs);
  }

  async expectENVIRONMENTSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), timeoutMs);
  }

  async expectENVIRONMENTSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), timeoutMs);
  }

  async expectENVIRONMENTSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), timeoutMs);
  }

  async expectENVIRONMENTSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.eNVIRONMENTS), count, timeoutMs);
  }

  async clickTargetsConfig(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.targetsConfig));
  }

  async doubleClickTargetsConfig(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.targetsConfig));
  }

  async longPressTargetsConfig(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.targetsConfig));
  }

  async expectTargetsConfigValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.targetsConfig), value, timeoutMs);
  }

  async expectTargetsConfigEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.targetsConfig), timeoutMs);
  }

  async expectTargetsConfigDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.targetsConfig), timeoutMs);
  }

  async expectTargetsConfigChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.targetsConfig), timeoutMs);
  }

  async expectTargetsConfigUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.targetsConfig), timeoutMs);
  }

  async expectTargetsConfigFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.targetsConfig), timeoutMs);
  }

  async expectTargetsConfigCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.targetsConfig), count, timeoutMs);
  }

  async clickPAGEOBJECTS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.pAGEOBJECTS));
  }

  async doubleClickPAGEOBJECTS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.pAGEOBJECTS));
  }

  async longPressPAGEOBJECTS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.pAGEOBJECTS));
  }

  async expectPAGEOBJECTSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), value, timeoutMs);
  }

  async expectPAGEOBJECTSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), timeoutMs);
  }

  async expectPAGEOBJECTSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), timeoutMs);
  }

  async expectPAGEOBJECTSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), timeoutMs);
  }

  async expectPAGEOBJECTSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), timeoutMs);
  }

  async expectPAGEOBJECTSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), timeoutMs);
  }

  async expectPAGEOBJECTSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.pAGEOBJECTS), count, timeoutMs);
  }

  async clickScreensOnDisk(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.screensOnDisk));
  }

  async doubleClickScreensOnDisk(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.screensOnDisk));
  }

  async longPressScreensOnDisk(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.screensOnDisk));
  }

  async expectScreensOnDiskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.screensOnDisk), value, timeoutMs);
  }

  async expectScreensOnDiskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.screensOnDisk), timeoutMs);
  }

  async expectScreensOnDiskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.screensOnDisk), timeoutMs);
  }

  async expectScreensOnDiskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.screensOnDisk), timeoutMs);
  }

  async expectScreensOnDiskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.screensOnDisk), timeoutMs);
  }

  async expectScreensOnDiskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.screensOnDisk), timeoutMs);
  }

  async expectScreensOnDiskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.screensOnDisk), count, timeoutMs);
  }

  async clickTESTPLANS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.tESTPLANS));
  }

  async doubleClickTESTPLANS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.tESTPLANS));
  }

  async longPressTESTPLANS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.tESTPLANS));
  }

  async expectTESTPLANSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.tESTPLANS), value, timeoutMs);
  }

  async expectTESTPLANSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.tESTPLANS), timeoutMs);
  }

  async expectTESTPLANSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.tESTPLANS), timeoutMs);
  }

  async expectTESTPLANSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.tESTPLANS), timeoutMs);
  }

  async expectTESTPLANSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.tESTPLANS), timeoutMs);
  }

  async expectTESTPLANSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.tESTPLANS), timeoutMs);
  }

  async expectTESTPLANSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.tESTPLANS), count, timeoutMs);
  }

  async clickLLMPlans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.lLMPlans));
  }

  async doubleClickLLMPlans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.lLMPlans));
  }

  async longPressLLMPlans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.lLMPlans));
  }

  async expectLLMPlansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.lLMPlans), value, timeoutMs);
  }

  async expectLLMPlansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.lLMPlans), timeoutMs);
  }

  async expectLLMPlansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.lLMPlans), timeoutMs);
  }

  async expectLLMPlansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.lLMPlans), timeoutMs);
  }

  async expectLLMPlansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.lLMPlans), timeoutMs);
  }

  async expectLLMPlansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.lLMPlans), timeoutMs);
  }

  async expectLLMPlansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.lLMPlans), count, timeoutMs);
  }

  async clickTESTCASES(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.tESTCASES));
  }

  async doubleClickTESTCASES(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.tESTCASES));
  }

  async longPressTESTCASES(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.tESTCASES));
  }

  async expectTESTCASESValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.tESTCASES), value, timeoutMs);
  }

  async expectTESTCASESEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.tESTCASES), timeoutMs);
  }

  async expectTESTCASESDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.tESTCASES), timeoutMs);
  }

  async expectTESTCASESChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.tESTCASES), timeoutMs);
  }

  async expectTESTCASESUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.tESTCASES), timeoutMs);
  }

  async expectTESTCASESFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.tESTCASES), timeoutMs);
  }

  async expectTESTCASESCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.tESTCASES), count, timeoutMs);
  }

  async clickAcrossAllPlans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.acrossAllPlans));
  }

  async doubleClickAcrossAllPlans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.acrossAllPlans));
  }

  async longPressAcrossAllPlans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.acrossAllPlans));
  }

  async expectAcrossAllPlansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.acrossAllPlans), value, timeoutMs);
  }

  async expectAcrossAllPlansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.acrossAllPlans), timeoutMs);
  }

  async expectAcrossAllPlansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.acrossAllPlans), timeoutMs);
  }

  async expectAcrossAllPlansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.acrossAllPlans), timeoutMs);
  }

  async expectAcrossAllPlansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.acrossAllPlans), timeoutMs);
  }

  async expectAcrossAllPlansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.acrossAllPlans), timeoutMs);
  }

  async expectAcrossAllPlansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.acrossAllPlans), count, timeoutMs);
  }

  async clickGENERATEDCODE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.gENERATEDCODE));
  }

  async doubleClickGENERATEDCODE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.gENERATEDCODE));
  }

  async longPressGENERATEDCODE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.gENERATEDCODE));
  }

  async expectGENERATEDCODEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.gENERATEDCODE), value, timeoutMs);
  }

  async expectGENERATEDCODEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.gENERATEDCODE), timeoutMs);
  }

  async expectGENERATEDCODEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.gENERATEDCODE), timeoutMs);
  }

  async expectGENERATEDCODEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.gENERATEDCODE), timeoutMs);
  }

  async expectGENERATEDCODEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.gENERATEDCODE), timeoutMs);
  }

  async expectGENERATEDCODEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.gENERATEDCODE), timeoutMs);
  }

  async expectGENERATEDCODECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.gENERATEDCODE), count, timeoutMs);
  }

  async clickCompiledOutputs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.compiledOutputs));
  }

  async doubleClickCompiledOutputs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.compiledOutputs));
  }

  async longPressCompiledOutputs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.compiledOutputs));
  }

  async expectCompiledOutputsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.compiledOutputs), value, timeoutMs);
  }

  async expectCompiledOutputsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.compiledOutputs), timeoutMs);
  }

  async expectCompiledOutputsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.compiledOutputs), timeoutMs);
  }

  async expectCompiledOutputsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.compiledOutputs), timeoutMs);
  }

  async expectCompiledOutputsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.compiledOutputs), timeoutMs);
  }

  async expectCompiledOutputsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.compiledOutputs), timeoutMs);
  }

  async expectCompiledOutputsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.compiledOutputs), count, timeoutMs);
  }

  async clickPROJECTS2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.pROJECTS2));
  }

  async doubleClickPROJECTS2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.pROJECTS2));
  }

  async longPressPROJECTS2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.pROJECTS2));
  }

  async expectPROJECTS2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.pROJECTS2), value, timeoutMs);
  }

  async expectPROJECTS2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.pROJECTS2), timeoutMs);
  }

  async expectPROJECTS2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.pROJECTS2), timeoutMs);
  }

  async expectPROJECTS2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.pROJECTS2), timeoutMs);
  }

  async expectPROJECTS2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.pROJECTS2), timeoutMs);
  }

  async expectPROJECTS2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.pROJECTS2), timeoutMs);
  }

  async expectPROJECTS2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.pROJECTS2), count, timeoutMs);
  }

  async clickEachProjectHasIts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.eachProjectHasIts));
  }

  async doubleClickEachProjectHasIts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.eachProjectHasIts));
  }

  async longPressEachProjectHasIts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.eachProjectHasIts));
  }

  async expectEachProjectHasItsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.eachProjectHasIts), value, timeoutMs);
  }

  async expectEachProjectHasItsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.eachProjectHasIts), timeoutMs);
  }

  async expectEachProjectHasItsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.eachProjectHasIts), timeoutMs);
  }

  async expectEachProjectHasItsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.eachProjectHasIts), timeoutMs);
  }

  async expectEachProjectHasItsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.eachProjectHasIts), timeoutMs);
  }

  async expectEachProjectHasItsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.eachProjectHasIts), timeoutMs);
  }

  async expectEachProjectHasItsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.eachProjectHasIts), count, timeoutMs);
  }

  async clickDemo5262026105846PM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.demo5262026105846PM));
  }

  async doubleClickDemo5262026105846PM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.demo5262026105846PM));
  }

  async longPressDemo5262026105846PM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.demo5262026105846PM));
  }

  async expectDemo5262026105846PMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.demo5262026105846PM), value, timeoutMs);
  }

  async expectDemo5262026105846PMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.demo5262026105846PM), timeoutMs);
  }

  async expectDemo5262026105846PMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.demo5262026105846PM), timeoutMs);
  }

  async expectDemo5262026105846PMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.demo5262026105846PM), timeoutMs);
  }

  async expectDemo5262026105846PMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.demo5262026105846PM), timeoutMs);
  }

  async expectDemo5262026105846PMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.demo5262026105846PM), timeoutMs);
  }

  async expectDemo5262026105846PMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.demo5262026105846PM), count, timeoutMs);
  }

  async clickDemo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.demo));
  }

  async doubleClickDemo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.demo));
  }

  async longPressDemo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.demo));
  }

  async expectDemoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.demo), value, timeoutMs);
  }

  async expectDemoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.demo), timeoutMs);
  }

  async expectDemoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.demo), timeoutMs);
  }

  async expectDemoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.demo), timeoutMs);
  }

  async expectDemoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.demo), timeoutMs);
  }

  async expectDemoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.demo), timeoutMs);
  }

  async expectDemoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.demo), count, timeoutMs);
  }

  async clickPM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.PM));
  }

  async doubleClickPM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.PM));
  }

  async longPressPM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.PM));
  }

  async expectPMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.PM), value, timeoutMs);
  }

  async expectPMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.PM), timeoutMs);
  }

  async expectPMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.PM), timeoutMs);
  }

  async expectPMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.PM), timeoutMs);
  }

  async expectPMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.PM), timeoutMs);
  }

  async expectPMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.PM), timeoutMs);
  }

  async expectPMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.PM), count, timeoutMs);
  }

  async clickReq(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.req));
  }

  async doubleClickReq(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.req));
  }

  async longPressReq(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.req));
  }

  async expectReqValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.req), value, timeoutMs);
  }

  async expectReqEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.req), timeoutMs);
  }

  async expectReqDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.req), timeoutMs);
  }

  async expectReqChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.req), timeoutMs);
  }

  async expectReqUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.req), timeoutMs);
  }

  async expectReqFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.req), timeoutMs);
  }

  async expectReqCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.req), count, timeoutMs);
  }

  async clickEnv(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.env));
  }

  async doubleClickEnv(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.env));
  }

  async longPressEnv(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.env));
  }

  async expectEnvValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.env), value, timeoutMs);
  }

  async expectEnvEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.env), timeoutMs);
  }

  async expectEnvDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.env), timeoutMs);
  }

  async expectEnvChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.env), timeoutMs);
  }

  async expectEnvUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.env), timeoutMs);
  }

  async expectEnvFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.env), timeoutMs);
  }

  async expectEnvCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.env), count, timeoutMs);
  }

  async clickPOM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.pOM));
  }

  async doubleClickPOM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.pOM));
  }

  async longPressPOM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.pOM));
  }

  async expectPOMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.pOM), value, timeoutMs);
  }

  async expectPOMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.pOM), timeoutMs);
  }

  async expectPOMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.pOM), timeoutMs);
  }

  async expectPOMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.pOM), timeoutMs);
  }

  async expectPOMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.pOM), timeoutMs);
  }

  async expectPOMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.pOM), timeoutMs);
  }

  async expectPOMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.pOM), count, timeoutMs);
  }

  async clickPlans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.plans));
  }

  async doubleClickPlans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.plans));
  }

  async longPressPlans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.plans));
  }

  async expectPlansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.plans), value, timeoutMs);
  }

  async expectPlansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.plans), timeoutMs);
  }

  async expectPlansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.plans), timeoutMs);
  }

  async expectPlansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.plans), timeoutMs);
  }

  async expectPlansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.plans), timeoutMs);
  }

  async expectPlansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.plans), timeoutMs);
  }

  async expectPlansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.plans), count, timeoutMs);
  }

  async clickCases(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.cases));
  }

  async doubleClickCases(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.cases));
  }

  async longPressCases(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.cases));
  }

  async expectCasesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.cases), value, timeoutMs);
  }

  async expectCasesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.cases), timeoutMs);
  }

  async expectCasesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.cases), timeoutMs);
  }

  async expectCasesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.cases), timeoutMs);
  }

  async expectCasesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.cases), timeoutMs);
  }

  async expectCasesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.cases), timeoutMs);
  }

  async expectCasesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.cases), count, timeoutMs);
  }

  async clickCode(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.code));
  }

  async doubleClickCode(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.code));
  }

  async longPressCode(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.code));
  }

  async expectCodeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.code), value, timeoutMs);
  }

  async expectCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.code), timeoutMs);
  }

  async expectCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.code), timeoutMs);
  }

  async expectCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.code), timeoutMs);
  }

  async expectCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.code), timeoutMs);
  }

  async expectCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.code), timeoutMs);
  }

  async expectCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.code), count, timeoutMs);
  }

  async longPressOpen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.open));
  }

  async expectOpenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.open), value, timeoutMs);
  }

  async expectOpenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.open), timeoutMs);
  }

  async expectOpenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.open), timeoutMs);
  }

  async expectOpenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.open), timeoutMs);
  }

  async expectOpenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.open), timeoutMs);
  }

  async expectOpenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.open), timeoutMs);
  }

  async expectOpenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.open), count, timeoutMs);
  }

  async longPressDelete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.delete));
  }

  async expectDeleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.delete), value, timeoutMs);
  }

  async expectDeleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.delete), timeoutMs);
  }

  async expectDeleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.delete), timeoutMs);
  }

  async expectDeleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.delete), timeoutMs);
  }

  async expectDeleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.delete), count, timeoutMs);
  }

  async clickNewProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.newProject));
  }

  async doubleClickNewProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.newProject));
  }

  async longPressNewProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.newProject));
  }

  async expectNewProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.newProject), value, timeoutMs);
  }

  async expectNewProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.newProject), count, timeoutMs);
  }

  async clickSetUpAWorkspace(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.setUpAWorkspace));
  }

  async doubleClickSetUpAWorkspace(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.setUpAWorkspace));
  }

  async longPressSetUpAWorkspace(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.setUpAWorkspace));
  }

  async expectSetUpAWorkspaceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.setUpAWorkspace), value, timeoutMs);
  }

  async expectSetUpAWorkspaceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.setUpAWorkspace), timeoutMs);
  }

  async expectSetUpAWorkspaceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.setUpAWorkspace), timeoutMs);
  }

  async expectSetUpAWorkspaceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.setUpAWorkspace), timeoutMs);
  }

  async expectSetUpAWorkspaceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.setUpAWorkspace), timeoutMs);
  }

  async expectSetUpAWorkspaceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.setUpAWorkspace), timeoutMs);
  }

  async expectSetUpAWorkspaceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.setUpAWorkspace), count, timeoutMs);
  }

  async clickPlatform(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.platform));
  }

  async doubleClickPlatform(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.platform));
  }

  async longPressPlatform(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.platform));
  }

  async expectPlatformValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.platform), value, timeoutMs);
  }

  async expectPlatformEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.platform), timeoutMs);
  }

  async expectPlatformDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.platform), timeoutMs);
  }

  async expectPlatformChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.platform), timeoutMs);
  }

  async expectPlatformUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.platform), timeoutMs);
  }

  async expectPlatformFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.platform), timeoutMs);
  }

  async expectPlatformCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.platform), count, timeoutMs);
  }

  async longPressPlatformType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.platformType));
  }

  async expectPlatformTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.platformType), value, timeoutMs);
  }

  async expectPlatformTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.platformType), timeoutMs);
  }

  async expectPlatformTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.platformType), timeoutMs);
  }

  async expectPlatformTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.platformType), timeoutMs);
  }

  async expectPlatformTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.platformType), count, timeoutMs);
  }

  async clickComingSoon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.comingSoon));
  }

  async doubleClickComingSoon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.comingSoon));
  }

  async longPressComingSoon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.comingSoon));
  }

  async expectComingSoonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.comingSoon), value, timeoutMs);
  }

  async expectComingSoonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.comingSoon), timeoutMs);
  }

  async expectComingSoonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.comingSoon), timeoutMs);
  }

  async expectComingSoonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.comingSoon), timeoutMs);
  }

  async expectComingSoonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.comingSoon), timeoutMs);
  }

  async expectComingSoonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.comingSoon), timeoutMs);
  }

  async expectComingSoonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.comingSoon), count, timeoutMs);
  }

  async clickWebAutomationRunsIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.webAutomationRunsIn));
  }

  async doubleClickWebAutomationRunsIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.webAutomationRunsIn));
  }

  async longPressWebAutomationRunsIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.webAutomationRunsIn));
  }

  async expectWebAutomationRunsInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), value, timeoutMs);
  }

  async expectWebAutomationRunsInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), timeoutMs);
  }

  async expectWebAutomationRunsInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), timeoutMs);
  }

  async expectWebAutomationRunsInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), timeoutMs);
  }

  async expectWebAutomationRunsInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), timeoutMs);
  }

  async expectWebAutomationRunsInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), timeoutMs);
  }

  async expectWebAutomationRunsInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.webAutomationRunsIn), count, timeoutMs);
  }

  async expectCreateProjectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.createProjectName), expected, timeoutMs);
  }

  async expectCreateProjectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.createProjectName), substring, timeoutMs);
  }

  async expectCreateProjectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.createProjectName), count, timeoutMs);
  }

  async longPressCreateProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.createProject));
  }

  async expectCreateProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.createProject), value, timeoutMs);
  }

  async expectCreateProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.createProject), count, timeoutMs);
  }

  async longPressOpenNextJsDevTools(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.openNextJsDevTools), value, timeoutMs);
  }

  async expectOpenNextJsDevToolsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.openNextJsDevTools), count, timeoutMs);
  }

}
