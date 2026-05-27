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

export class TestReportsPage {
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
    testReports: { strategy: 'text' as const, value: 'Test reports', actionKind: 'text' as const },
    hTMLReportsPassFailBreakdown: { strategy: 'text' as const, value: 'HTML reports, pass/fail breakdown, and per-step', actionKind: 'text' as const },
    runHistory: { strategy: 'text' as const, value: 'Run history', actionKind: 'text' as const },
    refresh: { strategy: 'testId' as const, value: 'reports-refresh-btn', actionKind: 'button' as const },
    noRunsYetStart: { strategy: 'text' as const, value: 'No runs yet. Start a run from Test execution.', actionKind: 'text' as const },
    selectARunTo: { strategy: 'text' as const, value: 'Select a run to view its report.', actionKind: 'text' as const },
    openProjectAssistant: { strategy: 'testId' as const, value: 'chat-toggle-btn', actionKind: 'button' as const },
    openNextJsDevTools: { strategy: 'css' as const, value: '#next-logo', shadowHost: 'nextjs-portal', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAUTOMATIONAIPROJECT(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), expected, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), substring, timeoutMs);
  }

  async scrollAUTOMATIONAIPROJECTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT));
  }

  async getInnerTextTest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestReportsPage.L.test));
  }

  async expectTestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.test), timeoutMs);
  }

  async expectTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.test), timeoutMs);
  }

  async expectTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.test), expected, timeoutMs);
  }

  async expectTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.test), substring, timeoutMs);
  }

  async scrollTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.test));
  }

  async getInnerTextCreated5272026121831PM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestReportsPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.created5272026121831PM), expected, timeoutMs);
  }

  async expectCreated5272026121831PMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.created5272026121831PM), substring, timeoutMs);
  }

  async scrollCreated5272026121831PMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.created5272026121831PM));
  }

  async clickAllProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.allProjects));
  }

  async doubleClickAllProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.allProjects));
  }

  async expectAllProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.allProjects), expected, timeoutMs);
  }

  async expectAllProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.allProjects), substring, timeoutMs);
  }

  async scrollAllProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.allProjects));
  }

  async clickDeleteProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.deleteProject));
  }

  async doubleClickDeleteProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.deleteProject));
  }

  async expectDeleteProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.deleteProject), expected, timeoutMs);
  }

  async expectDeleteProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.deleteProject), substring, timeoutMs);
  }

  async scrollDeleteProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.deleteProject));
  }

  async getInnerTextWORKSPACE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestReportsPage.L.wORKSPACE));
  }

  async expectWORKSPACEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.wORKSPACE), expected, timeoutMs);
  }

  async expectWORKSPACEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.wORKSPACE), substring, timeoutMs);
  }

  async scrollWORKSPACEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.wORKSPACE));
  }

  async getInnerTextAutomationAI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestReportsPage.L.automationAI));
  }

  async expectAutomationAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.automationAI), expected, timeoutMs);
  }

  async expectAutomationAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.automationAI), substring, timeoutMs);
  }

  async scrollAutomationAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.automationAI));
  }

  async clickOverviewProjectSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.overviewProjectSummary));
  }

  async doubleClickOverviewProjectSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), expected, timeoutMs);
  }

  async expectOverviewProjectSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), substring, timeoutMs);
  }

  async scrollOverviewProjectSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.overviewProjectSummary));
  }

  async clickSetup0APIKeys(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.setup0APIKeys));
  }

  async doubleClickSetup0APIKeys(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.setup0APIKeys), expected, timeoutMs);
  }

  async expectSetup0APIKeysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.setup0APIKeys), substring, timeoutMs);
  }

  async scrollSetup0APIKeysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.setup0APIKeys));
  }

  async clickRequirements0Write(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.requirements0Write));
  }

  async doubleClickRequirements0Write(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.requirements0Write));
  }

  async expectRequirements0WriteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.requirements0Write), expected, timeoutMs);
  }

  async expectRequirements0WriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.requirements0Write), substring, timeoutMs);
  }

  async scrollRequirements0WriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.requirements0Write));
  }

  async clickRecorderBrowserDOMCapture(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture));
  }

  async doubleClickRecorderBrowserDOMCapture(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), expected, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), substring, timeoutMs);
  }

  async scrollRecorderBrowserDOMCaptureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture));
  }

  async clickPageObjects0Browse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.pageObjects0Browse));
  }

  async doubleClickPageObjects0Browse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), expected, timeoutMs);
  }

  async expectPageObjects0BrowseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), substring, timeoutMs);
  }

  async scrollPageObjects0BrowseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.pageObjects0Browse));
  }

  async clickTestPlans0Review(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.testPlans0Review));
  }

  async doubleClickTestPlans0Review(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.testPlans0Review), expected, timeoutMs);
  }

  async expectTestPlans0ReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.testPlans0Review), substring, timeoutMs);
  }

  async scrollTestPlans0ReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.testPlans0Review));
  }

  async clickTestExecutionRunSpecs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs));
  }

  async doubleClickTestExecutionRunSpecs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), expected, timeoutMs);
  }

  async expectTestExecutionRunSpecsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), substring, timeoutMs);
  }

  async scrollTestExecutionRunSpecsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs));
  }

  async clickTestReportsHTMLReport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport));
  }

  async doubleClickTestReportsHTMLReport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), expected, timeoutMs);
  }

  async expectTestReportsHTMLReportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), substring, timeoutMs);
  }

  async scrollTestReportsHTMLReportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport));
  }

  async clickFrameworkZipFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.frameworkZipFiles));
  }

  async doubleClickFrameworkZipFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), expected, timeoutMs);
  }

  async expectFrameworkZipFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), substring, timeoutMs);
  }

  async scrollFrameworkZipFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.frameworkZipFiles));
  }

  async getInnerTextTestReports(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestReportsPage.L.testReports));
  }

  async expectTestReportsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.testReports), timeoutMs);
  }

  async expectTestReportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.testReports), timeoutMs);
  }

  async expectTestReportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.testReports), expected, timeoutMs);
  }

  async expectTestReportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.testReports), substring, timeoutMs);
  }

  async scrollTestReportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.testReports));
  }

  async getInnerTextHTMLReportsPassFailBreakdown(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown));
  }

  async expectHTMLReportsPassFailBreakdownVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), timeoutMs);
  }

  async expectHTMLReportsPassFailBreakdownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), timeoutMs);
  }

  async expectHTMLReportsPassFailBreakdownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), expected, timeoutMs);
  }

  async expectHTMLReportsPassFailBreakdownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), substring, timeoutMs);
  }

  async scrollHTMLReportsPassFailBreakdownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown));
  }

  async getInnerTextRunHistory(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestReportsPage.L.runHistory));
  }

  async expectRunHistoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.runHistory), timeoutMs);
  }

  async expectRunHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.runHistory), timeoutMs);
  }

  async expectRunHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.runHistory), expected, timeoutMs);
  }

  async expectRunHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.runHistory), substring, timeoutMs);
  }

  async scrollRunHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.runHistory));
  }

  async clickRefresh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.refresh));
  }

  async doubleClickRefresh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.refresh));
  }

  async expectRefreshVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.refresh), timeoutMs);
  }

  async expectRefreshHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.refresh), timeoutMs);
  }

  async expectRefreshEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.refresh), timeoutMs);
  }

  async expectRefreshDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.refresh), timeoutMs);
  }

  async expectRefreshText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.refresh), expected, timeoutMs);
  }

  async expectRefreshContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.refresh), substring, timeoutMs);
  }

  async scrollRefreshIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.refresh));
  }

  async getInnerTextNoRunsYetStart(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestReportsPage.L.noRunsYetStart));
  }

  async expectNoRunsYetStartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.noRunsYetStart), timeoutMs);
  }

  async expectNoRunsYetStartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.noRunsYetStart), timeoutMs);
  }

  async expectNoRunsYetStartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.noRunsYetStart), expected, timeoutMs);
  }

  async expectNoRunsYetStartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.noRunsYetStart), substring, timeoutMs);
  }

  async scrollNoRunsYetStartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.noRunsYetStart));
  }

  async getInnerTextSelectARunTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestReportsPage.L.selectARunTo));
  }

  async expectSelectARunToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.selectARunTo), timeoutMs);
  }

  async expectSelectARunToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.selectARunTo), timeoutMs);
  }

  async expectSelectARunToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.selectARunTo), expected, timeoutMs);
  }

  async expectSelectARunToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.selectARunTo), substring, timeoutMs);
  }

  async scrollSelectARunToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.selectARunTo));
  }

  async clickOpenProjectAssistant(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.openProjectAssistant));
  }

  async doubleClickOpenProjectAssistant(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.openProjectAssistant), expected, timeoutMs);
  }

  async expectOpenProjectAssistantContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.openProjectAssistant), substring, timeoutMs);
  }

  async scrollOpenProjectAssistantIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.openProjectAssistant));
  }

  async clickOpenNextJsDevTools(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.openNextJsDevTools));
  }

  async doubleClickOpenNextJsDevTools(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), expected, timeoutMs);
  }

  async expectOpenNextJsDevToolsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), substring, timeoutMs);
  }

  async scrollOpenNextJsDevToolsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestReportsPage.L.openNextJsDevTools));
  }


  async clickAUTOMATIONAIPROJECT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT));
  }

  async doubleClickAUTOMATIONAIPROJECT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT));
  }

  async longPressAUTOMATIONAIPROJECT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), value, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.aUTOMATIONAIPROJECT), count, timeoutMs);
  }

  async clickTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.test));
  }

  async doubleClickTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.test));
  }

  async longPressTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.test));
  }

  async expectTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.test), value, timeoutMs);
  }

  async expectTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.test), timeoutMs);
  }

  async expectTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.test), timeoutMs);
  }

  async expectTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.test), timeoutMs);
  }

  async expectTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.test), timeoutMs);
  }

  async expectTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.test), timeoutMs);
  }

  async expectTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.test), count, timeoutMs);
  }

  async clickCreated5272026121831PM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.created5272026121831PM));
  }

  async doubleClickCreated5272026121831PM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.created5272026121831PM));
  }

  async longPressCreated5272026121831PM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.created5272026121831PM), value, timeoutMs);
  }

  async expectCreated5272026121831PMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.created5272026121831PM), count, timeoutMs);
  }

  async longPressAllProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.allProjects));
  }

  async expectAllProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.allProjects), value, timeoutMs);
  }

  async expectAllProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.allProjects), count, timeoutMs);
  }

  async longPressDeleteProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.deleteProject));
  }

  async expectDeleteProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.deleteProject), value, timeoutMs);
  }

  async expectDeleteProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.deleteProject), count, timeoutMs);
  }

  async clickWORKSPACE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.wORKSPACE));
  }

  async doubleClickWORKSPACE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.wORKSPACE));
  }

  async longPressWORKSPACE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.wORKSPACE));
  }

  async expectWORKSPACEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.wORKSPACE), value, timeoutMs);
  }

  async expectWORKSPACEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.wORKSPACE), count, timeoutMs);
  }

  async clickAutomationAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.automationAI));
  }

  async doubleClickAutomationAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.automationAI));
  }

  async longPressAutomationAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.automationAI));
  }

  async expectAutomationAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.automationAI), value, timeoutMs);
  }

  async expectAutomationAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.automationAI), count, timeoutMs);
  }

  async longPressOverviewProjectSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), value, timeoutMs);
  }

  async expectOverviewProjectSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.overviewProjectSummary), count, timeoutMs);
  }

  async longPressSetup0APIKeys(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.setup0APIKeys), value, timeoutMs);
  }

  async expectSetup0APIKeysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.setup0APIKeys), count, timeoutMs);
  }

  async longPressRequirements0Write(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.requirements0Write));
  }

  async expectRequirements0WriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.requirements0Write), value, timeoutMs);
  }

  async expectRequirements0WriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.requirements0Write), count, timeoutMs);
  }

  async longPressRecorderBrowserDOMCapture(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), value, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.recorderBrowserDOMCapture), count, timeoutMs);
  }

  async longPressPageObjects0Browse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), value, timeoutMs);
  }

  async expectPageObjects0BrowseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.pageObjects0Browse), count, timeoutMs);
  }

  async longPressTestPlans0Review(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.testPlans0Review), value, timeoutMs);
  }

  async expectTestPlans0ReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.testPlans0Review), count, timeoutMs);
  }

  async longPressTestExecutionRunSpecs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), value, timeoutMs);
  }

  async expectTestExecutionRunSpecsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.testExecutionRunSpecs), count, timeoutMs);
  }

  async longPressTestReportsHTMLReport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), value, timeoutMs);
  }

  async expectTestReportsHTMLReportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.testReportsHTMLReport), count, timeoutMs);
  }

  async longPressFrameworkZipFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), value, timeoutMs);
  }

  async expectFrameworkZipFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.frameworkZipFiles), count, timeoutMs);
  }

  async clickTestReports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.testReports));
  }

  async doubleClickTestReports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.testReports));
  }

  async longPressTestReports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.testReports));
  }

  async expectTestReportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.testReports), value, timeoutMs);
  }

  async expectTestReportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.testReports), timeoutMs);
  }

  async expectTestReportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.testReports), timeoutMs);
  }

  async expectTestReportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.testReports), timeoutMs);
  }

  async expectTestReportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.testReports), timeoutMs);
  }

  async expectTestReportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.testReports), timeoutMs);
  }

  async expectTestReportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.testReports), count, timeoutMs);
  }

  async clickHTMLReportsPassFailBreakdown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown));
  }

  async doubleClickHTMLReportsPassFailBreakdown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown));
  }

  async longPressHTMLReportsPassFailBreakdown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown));
  }

  async expectHTMLReportsPassFailBreakdownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), value, timeoutMs);
  }

  async expectHTMLReportsPassFailBreakdownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), timeoutMs);
  }

  async expectHTMLReportsPassFailBreakdownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), timeoutMs);
  }

  async expectHTMLReportsPassFailBreakdownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), timeoutMs);
  }

  async expectHTMLReportsPassFailBreakdownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), timeoutMs);
  }

  async expectHTMLReportsPassFailBreakdownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), timeoutMs);
  }

  async expectHTMLReportsPassFailBreakdownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.hTMLReportsPassFailBreakdown), count, timeoutMs);
  }

  async clickRunHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.runHistory));
  }

  async doubleClickRunHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.runHistory));
  }

  async longPressRunHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.runHistory));
  }

  async expectRunHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.runHistory), value, timeoutMs);
  }

  async expectRunHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.runHistory), timeoutMs);
  }

  async expectRunHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.runHistory), timeoutMs);
  }

  async expectRunHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.runHistory), timeoutMs);
  }

  async expectRunHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.runHistory), timeoutMs);
  }

  async expectRunHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.runHistory), timeoutMs);
  }

  async expectRunHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.runHistory), count, timeoutMs);
  }

  async longPressRefresh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.refresh));
  }

  async expectRefreshValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.refresh), value, timeoutMs);
  }

  async expectRefreshChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.refresh), timeoutMs);
  }

  async expectRefreshUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.refresh), timeoutMs);
  }

  async expectRefreshFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.refresh), timeoutMs);
  }

  async expectRefreshCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.refresh), count, timeoutMs);
  }

  async clickNoRunsYetStart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.noRunsYetStart));
  }

  async doubleClickNoRunsYetStart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.noRunsYetStart));
  }

  async longPressNoRunsYetStart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.noRunsYetStart));
  }

  async expectNoRunsYetStartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.noRunsYetStart), value, timeoutMs);
  }

  async expectNoRunsYetStartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.noRunsYetStart), timeoutMs);
  }

  async expectNoRunsYetStartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.noRunsYetStart), timeoutMs);
  }

  async expectNoRunsYetStartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.noRunsYetStart), timeoutMs);
  }

  async expectNoRunsYetStartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.noRunsYetStart), timeoutMs);
  }

  async expectNoRunsYetStartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.noRunsYetStart), timeoutMs);
  }

  async expectNoRunsYetStartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.noRunsYetStart), count, timeoutMs);
  }

  async clickSelectARunTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestReportsPage.L.selectARunTo));
  }

  async doubleClickSelectARunTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestReportsPage.L.selectARunTo));
  }

  async longPressSelectARunTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.selectARunTo));
  }

  async expectSelectARunToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.selectARunTo), value, timeoutMs);
  }

  async expectSelectARunToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestReportsPage.L.selectARunTo), timeoutMs);
  }

  async expectSelectARunToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestReportsPage.L.selectARunTo), timeoutMs);
  }

  async expectSelectARunToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.selectARunTo), timeoutMs);
  }

  async expectSelectARunToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.selectARunTo), timeoutMs);
  }

  async expectSelectARunToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.selectARunTo), timeoutMs);
  }

  async expectSelectARunToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.selectARunTo), count, timeoutMs);
  }

  async longPressOpenProjectAssistant(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.openProjectAssistant), value, timeoutMs);
  }

  async expectOpenProjectAssistantChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.openProjectAssistant), count, timeoutMs);
  }

  async longPressOpenNextJsDevTools(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestReportsPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), value, timeoutMs);
  }

  async expectOpenNextJsDevToolsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestReportsPage.L.openNextJsDevTools), count, timeoutMs);
  }

}
