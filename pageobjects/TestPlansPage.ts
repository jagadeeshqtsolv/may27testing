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

export class TestPlansPage {
  private static readonly L = {
    aUTOMATIONAIPROJECT: { strategy: 'text' as const, value: 'AUTOMATIONAI · PROJECT', actionKind: 'text' as const },
    test: { strategy: 'text' as const, value: 'Test', actionKind: 'text' as const },
    created5272026121831PM: { strategy: 'text' as const, value: 'Created 5/27/2026, 12:18:31 PM', actionKind: 'text' as const },
    allProjects: { strategy: 'role' as const, value: 'All projects', role: 'link', actionKind: 'link' as const },
    deleteProject: { strategy: 'role' as const, value: 'Delete project', role: 'button', actionKind: 'button' as const },
    wORKSPACE: { strategy: 'text' as const, value: 'WORKSPACE', actionKind: 'text' as const },
    automationAI: { strategy: 'text' as const, value: 'AutomationAI', actionKind: 'text' as const },
    overviewProjectSummary: { strategy: 'role' as const, value: 'Overview Project summary', role: 'button', actionKind: 'button' as const },
    setup0APIKeys: { strategy: 'role' as const, value: 'Setup 0 API keys, execution & environments', role: 'button', actionKind: 'button' as const },
    requirements0Write: { strategy: 'role' as const, value: 'Requirements 0 Write & generate plans', role: 'button', actionKind: 'button' as const },
    recorderBrowserDOMCapture: { strategy: 'role' as const, value: 'Recorder Browser DOM capture', role: 'button', actionKind: 'button' as const },
    pageObjects0Browse: { strategy: 'role' as const, value: 'Page objects 0 Browse & edit library', role: 'button', actionKind: 'button' as const },
    testPlans0Review: { strategy: 'role' as const, value: 'Test plans 0 Review plans & codegen', role: 'button', actionKind: 'button' as const },
    testExecutionRunSpecs: { strategy: 'role' as const, value: 'Test execution Run specs & live logs', role: 'button', actionKind: 'button' as const },
    testReportsHTMLReport: { strategy: 'role' as const, value: 'Test reports HTML report & run history', role: 'button', actionKind: 'button' as const },
    frameworkZipFiles: { strategy: 'role' as const, value: 'Framework Zip & files on disk', role: 'button', actionKind: 'button' as const },
    playwrightGeneration: { strategy: 'text' as const, value: 'Playwright generation', actionKind: 'text' as const },
    specsAreWrittenTo: { strategy: 'text' as const, value: 'Specs are written to', actionKind: 'text' as const },
    none: { strategy: 'text' as const, value: '(none)', actionKind: 'combobox' as const },
    testPlanLibrary: { strategy: 'text' as const, value: 'Test plan library', actionKind: 'text' as const },
    TestCasesAcross: { strategy: 'text' as const, value: '0 test cases across 0 requirements.', actionKind: 'text' as const },
    createTestPlan: { strategy: 'role' as const, value: 'Create test plan', role: 'button', actionKind: 'button' as const },
    refresh: { strategy: 'role' as const, value: 'Refresh', role: 'button', actionKind: 'button' as const },
    noTestPlansYet: { strategy: 'text' as const, value: 'No test plans yet. Click Create test plan to start', actionKind: 'text' as const },
    openProjectAssistant: { strategy: 'testId' as const, value: 'chat-toggle-btn', actionKind: 'button' as const },
    openNextJsDevTools: { strategy: 'css' as const, value: '#next-logo', shadowHost: 'nextjs-portal', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAUTOMATIONAIPROJECT(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), expected, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), substring, timeoutMs);
  }

  async scrollAUTOMATIONAIPROJECTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT));
  }

  async getInnerTextTest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestPlansPage.L.test));
  }

  async expectTestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.test), timeoutMs);
  }

  async expectTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.test), timeoutMs);
  }

  async expectTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.test), expected, timeoutMs);
  }

  async expectTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.test), substring, timeoutMs);
  }

  async scrollTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.test));
  }

  async getInnerTextCreated5272026121831PM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestPlansPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.created5272026121831PM), expected, timeoutMs);
  }

  async expectCreated5272026121831PMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.created5272026121831PM), substring, timeoutMs);
  }

  async scrollCreated5272026121831PMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.created5272026121831PM));
  }

  async clickAllProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.allProjects));
  }

  async doubleClickAllProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.allProjects));
  }

  async expectAllProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.allProjects), expected, timeoutMs);
  }

  async expectAllProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.allProjects), substring, timeoutMs);
  }

  async scrollAllProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.allProjects));
  }

  async clickDeleteProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.deleteProject));
  }

  async doubleClickDeleteProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.deleteProject));
  }

  async expectDeleteProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.deleteProject), expected, timeoutMs);
  }

  async expectDeleteProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.deleteProject), substring, timeoutMs);
  }

  async scrollDeleteProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.deleteProject));
  }

  async getInnerTextWORKSPACE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestPlansPage.L.wORKSPACE));
  }

  async expectWORKSPACEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.wORKSPACE), expected, timeoutMs);
  }

  async expectWORKSPACEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.wORKSPACE), substring, timeoutMs);
  }

  async scrollWORKSPACEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.wORKSPACE));
  }

  async getInnerTextAutomationAI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestPlansPage.L.automationAI));
  }

  async expectAutomationAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.automationAI), expected, timeoutMs);
  }

  async expectAutomationAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.automationAI), substring, timeoutMs);
  }

  async scrollAutomationAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.automationAI));
  }

  async clickOverviewProjectSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.overviewProjectSummary));
  }

  async doubleClickOverviewProjectSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), expected, timeoutMs);
  }

  async expectOverviewProjectSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), substring, timeoutMs);
  }

  async scrollOverviewProjectSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.overviewProjectSummary));
  }

  async clickSetup0APIKeys(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.setup0APIKeys));
  }

  async doubleClickSetup0APIKeys(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.setup0APIKeys), expected, timeoutMs);
  }

  async expectSetup0APIKeysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.setup0APIKeys), substring, timeoutMs);
  }

  async scrollSetup0APIKeysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.setup0APIKeys));
  }

  async clickRequirements0Write(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.requirements0Write));
  }

  async doubleClickRequirements0Write(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.requirements0Write));
  }

  async expectRequirements0WriteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.requirements0Write), expected, timeoutMs);
  }

  async expectRequirements0WriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.requirements0Write), substring, timeoutMs);
  }

  async scrollRequirements0WriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.requirements0Write));
  }

  async clickRecorderBrowserDOMCapture(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture));
  }

  async doubleClickRecorderBrowserDOMCapture(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), expected, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), substring, timeoutMs);
  }

  async scrollRecorderBrowserDOMCaptureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture));
  }

  async clickPageObjects0Browse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.pageObjects0Browse));
  }

  async doubleClickPageObjects0Browse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), expected, timeoutMs);
  }

  async expectPageObjects0BrowseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), substring, timeoutMs);
  }

  async scrollPageObjects0BrowseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.pageObjects0Browse));
  }

  async clickTestPlans0Review(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.testPlans0Review));
  }

  async doubleClickTestPlans0Review(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.testPlans0Review), expected, timeoutMs);
  }

  async expectTestPlans0ReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.testPlans0Review), substring, timeoutMs);
  }

  async scrollTestPlans0ReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.testPlans0Review));
  }

  async clickTestExecutionRunSpecs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs));
  }

  async doubleClickTestExecutionRunSpecs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), expected, timeoutMs);
  }

  async expectTestExecutionRunSpecsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), substring, timeoutMs);
  }

  async scrollTestExecutionRunSpecsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs));
  }

  async clickTestReportsHTMLReport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport));
  }

  async doubleClickTestReportsHTMLReport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), expected, timeoutMs);
  }

  async expectTestReportsHTMLReportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), substring, timeoutMs);
  }

  async scrollTestReportsHTMLReportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport));
  }

  async clickFrameworkZipFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.frameworkZipFiles));
  }

  async doubleClickFrameworkZipFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), expected, timeoutMs);
  }

  async expectFrameworkZipFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), substring, timeoutMs);
  }

  async scrollFrameworkZipFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.frameworkZipFiles));
  }

  async getInnerTextPlaywrightGeneration(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestPlansPage.L.playwrightGeneration));
  }

  async expectPlaywrightGenerationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.playwrightGeneration), timeoutMs);
  }

  async expectPlaywrightGenerationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.playwrightGeneration), timeoutMs);
  }

  async expectPlaywrightGenerationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.playwrightGeneration), expected, timeoutMs);
  }

  async expectPlaywrightGenerationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.playwrightGeneration), substring, timeoutMs);
  }

  async scrollPlaywrightGenerationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.playwrightGeneration));
  }

  async getInnerTextSpecsAreWrittenTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo));
  }

  async expectSpecsAreWrittenToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), timeoutMs);
  }

  async expectSpecsAreWrittenToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), timeoutMs);
  }

  async expectSpecsAreWrittenToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), expected, timeoutMs);
  }

  async expectSpecsAreWrittenToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), substring, timeoutMs);
  }

  async scrollSpecsAreWrittenToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo));
  }

  async selectNone(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, TestPlansPage.L.none), value);
  }

  async expectNoneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.none), timeoutMs);
  }

  async expectNoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.none), timeoutMs);
  }

  async expectNoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.none), timeoutMs);
  }

  async expectNoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.none), timeoutMs);
  }

  async expectNoneValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.none), expected, timeoutMs);
  }

  async expectNoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.none), timeoutMs);
  }

  async scrollNoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.none));
  }

  async getInnerTextTestPlanLibrary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestPlansPage.L.testPlanLibrary));
  }

  async expectTestPlanLibraryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.testPlanLibrary), timeoutMs);
  }

  async expectTestPlanLibraryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.testPlanLibrary), timeoutMs);
  }

  async expectTestPlanLibraryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.testPlanLibrary), expected, timeoutMs);
  }

  async expectTestPlanLibraryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.testPlanLibrary), substring, timeoutMs);
  }

  async scrollTestPlanLibraryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.testPlanLibrary));
  }

  async getInnerTextTestCasesAcross(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestPlansPage.L.TestCasesAcross));
  }

  async expectTestCasesAcrossVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.TestCasesAcross), timeoutMs);
  }

  async expectTestCasesAcrossHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.TestCasesAcross), timeoutMs);
  }

  async expectTestCasesAcrossText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.TestCasesAcross), expected, timeoutMs);
  }

  async expectTestCasesAcrossContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.TestCasesAcross), substring, timeoutMs);
  }

  async scrollTestCasesAcrossIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.TestCasesAcross));
  }

  async clickCreateTestPlan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.createTestPlan));
  }

  async doubleClickCreateTestPlan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.createTestPlan));
  }

  async expectCreateTestPlanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.createTestPlan), timeoutMs);
  }

  async expectCreateTestPlanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.createTestPlan), timeoutMs);
  }

  async expectCreateTestPlanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.createTestPlan), timeoutMs);
  }

  async expectCreateTestPlanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.createTestPlan), timeoutMs);
  }

  async expectCreateTestPlanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.createTestPlan), expected, timeoutMs);
  }

  async expectCreateTestPlanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.createTestPlan), substring, timeoutMs);
  }

  async scrollCreateTestPlanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.createTestPlan));
  }

  async clickRefresh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.refresh));
  }

  async doubleClickRefresh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.refresh));
  }

  async expectRefreshVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.refresh), timeoutMs);
  }

  async expectRefreshHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.refresh), timeoutMs);
  }

  async expectRefreshEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.refresh), timeoutMs);
  }

  async expectRefreshDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.refresh), timeoutMs);
  }

  async expectRefreshText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.refresh), expected, timeoutMs);
  }

  async expectRefreshContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.refresh), substring, timeoutMs);
  }

  async scrollRefreshIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.refresh));
  }

  async getInnerTextNoTestPlansYet(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestPlansPage.L.noTestPlansYet));
  }

  async expectNoTestPlansYetVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.noTestPlansYet), timeoutMs);
  }

  async expectNoTestPlansYetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.noTestPlansYet), timeoutMs);
  }

  async expectNoTestPlansYetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.noTestPlansYet), expected, timeoutMs);
  }

  async expectNoTestPlansYetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.noTestPlansYet), substring, timeoutMs);
  }

  async scrollNoTestPlansYetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.noTestPlansYet));
  }

  async clickOpenProjectAssistant(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.openProjectAssistant));
  }

  async doubleClickOpenProjectAssistant(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.openProjectAssistant), expected, timeoutMs);
  }

  async expectOpenProjectAssistantContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.openProjectAssistant), substring, timeoutMs);
  }

  async scrollOpenProjectAssistantIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.openProjectAssistant));
  }

  async clickOpenNextJsDevTools(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.openNextJsDevTools));
  }

  async doubleClickOpenNextJsDevTools(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), expected, timeoutMs);
  }

  async expectOpenNextJsDevToolsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), substring, timeoutMs);
  }

  async scrollOpenNextJsDevToolsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestPlansPage.L.openNextJsDevTools));
  }


  async clickAUTOMATIONAIPROJECT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT));
  }

  async doubleClickAUTOMATIONAIPROJECT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT));
  }

  async longPressAUTOMATIONAIPROJECT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), value, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.aUTOMATIONAIPROJECT), count, timeoutMs);
  }

  async clickTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.test));
  }

  async doubleClickTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.test));
  }

  async longPressTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.test));
  }

  async expectTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.test), value, timeoutMs);
  }

  async expectTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.test), timeoutMs);
  }

  async expectTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.test), timeoutMs);
  }

  async expectTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.test), timeoutMs);
  }

  async expectTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.test), timeoutMs);
  }

  async expectTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.test), timeoutMs);
  }

  async expectTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.test), count, timeoutMs);
  }

  async clickCreated5272026121831PM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.created5272026121831PM));
  }

  async doubleClickCreated5272026121831PM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.created5272026121831PM));
  }

  async longPressCreated5272026121831PM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.created5272026121831PM), value, timeoutMs);
  }

  async expectCreated5272026121831PMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.created5272026121831PM), count, timeoutMs);
  }

  async longPressAllProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.allProjects));
  }

  async expectAllProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.allProjects), value, timeoutMs);
  }

  async expectAllProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.allProjects), count, timeoutMs);
  }

  async longPressDeleteProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.deleteProject));
  }

  async expectDeleteProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.deleteProject), value, timeoutMs);
  }

  async expectDeleteProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.deleteProject), count, timeoutMs);
  }

  async clickWORKSPACE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.wORKSPACE));
  }

  async doubleClickWORKSPACE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.wORKSPACE));
  }

  async longPressWORKSPACE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.wORKSPACE));
  }

  async expectWORKSPACEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.wORKSPACE), value, timeoutMs);
  }

  async expectWORKSPACEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.wORKSPACE), count, timeoutMs);
  }

  async clickAutomationAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.automationAI));
  }

  async doubleClickAutomationAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.automationAI));
  }

  async longPressAutomationAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.automationAI));
  }

  async expectAutomationAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.automationAI), value, timeoutMs);
  }

  async expectAutomationAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.automationAI), count, timeoutMs);
  }

  async longPressOverviewProjectSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), value, timeoutMs);
  }

  async expectOverviewProjectSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.overviewProjectSummary), count, timeoutMs);
  }

  async longPressSetup0APIKeys(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.setup0APIKeys), value, timeoutMs);
  }

  async expectSetup0APIKeysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.setup0APIKeys), count, timeoutMs);
  }

  async longPressRequirements0Write(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.requirements0Write));
  }

  async expectRequirements0WriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.requirements0Write), value, timeoutMs);
  }

  async expectRequirements0WriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.requirements0Write), count, timeoutMs);
  }

  async longPressRecorderBrowserDOMCapture(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), value, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.recorderBrowserDOMCapture), count, timeoutMs);
  }

  async longPressPageObjects0Browse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), value, timeoutMs);
  }

  async expectPageObjects0BrowseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.pageObjects0Browse), count, timeoutMs);
  }

  async longPressTestPlans0Review(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.testPlans0Review), value, timeoutMs);
  }

  async expectTestPlans0ReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.testPlans0Review), count, timeoutMs);
  }

  async longPressTestExecutionRunSpecs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), value, timeoutMs);
  }

  async expectTestExecutionRunSpecsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.testExecutionRunSpecs), count, timeoutMs);
  }

  async longPressTestReportsHTMLReport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), value, timeoutMs);
  }

  async expectTestReportsHTMLReportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.testReportsHTMLReport), count, timeoutMs);
  }

  async longPressFrameworkZipFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), value, timeoutMs);
  }

  async expectFrameworkZipFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.frameworkZipFiles), count, timeoutMs);
  }

  async clickPlaywrightGeneration(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.playwrightGeneration));
  }

  async doubleClickPlaywrightGeneration(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.playwrightGeneration));
  }

  async longPressPlaywrightGeneration(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.playwrightGeneration));
  }

  async expectPlaywrightGenerationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.playwrightGeneration), value, timeoutMs);
  }

  async expectPlaywrightGenerationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.playwrightGeneration), timeoutMs);
  }

  async expectPlaywrightGenerationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.playwrightGeneration), timeoutMs);
  }

  async expectPlaywrightGenerationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.playwrightGeneration), timeoutMs);
  }

  async expectPlaywrightGenerationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.playwrightGeneration), timeoutMs);
  }

  async expectPlaywrightGenerationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.playwrightGeneration), timeoutMs);
  }

  async expectPlaywrightGenerationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.playwrightGeneration), count, timeoutMs);
  }

  async clickSpecsAreWrittenTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo));
  }

  async doubleClickSpecsAreWrittenTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo));
  }

  async longPressSpecsAreWrittenTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo));
  }

  async expectSpecsAreWrittenToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), value, timeoutMs);
  }

  async expectSpecsAreWrittenToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), timeoutMs);
  }

  async expectSpecsAreWrittenToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), timeoutMs);
  }

  async expectSpecsAreWrittenToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), timeoutMs);
  }

  async expectSpecsAreWrittenToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), timeoutMs);
  }

  async expectSpecsAreWrittenToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), timeoutMs);
  }

  async expectSpecsAreWrittenToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.specsAreWrittenTo), count, timeoutMs);
  }

  async expectNoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestPlansPage.L.none), expected, timeoutMs);
  }

  async expectNoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestPlansPage.L.none), substring, timeoutMs);
  }

  async expectNoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.none), timeoutMs);
  }

  async expectNoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.none), timeoutMs);
  }

  async expectNoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.none), count, timeoutMs);
  }

  async clickTestPlanLibrary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.testPlanLibrary));
  }

  async doubleClickTestPlanLibrary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.testPlanLibrary));
  }

  async longPressTestPlanLibrary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.testPlanLibrary));
  }

  async expectTestPlanLibraryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.testPlanLibrary), value, timeoutMs);
  }

  async expectTestPlanLibraryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.testPlanLibrary), timeoutMs);
  }

  async expectTestPlanLibraryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.testPlanLibrary), timeoutMs);
  }

  async expectTestPlanLibraryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.testPlanLibrary), timeoutMs);
  }

  async expectTestPlanLibraryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.testPlanLibrary), timeoutMs);
  }

  async expectTestPlanLibraryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.testPlanLibrary), timeoutMs);
  }

  async expectTestPlanLibraryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.testPlanLibrary), count, timeoutMs);
  }

  async clickTestCasesAcross(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.TestCasesAcross));
  }

  async doubleClickTestCasesAcross(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.TestCasesAcross));
  }

  async longPressTestCasesAcross(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.TestCasesAcross));
  }

  async expectTestCasesAcrossValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.TestCasesAcross), value, timeoutMs);
  }

  async expectTestCasesAcrossEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.TestCasesAcross), timeoutMs);
  }

  async expectTestCasesAcrossDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.TestCasesAcross), timeoutMs);
  }

  async expectTestCasesAcrossChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.TestCasesAcross), timeoutMs);
  }

  async expectTestCasesAcrossUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.TestCasesAcross), timeoutMs);
  }

  async expectTestCasesAcrossFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.TestCasesAcross), timeoutMs);
  }

  async expectTestCasesAcrossCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.TestCasesAcross), count, timeoutMs);
  }

  async longPressCreateTestPlan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.createTestPlan));
  }

  async expectCreateTestPlanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.createTestPlan), value, timeoutMs);
  }

  async expectCreateTestPlanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.createTestPlan), timeoutMs);
  }

  async expectCreateTestPlanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.createTestPlan), timeoutMs);
  }

  async expectCreateTestPlanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.createTestPlan), timeoutMs);
  }

  async expectCreateTestPlanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.createTestPlan), count, timeoutMs);
  }

  async longPressRefresh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.refresh));
  }

  async expectRefreshValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.refresh), value, timeoutMs);
  }

  async expectRefreshChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.refresh), timeoutMs);
  }

  async expectRefreshUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.refresh), timeoutMs);
  }

  async expectRefreshFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.refresh), timeoutMs);
  }

  async expectRefreshCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.refresh), count, timeoutMs);
  }

  async clickNoTestPlansYet(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestPlansPage.L.noTestPlansYet));
  }

  async doubleClickNoTestPlansYet(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestPlansPage.L.noTestPlansYet));
  }

  async longPressNoTestPlansYet(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.noTestPlansYet));
  }

  async expectNoTestPlansYetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.noTestPlansYet), value, timeoutMs);
  }

  async expectNoTestPlansYetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestPlansPage.L.noTestPlansYet), timeoutMs);
  }

  async expectNoTestPlansYetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestPlansPage.L.noTestPlansYet), timeoutMs);
  }

  async expectNoTestPlansYetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.noTestPlansYet), timeoutMs);
  }

  async expectNoTestPlansYetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.noTestPlansYet), timeoutMs);
  }

  async expectNoTestPlansYetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.noTestPlansYet), timeoutMs);
  }

  async expectNoTestPlansYetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.noTestPlansYet), count, timeoutMs);
  }

  async longPressOpenProjectAssistant(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.openProjectAssistant), value, timeoutMs);
  }

  async expectOpenProjectAssistantChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.openProjectAssistant), count, timeoutMs);
  }

  async longPressOpenNextJsDevTools(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestPlansPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), value, timeoutMs);
  }

  async expectOpenNextJsDevToolsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestPlansPage.L.openNextJsDevTools), count, timeoutMs);
  }

}
