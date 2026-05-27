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

export class OverviewPage {
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
    overview: { strategy: 'text' as const, value: 'Overview', actionKind: 'text' as const },
    quickSnapshotOfThis: { strategy: 'text' as const, value: 'Quick snapshot of this project workspace.', actionKind: 'text' as const },
    eNVIRONMENTS0: { strategy: 'testId' as const, value: 'overview-setup-metric-btn', actionKind: 'button' as const },
    rEQUIREMENTS0: { strategy: 'testId' as const, value: 'overview-requirements-metric-btn', actionKind: 'button' as const },
    tESTPLANS0: { strategy: 'testId' as const, value: 'overview-test-plans-metric-btn', actionKind: 'button' as const },
    pAGEOBJECTS0: { strategy: 'testId' as const, value: 'overview-generate-pom-metric-btn', actionKind: 'button' as const },
    tESTCASES0: { strategy: 'testId' as const, value: 'overview-test-plans-metric-btn', actionKind: 'button' as const },
    configureProjectOpenAIKey: { strategy: 'testId' as const, value: 'overview-shortcut-setup-btn', actionKind: 'button' as const },
    writeRequirementsPasteAcceptance: { strategy: 'testId' as const, value: 'overview-shortcut-requirements-btn', actionKind: 'button' as const },
    recorderMobileDeviceAccessibility: { strategy: 'testId' as const, value: 'overview-shortcut-recorder-btn', actionKind: 'button' as const },
    pageObjectsBrowseAnd: { strategy: 'testId' as const, value: 'overview-shortcut-generate-pom-btn', actionKind: 'button' as const },
    testPlanLibraryReview: { strategy: 'testId' as const, value: 'overview-shortcut-test-plans-btn', actionKind: 'button' as const },
    runTestsSelectSpecs: { strategy: 'testId' as const, value: 'overview-shortcut-test-execution-btn', actionKind: 'button' as const },
    testReportsHTMLReports: { strategy: 'testId' as const, value: 'overview-shortcut-test-reports-btn', actionKind: 'button' as const },
    viewFrameworkFilesInspect: { strategy: 'testId' as const, value: 'overview-shortcut-framework-btn', actionKind: 'button' as const },
    openProjectAssistant: { strategy: 'testId' as const, value: 'chat-toggle-btn', actionKind: 'button' as const },
    openNextJsDevTools: { strategy: 'css' as const, value: '#next-logo', shadowHost: 'nextjs-portal', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAUTOMATIONAIPROJECT(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), expected, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), substring, timeoutMs);
  }

  async scrollAUTOMATIONAIPROJECTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT));
  }

  async getInnerTextTest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.test));
  }

  async expectTestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.test), timeoutMs);
  }

  async expectTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.test), timeoutMs);
  }

  async expectTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.test), expected, timeoutMs);
  }

  async expectTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.test), substring, timeoutMs);
  }

  async scrollTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.test));
  }

  async getInnerTextCreated5272026121831PM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.created5272026121831PM), expected, timeoutMs);
  }

  async expectCreated5272026121831PMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.created5272026121831PM), substring, timeoutMs);
  }

  async scrollCreated5272026121831PMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.created5272026121831PM));
  }

  async clickAllProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.allProjects));
  }

  async doubleClickAllProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.allProjects));
  }

  async expectAllProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.allProjects), expected, timeoutMs);
  }

  async expectAllProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.allProjects), substring, timeoutMs);
  }

  async scrollAllProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.allProjects));
  }

  async clickDeleteProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.deleteProject));
  }

  async doubleClickDeleteProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.deleteProject));
  }

  async expectDeleteProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.deleteProject), expected, timeoutMs);
  }

  async expectDeleteProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.deleteProject), substring, timeoutMs);
  }

  async scrollDeleteProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.deleteProject));
  }

  async getInnerTextWORKSPACE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.wORKSPACE));
  }

  async expectWORKSPACEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.wORKSPACE), expected, timeoutMs);
  }

  async expectWORKSPACEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.wORKSPACE), substring, timeoutMs);
  }

  async scrollWORKSPACEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.wORKSPACE));
  }

  async getInnerTextAutomationAI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.automationAI));
  }

  async expectAutomationAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.automationAI), expected, timeoutMs);
  }

  async expectAutomationAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.automationAI), substring, timeoutMs);
  }

  async scrollAutomationAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.automationAI));
  }

  async clickOverviewProjectSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.overviewProjectSummary));
  }

  async doubleClickOverviewProjectSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.overviewProjectSummary), expected, timeoutMs);
  }

  async expectOverviewProjectSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.overviewProjectSummary), substring, timeoutMs);
  }

  async scrollOverviewProjectSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.overviewProjectSummary));
  }

  async clickSetup0APIKeys(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.setup0APIKeys));
  }

  async doubleClickSetup0APIKeys(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.setup0APIKeys), expected, timeoutMs);
  }

  async expectSetup0APIKeysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.setup0APIKeys), substring, timeoutMs);
  }

  async scrollSetup0APIKeysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.setup0APIKeys));
  }

  async clickRequirements0Write(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.requirements0Write));
  }

  async doubleClickRequirements0Write(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.requirements0Write));
  }

  async expectRequirements0WriteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.requirements0Write), expected, timeoutMs);
  }

  async expectRequirements0WriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.requirements0Write), substring, timeoutMs);
  }

  async scrollRequirements0WriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.requirements0Write));
  }

  async clickRecorderBrowserDOMCapture(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture));
  }

  async doubleClickRecorderBrowserDOMCapture(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), expected, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), substring, timeoutMs);
  }

  async scrollRecorderBrowserDOMCaptureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture));
  }

  async clickPageObjects0Browse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.pageObjects0Browse));
  }

  async doubleClickPageObjects0Browse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.pageObjects0Browse), expected, timeoutMs);
  }

  async expectPageObjects0BrowseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.pageObjects0Browse), substring, timeoutMs);
  }

  async scrollPageObjects0BrowseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.pageObjects0Browse));
  }

  async clickTestPlans0Review(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.testPlans0Review));
  }

  async doubleClickTestPlans0Review(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.testPlans0Review), expected, timeoutMs);
  }

  async expectTestPlans0ReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.testPlans0Review), substring, timeoutMs);
  }

  async scrollTestPlans0ReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.testPlans0Review));
  }

  async clickTestExecutionRunSpecs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs));
  }

  async doubleClickTestExecutionRunSpecs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), expected, timeoutMs);
  }

  async expectTestExecutionRunSpecsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), substring, timeoutMs);
  }

  async scrollTestExecutionRunSpecsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs));
  }

  async clickTestReportsHTMLReport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.testReportsHTMLReport));
  }

  async doubleClickTestReportsHTMLReport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), expected, timeoutMs);
  }

  async expectTestReportsHTMLReportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), substring, timeoutMs);
  }

  async scrollTestReportsHTMLReportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.testReportsHTMLReport));
  }

  async clickFrameworkZipFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.frameworkZipFiles));
  }

  async doubleClickFrameworkZipFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.frameworkZipFiles), expected, timeoutMs);
  }

  async expectFrameworkZipFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.frameworkZipFiles), substring, timeoutMs);
  }

  async scrollFrameworkZipFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.frameworkZipFiles));
  }

  async getInnerTextOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.overview));
  }

  async expectOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.overview), timeoutMs);
  }

  async expectOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.overview), timeoutMs);
  }

  async expectOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.overview), expected, timeoutMs);
  }

  async expectOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.overview), substring, timeoutMs);
  }

  async scrollOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.overview));
  }

  async getInnerTextQuickSnapshotOfThis(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis));
  }

  async expectQuickSnapshotOfThisVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), timeoutMs);
  }

  async expectQuickSnapshotOfThisHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), timeoutMs);
  }

  async expectQuickSnapshotOfThisText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), expected, timeoutMs);
  }

  async expectQuickSnapshotOfThisContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), substring, timeoutMs);
  }

  async scrollQuickSnapshotOfThisIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis));
  }

  async clickENVIRONMENTS0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0));
  }

  async doubleClickENVIRONMENTS0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0));
  }

  async expectENVIRONMENTS0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), timeoutMs);
  }

  async expectENVIRONMENTS0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), timeoutMs);
  }

  async expectENVIRONMENTS0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), timeoutMs);
  }

  async expectENVIRONMENTS0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), timeoutMs);
  }

  async expectENVIRONMENTS0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), expected, timeoutMs);
  }

  async expectENVIRONMENTS0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), substring, timeoutMs);
  }

  async scrollENVIRONMENTS0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0));
  }

  async clickREQUIREMENTS0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0));
  }

  async doubleClickREQUIREMENTS0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0));
  }

  async expectREQUIREMENTS0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), timeoutMs);
  }

  async expectREQUIREMENTS0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), timeoutMs);
  }

  async expectREQUIREMENTS0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), timeoutMs);
  }

  async expectREQUIREMENTS0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), timeoutMs);
  }

  async expectREQUIREMENTS0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), expected, timeoutMs);
  }

  async expectREQUIREMENTS0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), substring, timeoutMs);
  }

  async scrollREQUIREMENTS0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0));
  }

  async clickTESTPLANS0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.tESTPLANS0));
  }

  async doubleClickTESTPLANS0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.tESTPLANS0));
  }

  async expectTESTPLANS0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.tESTPLANS0), timeoutMs);
  }

  async expectTESTPLANS0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.tESTPLANS0), timeoutMs);
  }

  async expectTESTPLANS0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.tESTPLANS0), timeoutMs);
  }

  async expectTESTPLANS0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.tESTPLANS0), timeoutMs);
  }

  async expectTESTPLANS0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.tESTPLANS0), expected, timeoutMs);
  }

  async expectTESTPLANS0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.tESTPLANS0), substring, timeoutMs);
  }

  async scrollTESTPLANS0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.tESTPLANS0));
  }

  async clickPAGEOBJECTS0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0));
  }

  async doubleClickPAGEOBJECTS0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0));
  }

  async expectPAGEOBJECTS0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), timeoutMs);
  }

  async expectPAGEOBJECTS0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), timeoutMs);
  }

  async expectPAGEOBJECTS0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), timeoutMs);
  }

  async expectPAGEOBJECTS0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), timeoutMs);
  }

  async expectPAGEOBJECTS0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), expected, timeoutMs);
  }

  async expectPAGEOBJECTS0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), substring, timeoutMs);
  }

  async scrollPAGEOBJECTS0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0));
  }

  async clickTESTCASES0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.tESTCASES0));
  }

  async doubleClickTESTCASES0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.tESTCASES0));
  }

  async expectTESTCASES0Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.tESTCASES0), timeoutMs);
  }

  async expectTESTCASES0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.tESTCASES0), timeoutMs);
  }

  async expectTESTCASES0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.tESTCASES0), timeoutMs);
  }

  async expectTESTCASES0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.tESTCASES0), timeoutMs);
  }

  async expectTESTCASES0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.tESTCASES0), expected, timeoutMs);
  }

  async expectTESTCASES0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.tESTCASES0), substring, timeoutMs);
  }

  async scrollTESTCASES0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.tESTCASES0));
  }

  async clickConfigureProjectOpenAIKey(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey));
  }

  async doubleClickConfigureProjectOpenAIKey(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey));
  }

  async expectConfigureProjectOpenAIKeyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), timeoutMs);
  }

  async expectConfigureProjectOpenAIKeyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), timeoutMs);
  }

  async expectConfigureProjectOpenAIKeyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), timeoutMs);
  }

  async expectConfigureProjectOpenAIKeyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), timeoutMs);
  }

  async expectConfigureProjectOpenAIKeyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), expected, timeoutMs);
  }

  async expectConfigureProjectOpenAIKeyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), substring, timeoutMs);
  }

  async scrollConfigureProjectOpenAIKeyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey));
  }

  async clickWriteRequirementsPasteAcceptance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance));
  }

  async doubleClickWriteRequirementsPasteAcceptance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance));
  }

  async expectWriteRequirementsPasteAcceptanceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), timeoutMs);
  }

  async expectWriteRequirementsPasteAcceptanceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), timeoutMs);
  }

  async expectWriteRequirementsPasteAcceptanceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), timeoutMs);
  }

  async expectWriteRequirementsPasteAcceptanceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), timeoutMs);
  }

  async expectWriteRequirementsPasteAcceptanceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), expected, timeoutMs);
  }

  async expectWriteRequirementsPasteAcceptanceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), substring, timeoutMs);
  }

  async scrollWriteRequirementsPasteAcceptanceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance));
  }

  async clickRecorderMobileDeviceAccessibility(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility));
  }

  async doubleClickRecorderMobileDeviceAccessibility(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility));
  }

  async expectRecorderMobileDeviceAccessibilityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), timeoutMs);
  }

  async expectRecorderMobileDeviceAccessibilityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), timeoutMs);
  }

  async expectRecorderMobileDeviceAccessibilityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), timeoutMs);
  }

  async expectRecorderMobileDeviceAccessibilityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), timeoutMs);
  }

  async expectRecorderMobileDeviceAccessibilityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), expected, timeoutMs);
  }

  async expectRecorderMobileDeviceAccessibilityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), substring, timeoutMs);
  }

  async scrollRecorderMobileDeviceAccessibilityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility));
  }

  async clickPageObjectsBrowseAnd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd));
  }

  async doubleClickPageObjectsBrowseAnd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd));
  }

  async expectPageObjectsBrowseAndVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), timeoutMs);
  }

  async expectPageObjectsBrowseAndHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), timeoutMs);
  }

  async expectPageObjectsBrowseAndEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), timeoutMs);
  }

  async expectPageObjectsBrowseAndDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), timeoutMs);
  }

  async expectPageObjectsBrowseAndText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), expected, timeoutMs);
  }

  async expectPageObjectsBrowseAndContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), substring, timeoutMs);
  }

  async scrollPageObjectsBrowseAndIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd));
  }

  async clickTestPlanLibraryReview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.testPlanLibraryReview));
  }

  async doubleClickTestPlanLibraryReview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.testPlanLibraryReview));
  }

  async expectTestPlanLibraryReviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), timeoutMs);
  }

  async expectTestPlanLibraryReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), timeoutMs);
  }

  async expectTestPlanLibraryReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), timeoutMs);
  }

  async expectTestPlanLibraryReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), timeoutMs);
  }

  async expectTestPlanLibraryReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), expected, timeoutMs);
  }

  async expectTestPlanLibraryReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), substring, timeoutMs);
  }

  async scrollTestPlanLibraryReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.testPlanLibraryReview));
  }

  async clickRunTestsSelectSpecs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs));
  }

  async doubleClickRunTestsSelectSpecs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs));
  }

  async expectRunTestsSelectSpecsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), timeoutMs);
  }

  async expectRunTestsSelectSpecsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), timeoutMs);
  }

  async expectRunTestsSelectSpecsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), timeoutMs);
  }

  async expectRunTestsSelectSpecsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), timeoutMs);
  }

  async expectRunTestsSelectSpecsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), expected, timeoutMs);
  }

  async expectRunTestsSelectSpecsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), substring, timeoutMs);
  }

  async scrollRunTestsSelectSpecsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs));
  }

  async clickTestReportsHTMLReports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.testReportsHTMLReports));
  }

  async doubleClickTestReportsHTMLReports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.testReportsHTMLReports));
  }

  async expectTestReportsHTMLReportsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), timeoutMs);
  }

  async expectTestReportsHTMLReportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), timeoutMs);
  }

  async expectTestReportsHTMLReportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), timeoutMs);
  }

  async expectTestReportsHTMLReportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), timeoutMs);
  }

  async expectTestReportsHTMLReportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), expected, timeoutMs);
  }

  async expectTestReportsHTMLReportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), substring, timeoutMs);
  }

  async scrollTestReportsHTMLReportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.testReportsHTMLReports));
  }

  async clickViewFrameworkFilesInspect(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect));
  }

  async doubleClickViewFrameworkFilesInspect(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect));
  }

  async expectViewFrameworkFilesInspectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), timeoutMs);
  }

  async expectViewFrameworkFilesInspectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), timeoutMs);
  }

  async expectViewFrameworkFilesInspectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), timeoutMs);
  }

  async expectViewFrameworkFilesInspectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), timeoutMs);
  }

  async expectViewFrameworkFilesInspectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), expected, timeoutMs);
  }

  async expectViewFrameworkFilesInspectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), substring, timeoutMs);
  }

  async scrollViewFrameworkFilesInspectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect));
  }

  async clickOpenProjectAssistant(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.openProjectAssistant));
  }

  async doubleClickOpenProjectAssistant(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.openProjectAssistant), expected, timeoutMs);
  }

  async expectOpenProjectAssistantContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.openProjectAssistant), substring, timeoutMs);
  }

  async scrollOpenProjectAssistantIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.openProjectAssistant));
  }

  async clickOpenNextJsDevTools(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.openNextJsDevTools));
  }

  async doubleClickOpenNextJsDevTools(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OverviewPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OverviewPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OverviewPage.L.openNextJsDevTools), expected, timeoutMs);
  }

  async expectOpenNextJsDevToolsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OverviewPage.L.openNextJsDevTools), substring, timeoutMs);
  }

  async scrollOpenNextJsDevToolsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OverviewPage.L.openNextJsDevTools));
  }


  async clickAUTOMATIONAIPROJECT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT));
  }

  async doubleClickAUTOMATIONAIPROJECT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT));
  }

  async longPressAUTOMATIONAIPROJECT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), value, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.aUTOMATIONAIPROJECT), count, timeoutMs);
  }

  async clickTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.test));
  }

  async doubleClickTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.test));
  }

  async longPressTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.test));
  }

  async expectTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.test), value, timeoutMs);
  }

  async expectTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.test), timeoutMs);
  }

  async expectTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.test), timeoutMs);
  }

  async expectTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.test), timeoutMs);
  }

  async expectTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.test), timeoutMs);
  }

  async expectTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.test), timeoutMs);
  }

  async expectTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.test), count, timeoutMs);
  }

  async clickCreated5272026121831PM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.created5272026121831PM));
  }

  async doubleClickCreated5272026121831PM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.created5272026121831PM));
  }

  async longPressCreated5272026121831PM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.created5272026121831PM), value, timeoutMs);
  }

  async expectCreated5272026121831PMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.created5272026121831PM), count, timeoutMs);
  }

  async longPressAllProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.allProjects));
  }

  async expectAllProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.allProjects), value, timeoutMs);
  }

  async expectAllProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.allProjects), count, timeoutMs);
  }

  async longPressDeleteProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.deleteProject));
  }

  async expectDeleteProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.deleteProject), value, timeoutMs);
  }

  async expectDeleteProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.deleteProject), count, timeoutMs);
  }

  async clickWORKSPACE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.wORKSPACE));
  }

  async doubleClickWORKSPACE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.wORKSPACE));
  }

  async longPressWORKSPACE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.wORKSPACE));
  }

  async expectWORKSPACEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.wORKSPACE), value, timeoutMs);
  }

  async expectWORKSPACEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.wORKSPACE), count, timeoutMs);
  }

  async clickAutomationAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.automationAI));
  }

  async doubleClickAutomationAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.automationAI));
  }

  async longPressAutomationAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.automationAI));
  }

  async expectAutomationAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.automationAI), value, timeoutMs);
  }

  async expectAutomationAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.automationAI), count, timeoutMs);
  }

  async longPressOverviewProjectSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.overviewProjectSummary), value, timeoutMs);
  }

  async expectOverviewProjectSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.overviewProjectSummary), count, timeoutMs);
  }

  async longPressSetup0APIKeys(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.setup0APIKeys), value, timeoutMs);
  }

  async expectSetup0APIKeysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.setup0APIKeys), count, timeoutMs);
  }

  async longPressRequirements0Write(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.requirements0Write));
  }

  async expectRequirements0WriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.requirements0Write), value, timeoutMs);
  }

  async expectRequirements0WriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.requirements0Write), count, timeoutMs);
  }

  async longPressRecorderBrowserDOMCapture(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), value, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.recorderBrowserDOMCapture), count, timeoutMs);
  }

  async longPressPageObjects0Browse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.pageObjects0Browse), value, timeoutMs);
  }

  async expectPageObjects0BrowseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.pageObjects0Browse), count, timeoutMs);
  }

  async longPressTestPlans0Review(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.testPlans0Review), value, timeoutMs);
  }

  async expectTestPlans0ReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.testPlans0Review), count, timeoutMs);
  }

  async longPressTestExecutionRunSpecs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), value, timeoutMs);
  }

  async expectTestExecutionRunSpecsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.testExecutionRunSpecs), count, timeoutMs);
  }

  async longPressTestReportsHTMLReport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), value, timeoutMs);
  }

  async expectTestReportsHTMLReportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.testReportsHTMLReport), count, timeoutMs);
  }

  async longPressFrameworkZipFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.frameworkZipFiles), value, timeoutMs);
  }

  async expectFrameworkZipFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.frameworkZipFiles), count, timeoutMs);
  }

  async clickOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.overview));
  }

  async doubleClickOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.overview));
  }

  async longPressOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.overview));
  }

  async expectOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.overview), value, timeoutMs);
  }

  async expectOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.overview), timeoutMs);
  }

  async expectOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.overview), timeoutMs);
  }

  async expectOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.overview), timeoutMs);
  }

  async expectOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.overview), timeoutMs);
  }

  async expectOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.overview), timeoutMs);
  }

  async expectOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.overview), count, timeoutMs);
  }

  async clickQuickSnapshotOfThis(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis));
  }

  async doubleClickQuickSnapshotOfThis(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis));
  }

  async longPressQuickSnapshotOfThis(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis));
  }

  async expectQuickSnapshotOfThisValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), value, timeoutMs);
  }

  async expectQuickSnapshotOfThisEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), timeoutMs);
  }

  async expectQuickSnapshotOfThisDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), timeoutMs);
  }

  async expectQuickSnapshotOfThisChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), timeoutMs);
  }

  async expectQuickSnapshotOfThisUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), timeoutMs);
  }

  async expectQuickSnapshotOfThisFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), timeoutMs);
  }

  async expectQuickSnapshotOfThisCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.quickSnapshotOfThis), count, timeoutMs);
  }

  async longPressENVIRONMENTS0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0));
  }

  async expectENVIRONMENTS0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), value, timeoutMs);
  }

  async expectENVIRONMENTS0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), timeoutMs);
  }

  async expectENVIRONMENTS0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), timeoutMs);
  }

  async expectENVIRONMENTS0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), timeoutMs);
  }

  async expectENVIRONMENTS0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.eNVIRONMENTS0), count, timeoutMs);
  }

  async longPressREQUIREMENTS0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0));
  }

  async expectREQUIREMENTS0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), value, timeoutMs);
  }

  async expectREQUIREMENTS0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), timeoutMs);
  }

  async expectREQUIREMENTS0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), timeoutMs);
  }

  async expectREQUIREMENTS0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), timeoutMs);
  }

  async expectREQUIREMENTS0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.rEQUIREMENTS0), count, timeoutMs);
  }

  async longPressTESTPLANS0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.tESTPLANS0));
  }

  async expectTESTPLANS0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.tESTPLANS0), value, timeoutMs);
  }

  async expectTESTPLANS0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.tESTPLANS0), timeoutMs);
  }

  async expectTESTPLANS0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.tESTPLANS0), timeoutMs);
  }

  async expectTESTPLANS0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.tESTPLANS0), timeoutMs);
  }

  async expectTESTPLANS0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.tESTPLANS0), count, timeoutMs);
  }

  async longPressPAGEOBJECTS0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0));
  }

  async expectPAGEOBJECTS0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), value, timeoutMs);
  }

  async expectPAGEOBJECTS0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), timeoutMs);
  }

  async expectPAGEOBJECTS0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), timeoutMs);
  }

  async expectPAGEOBJECTS0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), timeoutMs);
  }

  async expectPAGEOBJECTS0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.pAGEOBJECTS0), count, timeoutMs);
  }

  async longPressTESTCASES0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.tESTCASES0));
  }

  async expectTESTCASES0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.tESTCASES0), value, timeoutMs);
  }

  async expectTESTCASES0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.tESTCASES0), timeoutMs);
  }

  async expectTESTCASES0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.tESTCASES0), timeoutMs);
  }

  async expectTESTCASES0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.tESTCASES0), timeoutMs);
  }

  async expectTESTCASES0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.tESTCASES0), count, timeoutMs);
  }

  async longPressConfigureProjectOpenAIKey(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey));
  }

  async expectConfigureProjectOpenAIKeyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), value, timeoutMs);
  }

  async expectConfigureProjectOpenAIKeyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), timeoutMs);
  }

  async expectConfigureProjectOpenAIKeyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), timeoutMs);
  }

  async expectConfigureProjectOpenAIKeyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), timeoutMs);
  }

  async expectConfigureProjectOpenAIKeyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.configureProjectOpenAIKey), count, timeoutMs);
  }

  async longPressWriteRequirementsPasteAcceptance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance));
  }

  async expectWriteRequirementsPasteAcceptanceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), value, timeoutMs);
  }

  async expectWriteRequirementsPasteAcceptanceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), timeoutMs);
  }

  async expectWriteRequirementsPasteAcceptanceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), timeoutMs);
  }

  async expectWriteRequirementsPasteAcceptanceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), timeoutMs);
  }

  async expectWriteRequirementsPasteAcceptanceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.writeRequirementsPasteAcceptance), count, timeoutMs);
  }

  async longPressRecorderMobileDeviceAccessibility(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility));
  }

  async expectRecorderMobileDeviceAccessibilityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), value, timeoutMs);
  }

  async expectRecorderMobileDeviceAccessibilityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), timeoutMs);
  }

  async expectRecorderMobileDeviceAccessibilityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), timeoutMs);
  }

  async expectRecorderMobileDeviceAccessibilityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), timeoutMs);
  }

  async expectRecorderMobileDeviceAccessibilityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.recorderMobileDeviceAccessibility), count, timeoutMs);
  }

  async longPressPageObjectsBrowseAnd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd));
  }

  async expectPageObjectsBrowseAndValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), value, timeoutMs);
  }

  async expectPageObjectsBrowseAndChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), timeoutMs);
  }

  async expectPageObjectsBrowseAndUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), timeoutMs);
  }

  async expectPageObjectsBrowseAndFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), timeoutMs);
  }

  async expectPageObjectsBrowseAndCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.pageObjectsBrowseAnd), count, timeoutMs);
  }

  async longPressTestPlanLibraryReview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.testPlanLibraryReview));
  }

  async expectTestPlanLibraryReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), value, timeoutMs);
  }

  async expectTestPlanLibraryReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), timeoutMs);
  }

  async expectTestPlanLibraryReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), timeoutMs);
  }

  async expectTestPlanLibraryReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), timeoutMs);
  }

  async expectTestPlanLibraryReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.testPlanLibraryReview), count, timeoutMs);
  }

  async longPressRunTestsSelectSpecs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs));
  }

  async expectRunTestsSelectSpecsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), value, timeoutMs);
  }

  async expectRunTestsSelectSpecsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), timeoutMs);
  }

  async expectRunTestsSelectSpecsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), timeoutMs);
  }

  async expectRunTestsSelectSpecsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), timeoutMs);
  }

  async expectRunTestsSelectSpecsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.runTestsSelectSpecs), count, timeoutMs);
  }

  async longPressTestReportsHTMLReports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.testReportsHTMLReports));
  }

  async expectTestReportsHTMLReportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), value, timeoutMs);
  }

  async expectTestReportsHTMLReportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), timeoutMs);
  }

  async expectTestReportsHTMLReportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), timeoutMs);
  }

  async expectTestReportsHTMLReportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), timeoutMs);
  }

  async expectTestReportsHTMLReportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.testReportsHTMLReports), count, timeoutMs);
  }

  async longPressViewFrameworkFilesInspect(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect));
  }

  async expectViewFrameworkFilesInspectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), value, timeoutMs);
  }

  async expectViewFrameworkFilesInspectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), timeoutMs);
  }

  async expectViewFrameworkFilesInspectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), timeoutMs);
  }

  async expectViewFrameworkFilesInspectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), timeoutMs);
  }

  async expectViewFrameworkFilesInspectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.viewFrameworkFilesInspect), count, timeoutMs);
  }

  async longPressOpenProjectAssistant(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.openProjectAssistant), value, timeoutMs);
  }

  async expectOpenProjectAssistantChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.openProjectAssistant), count, timeoutMs);
  }

  async longPressOpenNextJsDevTools(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OverviewPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OverviewPage.L.openNextJsDevTools), value, timeoutMs);
  }

  async expectOpenNextJsDevToolsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OverviewPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OverviewPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OverviewPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OverviewPage.L.openNextJsDevTools), count, timeoutMs);
  }

}
