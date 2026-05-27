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

export class TestExecutionPage {
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
    testExecution: { strategy: 'text' as const, value: 'Test execution', actionKind: 'text' as const },
    selectSpecsAndStream: { strategy: 'text' as const, value: 'Select specs and stream live CLI output here. When', actionKind: 'text' as const },
    providerLocalDevice: { strategy: 'text' as const, value: 'Provider: Local device / simulator', actionKind: 'text' as const },
    localDeviceSimulator: { strategy: 'text' as const, value: 'Local device / simulator', actionKind: 'text' as const },
    specFiles: { strategy: 'text' as const, value: 'Spec files', actionKind: 'text' as const },
    refreshList: { strategy: 'testId' as const, value: 'execution-refresh-specs-btn', actionKind: 'button' as const },
    noSpecFilesIn: { strategy: 'text' as const, value: 'No spec files in frameworks/…/tests/ yet. Generate', actionKind: 'text' as const },
    defaultFromPlaywrightConfigTs: { strategy: 'testId' as const, value: 'execution-environment-select', actionKind: 'combobox' as const },
    executionGrep: { strategy: 'testId' as const, value: 'execution-grep-input', actionKind: 'textbox' as const },
    runOnLocalDevice: { strategy: 'testId' as const, value: 'execution-run-btn', actionKind: 'button' as const },
    liveLog: { strategy: 'text' as const, value: 'Live log', actionKind: 'text' as const },
    startARunTo: { strategy: 'text' as const, value: 'Start a run to stream output here.', actionKind: 'text' as const },
    openProjectAssistant: { strategy: 'testId' as const, value: 'chat-toggle-btn', actionKind: 'button' as const },
    openNextJsDevTools: { strategy: 'css' as const, value: '#next-logo', shadowHost: 'nextjs-portal', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAUTOMATIONAIPROJECT(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), expected, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), substring, timeoutMs);
  }

  async scrollAUTOMATIONAIPROJECTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT));
  }

  async getInnerTextTest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.test));
  }

  async expectTestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.test), timeoutMs);
  }

  async expectTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.test), timeoutMs);
  }

  async expectTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.test), expected, timeoutMs);
  }

  async expectTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.test), substring, timeoutMs);
  }

  async scrollTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.test));
  }

  async getInnerTextCreated5272026121831PM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), expected, timeoutMs);
  }

  async expectCreated5272026121831PMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), substring, timeoutMs);
  }

  async scrollCreated5272026121831PMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.created5272026121831PM));
  }

  async clickAllProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.allProjects));
  }

  async doubleClickAllProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.allProjects));
  }

  async expectAllProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.allProjects), expected, timeoutMs);
  }

  async expectAllProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.allProjects), substring, timeoutMs);
  }

  async scrollAllProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.allProjects));
  }

  async clickDeleteProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.deleteProject));
  }

  async doubleClickDeleteProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.deleteProject));
  }

  async expectDeleteProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.deleteProject), expected, timeoutMs);
  }

  async expectDeleteProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.deleteProject), substring, timeoutMs);
  }

  async scrollDeleteProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.deleteProject));
  }

  async getInnerTextWORKSPACE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.wORKSPACE));
  }

  async expectWORKSPACEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.wORKSPACE), expected, timeoutMs);
  }

  async expectWORKSPACEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.wORKSPACE), substring, timeoutMs);
  }

  async scrollWORKSPACEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.wORKSPACE));
  }

  async getInnerTextAutomationAI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.automationAI));
  }

  async expectAutomationAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.automationAI), expected, timeoutMs);
  }

  async expectAutomationAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.automationAI), substring, timeoutMs);
  }

  async scrollAutomationAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.automationAI));
  }

  async clickOverviewProjectSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary));
  }

  async doubleClickOverviewProjectSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), expected, timeoutMs);
  }

  async expectOverviewProjectSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), substring, timeoutMs);
  }

  async scrollOverviewProjectSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary));
  }

  async clickSetup0APIKeys(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.setup0APIKeys));
  }

  async doubleClickSetup0APIKeys(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), expected, timeoutMs);
  }

  async expectSetup0APIKeysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), substring, timeoutMs);
  }

  async scrollSetup0APIKeysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.setup0APIKeys));
  }

  async clickRequirements0Write(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.requirements0Write));
  }

  async doubleClickRequirements0Write(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.requirements0Write));
  }

  async expectRequirements0WriteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.requirements0Write), expected, timeoutMs);
  }

  async expectRequirements0WriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.requirements0Write), substring, timeoutMs);
  }

  async scrollRequirements0WriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.requirements0Write));
  }

  async clickRecorderBrowserDOMCapture(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture));
  }

  async doubleClickRecorderBrowserDOMCapture(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), expected, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), substring, timeoutMs);
  }

  async scrollRecorderBrowserDOMCaptureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture));
  }

  async clickPageObjects0Browse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse));
  }

  async doubleClickPageObjects0Browse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), expected, timeoutMs);
  }

  async expectPageObjects0BrowseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), substring, timeoutMs);
  }

  async scrollPageObjects0BrowseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse));
  }

  async clickTestPlans0Review(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.testPlans0Review));
  }

  async doubleClickTestPlans0Review(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.testPlans0Review), expected, timeoutMs);
  }

  async expectTestPlans0ReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.testPlans0Review), substring, timeoutMs);
  }

  async scrollTestPlans0ReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.testPlans0Review));
  }

  async clickTestExecutionRunSpecs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs));
  }

  async doubleClickTestExecutionRunSpecs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), expected, timeoutMs);
  }

  async expectTestExecutionRunSpecsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), substring, timeoutMs);
  }

  async scrollTestExecutionRunSpecsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs));
  }

  async clickTestReportsHTMLReport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport));
  }

  async doubleClickTestReportsHTMLReport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), expected, timeoutMs);
  }

  async expectTestReportsHTMLReportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), substring, timeoutMs);
  }

  async scrollTestReportsHTMLReportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport));
  }

  async clickFrameworkZipFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles));
  }

  async doubleClickFrameworkZipFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), expected, timeoutMs);
  }

  async expectFrameworkZipFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), substring, timeoutMs);
  }

  async scrollFrameworkZipFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles));
  }

  async getInnerTextTestExecution(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.testExecution));
  }

  async expectTestExecutionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.testExecution), timeoutMs);
  }

  async expectTestExecutionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.testExecution), timeoutMs);
  }

  async expectTestExecutionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.testExecution), expected, timeoutMs);
  }

  async expectTestExecutionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.testExecution), substring, timeoutMs);
  }

  async scrollTestExecutionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.testExecution));
  }

  async getInnerTextSelectSpecsAndStream(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream));
  }

  async expectSelectSpecsAndStreamVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), timeoutMs);
  }

  async expectSelectSpecsAndStreamHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), timeoutMs);
  }

  async expectSelectSpecsAndStreamText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), expected, timeoutMs);
  }

  async expectSelectSpecsAndStreamContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), substring, timeoutMs);
  }

  async scrollSelectSpecsAndStreamIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream));
  }

  async getInnerTextProviderLocalDevice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.providerLocalDevice));
  }

  async expectProviderLocalDeviceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), timeoutMs);
  }

  async expectProviderLocalDeviceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), timeoutMs);
  }

  async expectProviderLocalDeviceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), expected, timeoutMs);
  }

  async expectProviderLocalDeviceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), substring, timeoutMs);
  }

  async scrollProviderLocalDeviceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.providerLocalDevice));
  }

  async getInnerTextLocalDeviceSimulator(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator));
  }

  async expectLocalDeviceSimulatorVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), timeoutMs);
  }

  async expectLocalDeviceSimulatorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), timeoutMs);
  }

  async expectLocalDeviceSimulatorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), expected, timeoutMs);
  }

  async expectLocalDeviceSimulatorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), substring, timeoutMs);
  }

  async scrollLocalDeviceSimulatorIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator));
  }

  async getInnerTextSpecFiles(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.specFiles));
  }

  async expectSpecFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.specFiles), timeoutMs);
  }

  async expectSpecFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.specFiles), timeoutMs);
  }

  async expectSpecFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.specFiles), expected, timeoutMs);
  }

  async expectSpecFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.specFiles), substring, timeoutMs);
  }

  async scrollSpecFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.specFiles));
  }

  async clickRefreshList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.refreshList));
  }

  async doubleClickRefreshList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.refreshList));
  }

  async expectRefreshListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.refreshList), timeoutMs);
  }

  async expectRefreshListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.refreshList), timeoutMs);
  }

  async expectRefreshListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.refreshList), timeoutMs);
  }

  async expectRefreshListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.refreshList), timeoutMs);
  }

  async expectRefreshListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.refreshList), expected, timeoutMs);
  }

  async expectRefreshListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.refreshList), substring, timeoutMs);
  }

  async scrollRefreshListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.refreshList));
  }

  async getInnerTextNoSpecFilesIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn));
  }

  async expectNoSpecFilesInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), timeoutMs);
  }

  async expectNoSpecFilesInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), timeoutMs);
  }

  async expectNoSpecFilesInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), expected, timeoutMs);
  }

  async expectNoSpecFilesInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), substring, timeoutMs);
  }

  async scrollNoSpecFilesInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn));
  }

  async selectDefaultFromPlaywrightConfigTs(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), value);
  }

  async expectDefaultFromPlaywrightConfigTsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), timeoutMs);
  }

  async expectDefaultFromPlaywrightConfigTsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), timeoutMs);
  }

  async expectDefaultFromPlaywrightConfigTsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), timeoutMs);
  }

  async expectDefaultFromPlaywrightConfigTsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), timeoutMs);
  }

  async expectDefaultFromPlaywrightConfigTsValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), expected, timeoutMs);
  }

  async expectDefaultFromPlaywrightConfigTsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), timeoutMs);
  }

  async scrollDefaultFromPlaywrightConfigTsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs));
  }

  async fillExecutionGrep(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, TestExecutionPage.L.executionGrep), value);
  }

  async clearExecutionGrep(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, TestExecutionPage.L.executionGrep));
  }

  async typeTextExecutionGrep(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, TestExecutionPage.L.executionGrep), value);
  }

  async expectExecutionGrepVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.executionGrep), timeoutMs);
  }

  async expectExecutionGrepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.executionGrep), timeoutMs);
  }

  async expectExecutionGrepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.executionGrep), timeoutMs);
  }

  async expectExecutionGrepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.executionGrep), timeoutMs);
  }

  async expectExecutionGrepValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.executionGrep), expected, timeoutMs);
  }

  async expectExecutionGrepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.executionGrep), timeoutMs);
  }

  async scrollExecutionGrepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.executionGrep));
  }

  async clickRunOnLocalDevice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice));
  }

  async doubleClickRunOnLocalDevice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice));
  }

  async expectRunOnLocalDeviceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), timeoutMs);
  }

  async expectRunOnLocalDeviceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), timeoutMs);
  }

  async expectRunOnLocalDeviceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), timeoutMs);
  }

  async expectRunOnLocalDeviceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), timeoutMs);
  }

  async expectRunOnLocalDeviceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), expected, timeoutMs);
  }

  async expectRunOnLocalDeviceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), substring, timeoutMs);
  }

  async scrollRunOnLocalDeviceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice));
  }

  async getInnerTextLiveLog(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.liveLog));
  }

  async expectLiveLogVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.liveLog), timeoutMs);
  }

  async expectLiveLogHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.liveLog), timeoutMs);
  }

  async expectLiveLogText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.liveLog), expected, timeoutMs);
  }

  async expectLiveLogContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.liveLog), substring, timeoutMs);
  }

  async scrollLiveLogIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.liveLog));
  }

  async getInnerTextStartARunTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TestExecutionPage.L.startARunTo));
  }

  async expectStartARunToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.startARunTo), timeoutMs);
  }

  async expectStartARunToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.startARunTo), timeoutMs);
  }

  async expectStartARunToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.startARunTo), expected, timeoutMs);
  }

  async expectStartARunToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.startARunTo), substring, timeoutMs);
  }

  async scrollStartARunToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.startARunTo));
  }

  async clickOpenProjectAssistant(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.openProjectAssistant));
  }

  async doubleClickOpenProjectAssistant(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), expected, timeoutMs);
  }

  async expectOpenProjectAssistantContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), substring, timeoutMs);
  }

  async scrollOpenProjectAssistantIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.openProjectAssistant));
  }

  async clickOpenNextJsDevTools(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools));
  }

  async doubleClickOpenNextJsDevTools(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), expected, timeoutMs);
  }

  async expectOpenNextJsDevToolsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), substring, timeoutMs);
  }

  async scrollOpenNextJsDevToolsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools));
  }


  async clickAUTOMATIONAIPROJECT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT));
  }

  async doubleClickAUTOMATIONAIPROJECT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT));
  }

  async longPressAUTOMATIONAIPROJECT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), value, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.aUTOMATIONAIPROJECT), count, timeoutMs);
  }

  async clickTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.test));
  }

  async doubleClickTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.test));
  }

  async longPressTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.test));
  }

  async expectTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.test), value, timeoutMs);
  }

  async expectTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.test), timeoutMs);
  }

  async expectTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.test), timeoutMs);
  }

  async expectTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.test), timeoutMs);
  }

  async expectTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.test), timeoutMs);
  }

  async expectTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.test), timeoutMs);
  }

  async expectTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.test), count, timeoutMs);
  }

  async clickCreated5272026121831PM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.created5272026121831PM));
  }

  async doubleClickCreated5272026121831PM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.created5272026121831PM));
  }

  async longPressCreated5272026121831PM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), value, timeoutMs);
  }

  async expectCreated5272026121831PMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.created5272026121831PM), count, timeoutMs);
  }

  async longPressAllProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.allProjects));
  }

  async expectAllProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.allProjects), value, timeoutMs);
  }

  async expectAllProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.allProjects), count, timeoutMs);
  }

  async longPressDeleteProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.deleteProject));
  }

  async expectDeleteProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.deleteProject), value, timeoutMs);
  }

  async expectDeleteProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.deleteProject), count, timeoutMs);
  }

  async clickWORKSPACE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.wORKSPACE));
  }

  async doubleClickWORKSPACE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.wORKSPACE));
  }

  async longPressWORKSPACE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.wORKSPACE));
  }

  async expectWORKSPACEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.wORKSPACE), value, timeoutMs);
  }

  async expectWORKSPACEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.wORKSPACE), count, timeoutMs);
  }

  async clickAutomationAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.automationAI));
  }

  async doubleClickAutomationAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.automationAI));
  }

  async longPressAutomationAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.automationAI));
  }

  async expectAutomationAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.automationAI), value, timeoutMs);
  }

  async expectAutomationAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.automationAI), count, timeoutMs);
  }

  async longPressOverviewProjectSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), value, timeoutMs);
  }

  async expectOverviewProjectSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.overviewProjectSummary), count, timeoutMs);
  }

  async longPressSetup0APIKeys(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), value, timeoutMs);
  }

  async expectSetup0APIKeysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.setup0APIKeys), count, timeoutMs);
  }

  async longPressRequirements0Write(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.requirements0Write));
  }

  async expectRequirements0WriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.requirements0Write), value, timeoutMs);
  }

  async expectRequirements0WriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.requirements0Write), count, timeoutMs);
  }

  async longPressRecorderBrowserDOMCapture(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), value, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.recorderBrowserDOMCapture), count, timeoutMs);
  }

  async longPressPageObjects0Browse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), value, timeoutMs);
  }

  async expectPageObjects0BrowseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.pageObjects0Browse), count, timeoutMs);
  }

  async longPressTestPlans0Review(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.testPlans0Review), value, timeoutMs);
  }

  async expectTestPlans0ReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.testPlans0Review), count, timeoutMs);
  }

  async longPressTestExecutionRunSpecs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), value, timeoutMs);
  }

  async expectTestExecutionRunSpecsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.testExecutionRunSpecs), count, timeoutMs);
  }

  async longPressTestReportsHTMLReport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), value, timeoutMs);
  }

  async expectTestReportsHTMLReportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.testReportsHTMLReport), count, timeoutMs);
  }

  async longPressFrameworkZipFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), value, timeoutMs);
  }

  async expectFrameworkZipFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.frameworkZipFiles), count, timeoutMs);
  }

  async clickTestExecution(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.testExecution));
  }

  async doubleClickTestExecution(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.testExecution));
  }

  async longPressTestExecution(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.testExecution));
  }

  async expectTestExecutionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.testExecution), value, timeoutMs);
  }

  async expectTestExecutionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.testExecution), timeoutMs);
  }

  async expectTestExecutionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.testExecution), timeoutMs);
  }

  async expectTestExecutionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.testExecution), timeoutMs);
  }

  async expectTestExecutionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.testExecution), timeoutMs);
  }

  async expectTestExecutionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.testExecution), timeoutMs);
  }

  async expectTestExecutionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.testExecution), count, timeoutMs);
  }

  async clickSelectSpecsAndStream(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream));
  }

  async doubleClickSelectSpecsAndStream(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream));
  }

  async longPressSelectSpecsAndStream(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream));
  }

  async expectSelectSpecsAndStreamValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), value, timeoutMs);
  }

  async expectSelectSpecsAndStreamEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), timeoutMs);
  }

  async expectSelectSpecsAndStreamDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), timeoutMs);
  }

  async expectSelectSpecsAndStreamChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), timeoutMs);
  }

  async expectSelectSpecsAndStreamUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), timeoutMs);
  }

  async expectSelectSpecsAndStreamFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), timeoutMs);
  }

  async expectSelectSpecsAndStreamCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.selectSpecsAndStream), count, timeoutMs);
  }

  async clickProviderLocalDevice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.providerLocalDevice));
  }

  async doubleClickProviderLocalDevice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.providerLocalDevice));
  }

  async longPressProviderLocalDevice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.providerLocalDevice));
  }

  async expectProviderLocalDeviceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), value, timeoutMs);
  }

  async expectProviderLocalDeviceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), timeoutMs);
  }

  async expectProviderLocalDeviceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), timeoutMs);
  }

  async expectProviderLocalDeviceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), timeoutMs);
  }

  async expectProviderLocalDeviceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), timeoutMs);
  }

  async expectProviderLocalDeviceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), timeoutMs);
  }

  async expectProviderLocalDeviceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.providerLocalDevice), count, timeoutMs);
  }

  async clickLocalDeviceSimulator(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator));
  }

  async doubleClickLocalDeviceSimulator(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator));
  }

  async longPressLocalDeviceSimulator(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator));
  }

  async expectLocalDeviceSimulatorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), value, timeoutMs);
  }

  async expectLocalDeviceSimulatorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), timeoutMs);
  }

  async expectLocalDeviceSimulatorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), timeoutMs);
  }

  async expectLocalDeviceSimulatorChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), timeoutMs);
  }

  async expectLocalDeviceSimulatorUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), timeoutMs);
  }

  async expectLocalDeviceSimulatorFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), timeoutMs);
  }

  async expectLocalDeviceSimulatorCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.localDeviceSimulator), count, timeoutMs);
  }

  async clickSpecFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.specFiles));
  }

  async doubleClickSpecFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.specFiles));
  }

  async longPressSpecFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.specFiles));
  }

  async expectSpecFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.specFiles), value, timeoutMs);
  }

  async expectSpecFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.specFiles), timeoutMs);
  }

  async expectSpecFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.specFiles), timeoutMs);
  }

  async expectSpecFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.specFiles), timeoutMs);
  }

  async expectSpecFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.specFiles), timeoutMs);
  }

  async expectSpecFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.specFiles), timeoutMs);
  }

  async expectSpecFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.specFiles), count, timeoutMs);
  }

  async longPressRefreshList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.refreshList));
  }

  async expectRefreshListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.refreshList), value, timeoutMs);
  }

  async expectRefreshListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.refreshList), timeoutMs);
  }

  async expectRefreshListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.refreshList), timeoutMs);
  }

  async expectRefreshListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.refreshList), timeoutMs);
  }

  async expectRefreshListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.refreshList), count, timeoutMs);
  }

  async clickNoSpecFilesIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn));
  }

  async doubleClickNoSpecFilesIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn));
  }

  async longPressNoSpecFilesIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn));
  }

  async expectNoSpecFilesInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), value, timeoutMs);
  }

  async expectNoSpecFilesInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), timeoutMs);
  }

  async expectNoSpecFilesInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), timeoutMs);
  }

  async expectNoSpecFilesInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), timeoutMs);
  }

  async expectNoSpecFilesInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), timeoutMs);
  }

  async expectNoSpecFilesInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), timeoutMs);
  }

  async expectNoSpecFilesInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.noSpecFilesIn), count, timeoutMs);
  }

  async expectDefaultFromPlaywrightConfigTsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), expected, timeoutMs);
  }

  async expectDefaultFromPlaywrightConfigTsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), substring, timeoutMs);
  }

  async expectDefaultFromPlaywrightConfigTsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), timeoutMs);
  }

  async expectDefaultFromPlaywrightConfigTsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), timeoutMs);
  }

  async expectDefaultFromPlaywrightConfigTsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.defaultFromPlaywrightConfigTs), count, timeoutMs);
  }

  async expectExecutionGrepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TestExecutionPage.L.executionGrep), expected, timeoutMs);
  }

  async expectExecutionGrepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TestExecutionPage.L.executionGrep), substring, timeoutMs);
  }

  async expectExecutionGrepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.executionGrep), timeoutMs);
  }

  async expectExecutionGrepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.executionGrep), timeoutMs);
  }

  async expectExecutionGrepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.executionGrep), count, timeoutMs);
  }

  async longPressRunOnLocalDevice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice));
  }

  async expectRunOnLocalDeviceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), value, timeoutMs);
  }

  async expectRunOnLocalDeviceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), timeoutMs);
  }

  async expectRunOnLocalDeviceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), timeoutMs);
  }

  async expectRunOnLocalDeviceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), timeoutMs);
  }

  async expectRunOnLocalDeviceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.runOnLocalDevice), count, timeoutMs);
  }

  async clickLiveLog(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.liveLog));
  }

  async doubleClickLiveLog(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.liveLog));
  }

  async longPressLiveLog(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.liveLog));
  }

  async expectLiveLogValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.liveLog), value, timeoutMs);
  }

  async expectLiveLogEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.liveLog), timeoutMs);
  }

  async expectLiveLogDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.liveLog), timeoutMs);
  }

  async expectLiveLogChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.liveLog), timeoutMs);
  }

  async expectLiveLogUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.liveLog), timeoutMs);
  }

  async expectLiveLogFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.liveLog), timeoutMs);
  }

  async expectLiveLogCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.liveLog), count, timeoutMs);
  }

  async clickStartARunTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TestExecutionPage.L.startARunTo));
  }

  async doubleClickStartARunTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TestExecutionPage.L.startARunTo));
  }

  async longPressStartARunTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.startARunTo));
  }

  async expectStartARunToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.startARunTo), value, timeoutMs);
  }

  async expectStartARunToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TestExecutionPage.L.startARunTo), timeoutMs);
  }

  async expectStartARunToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TestExecutionPage.L.startARunTo), timeoutMs);
  }

  async expectStartARunToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.startARunTo), timeoutMs);
  }

  async expectStartARunToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.startARunTo), timeoutMs);
  }

  async expectStartARunToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.startARunTo), timeoutMs);
  }

  async expectStartARunToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.startARunTo), count, timeoutMs);
  }

  async longPressOpenProjectAssistant(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), value, timeoutMs);
  }

  async expectOpenProjectAssistantChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.openProjectAssistant), count, timeoutMs);
  }

  async longPressOpenNextJsDevTools(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), value, timeoutMs);
  }

  async expectOpenNextJsDevToolsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TestExecutionPage.L.openNextJsDevTools), count, timeoutMs);
  }

}
