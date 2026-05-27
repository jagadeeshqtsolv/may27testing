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

export class RecorderPage {
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
    browserRecorder: { strategy: 'text' as const, value: 'Browser recorder', actionKind: 'text' as const },
    notConnected: { strategy: 'text' as const, value: 'Not connected', actionKind: 'text' as const },
    opensANormalBrowser: { strategy: 'text' as const, value: 'Opens a normal browser window (no Playwright', actionKind: 'text' as const },
    selectAnEnvironmentTo: { strategy: 'text' as const, value: 'Select an environment to prefill baseURL and', actionKind: 'text' as const },
    clickOpenBrowserRuns: { strategy: 'text' as const, value: 'Click Open browser (runs on the machine hosting', actionKind: 'text' as const },
    navigateInThatWindow: { strategy: 'text' as const, value: 'Navigate in that window, then click Capture', actionKind: 'text' as const },
    parseElementsNameThe: { strategy: 'text' as const, value: 'Parse elements, name the page, and save.', actionKind: 'text' as const },
    none: { strategy: 'text' as const, value: '(none)', actionKind: 'combobox' as const },
    chromiumFirefoxWebKit: { strategy: 'text' as const, value: 'Chromium Firefox WebKit', actionKind: 'combobox' as const },
    input: { strategy: 'placeholder' as const, value: 'https://app.example.com', actionKind: 'textbox' as const },
    input2: { strategy: 'placeholder' as const, value: '/', actionKind: 'textbox' as const },
    noEnvironmentSelected: { strategy: 'text' as const, value: 'No environment selected — manual baseURL is used.', actionKind: 'text' as const },
    openBrowser: { strategy: 'role' as const, value: 'Open browser', role: 'button', actionKind: 'button' as const },
    captureCurrentPage: { strategy: 'role' as const, value: 'Capture current page', role: 'button', actionKind: 'button' as const },
    closeBrowser: { strategy: 'role' as const, value: 'Close browser', role: 'button', actionKind: 'button' as const },
    textarea: { strategy: 'placeholder' as const, value: 'Capture from the browser to fill this field', actionKind: 'textbox' as const },
    parseElements: { strategy: 'role' as const, value: 'Parse elements', role: 'button', actionKind: 'button' as const },
    openProjectAssistant: { strategy: 'testId' as const, value: 'chat-toggle-btn', actionKind: 'button' as const },
    openNextJsDevTools: { strategy: 'css' as const, value: '#next-logo', shadowHost: 'nextjs-portal', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAUTOMATIONAIPROJECT(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), expected, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), substring, timeoutMs);
  }

  async scrollAUTOMATIONAIPROJECTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT));
  }

  async getInnerTextTest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.test));
  }

  async expectTestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.test), timeoutMs);
  }

  async expectTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.test), timeoutMs);
  }

  async expectTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.test), expected, timeoutMs);
  }

  async expectTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.test), substring, timeoutMs);
  }

  async scrollTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.test));
  }

  async getInnerTextCreated5272026121831PM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.created5272026121831PM), expected, timeoutMs);
  }

  async expectCreated5272026121831PMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.created5272026121831PM), substring, timeoutMs);
  }

  async scrollCreated5272026121831PMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.created5272026121831PM));
  }

  async clickAllProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.allProjects));
  }

  async doubleClickAllProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.allProjects));
  }

  async expectAllProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.allProjects), expected, timeoutMs);
  }

  async expectAllProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.allProjects), substring, timeoutMs);
  }

  async scrollAllProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.allProjects));
  }

  async clickDeleteProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.deleteProject));
  }

  async doubleClickDeleteProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.deleteProject));
  }

  async expectDeleteProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.deleteProject), expected, timeoutMs);
  }

  async expectDeleteProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.deleteProject), substring, timeoutMs);
  }

  async scrollDeleteProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.deleteProject));
  }

  async getInnerTextWORKSPACE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.wORKSPACE));
  }

  async expectWORKSPACEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.wORKSPACE), expected, timeoutMs);
  }

  async expectWORKSPACEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.wORKSPACE), substring, timeoutMs);
  }

  async scrollWORKSPACEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.wORKSPACE));
  }

  async getInnerTextAutomationAI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.automationAI));
  }

  async expectAutomationAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.automationAI), expected, timeoutMs);
  }

  async expectAutomationAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.automationAI), substring, timeoutMs);
  }

  async scrollAutomationAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.automationAI));
  }

  async clickOverviewProjectSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.overviewProjectSummary));
  }

  async doubleClickOverviewProjectSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.overviewProjectSummary), expected, timeoutMs);
  }

  async expectOverviewProjectSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.overviewProjectSummary), substring, timeoutMs);
  }

  async scrollOverviewProjectSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.overviewProjectSummary));
  }

  async clickSetup0APIKeys(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.setup0APIKeys));
  }

  async doubleClickSetup0APIKeys(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.setup0APIKeys), expected, timeoutMs);
  }

  async expectSetup0APIKeysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.setup0APIKeys), substring, timeoutMs);
  }

  async scrollSetup0APIKeysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.setup0APIKeys));
  }

  async clickRequirements0Write(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.requirements0Write));
  }

  async doubleClickRequirements0Write(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.requirements0Write));
  }

  async expectRequirements0WriteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.requirements0Write), expected, timeoutMs);
  }

  async expectRequirements0WriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.requirements0Write), substring, timeoutMs);
  }

  async scrollRequirements0WriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.requirements0Write));
  }

  async clickRecorderBrowserDOMCapture(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture));
  }

  async doubleClickRecorderBrowserDOMCapture(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), expected, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), substring, timeoutMs);
  }

  async scrollRecorderBrowserDOMCaptureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture));
  }

  async clickPageObjects0Browse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.pageObjects0Browse));
  }

  async doubleClickPageObjects0Browse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.pageObjects0Browse), expected, timeoutMs);
  }

  async expectPageObjects0BrowseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.pageObjects0Browse), substring, timeoutMs);
  }

  async scrollPageObjects0BrowseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.pageObjects0Browse));
  }

  async clickTestPlans0Review(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.testPlans0Review));
  }

  async doubleClickTestPlans0Review(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.testPlans0Review), expected, timeoutMs);
  }

  async expectTestPlans0ReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.testPlans0Review), substring, timeoutMs);
  }

  async scrollTestPlans0ReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.testPlans0Review));
  }

  async clickTestExecutionRunSpecs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs));
  }

  async doubleClickTestExecutionRunSpecs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), expected, timeoutMs);
  }

  async expectTestExecutionRunSpecsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), substring, timeoutMs);
  }

  async scrollTestExecutionRunSpecsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs));
  }

  async clickTestReportsHTMLReport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.testReportsHTMLReport));
  }

  async doubleClickTestReportsHTMLReport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), expected, timeoutMs);
  }

  async expectTestReportsHTMLReportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), substring, timeoutMs);
  }

  async scrollTestReportsHTMLReportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.testReportsHTMLReport));
  }

  async clickFrameworkZipFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.frameworkZipFiles));
  }

  async doubleClickFrameworkZipFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.frameworkZipFiles), expected, timeoutMs);
  }

  async expectFrameworkZipFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.frameworkZipFiles), substring, timeoutMs);
  }

  async scrollFrameworkZipFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.frameworkZipFiles));
  }

  async getInnerTextBrowserRecorder(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.browserRecorder));
  }

  async expectBrowserRecorderVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.browserRecorder), timeoutMs);
  }

  async expectBrowserRecorderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.browserRecorder), timeoutMs);
  }

  async expectBrowserRecorderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.browserRecorder), expected, timeoutMs);
  }

  async expectBrowserRecorderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.browserRecorder), substring, timeoutMs);
  }

  async scrollBrowserRecorderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.browserRecorder));
  }

  async getInnerTextNotConnected(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.notConnected));
  }

  async expectNotConnectedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.notConnected), timeoutMs);
  }

  async expectNotConnectedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.notConnected), timeoutMs);
  }

  async expectNotConnectedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.notConnected), expected, timeoutMs);
  }

  async expectNotConnectedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.notConnected), substring, timeoutMs);
  }

  async scrollNotConnectedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.notConnected));
  }

  async getInnerTextOpensANormalBrowser(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.opensANormalBrowser));
  }

  async expectOpensANormalBrowserVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.opensANormalBrowser), timeoutMs);
  }

  async expectOpensANormalBrowserHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.opensANormalBrowser), timeoutMs);
  }

  async expectOpensANormalBrowserText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.opensANormalBrowser), expected, timeoutMs);
  }

  async expectOpensANormalBrowserContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.opensANormalBrowser), substring, timeoutMs);
  }

  async scrollOpensANormalBrowserIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.opensANormalBrowser));
  }

  async getInnerTextSelectAnEnvironmentTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo));
  }

  async expectSelectAnEnvironmentToVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), timeoutMs);
  }

  async expectSelectAnEnvironmentToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), timeoutMs);
  }

  async expectSelectAnEnvironmentToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), expected, timeoutMs);
  }

  async expectSelectAnEnvironmentToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), substring, timeoutMs);
  }

  async scrollSelectAnEnvironmentToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo));
  }

  async getInnerTextClickOpenBrowserRuns(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns));
  }

  async expectClickOpenBrowserRunsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), timeoutMs);
  }

  async expectClickOpenBrowserRunsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), timeoutMs);
  }

  async expectClickOpenBrowserRunsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), expected, timeoutMs);
  }

  async expectClickOpenBrowserRunsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), substring, timeoutMs);
  }

  async scrollClickOpenBrowserRunsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns));
  }

  async getInnerTextNavigateInThatWindow(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.navigateInThatWindow));
  }

  async expectNavigateInThatWindowVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.navigateInThatWindow), timeoutMs);
  }

  async expectNavigateInThatWindowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.navigateInThatWindow), timeoutMs);
  }

  async expectNavigateInThatWindowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.navigateInThatWindow), expected, timeoutMs);
  }

  async expectNavigateInThatWindowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.navigateInThatWindow), substring, timeoutMs);
  }

  async scrollNavigateInThatWindowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.navigateInThatWindow));
  }

  async getInnerTextParseElementsNameThe(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.parseElementsNameThe));
  }

  async expectParseElementsNameTheVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.parseElementsNameThe), timeoutMs);
  }

  async expectParseElementsNameTheHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.parseElementsNameThe), timeoutMs);
  }

  async expectParseElementsNameTheText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.parseElementsNameThe), expected, timeoutMs);
  }

  async expectParseElementsNameTheContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.parseElementsNameThe), substring, timeoutMs);
  }

  async scrollParseElementsNameTheIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.parseElementsNameThe));
  }

  async selectNone(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, RecorderPage.L.none), value);
  }

  async expectNoneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.none), timeoutMs);
  }

  async expectNoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.none), timeoutMs);
  }

  async expectNoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.none), timeoutMs);
  }

  async expectNoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.none), timeoutMs);
  }

  async expectNoneValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.none), expected, timeoutMs);
  }

  async expectNoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.none), timeoutMs);
  }

  async scrollNoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.none));
  }

  async selectChromiumFirefoxWebKit(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), value);
  }

  async expectChromiumFirefoxWebKitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), timeoutMs);
  }

  async expectChromiumFirefoxWebKitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), timeoutMs);
  }

  async expectChromiumFirefoxWebKitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), timeoutMs);
  }

  async expectChromiumFirefoxWebKitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), timeoutMs);
  }

  async expectChromiumFirefoxWebKitValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), expected, timeoutMs);
  }

  async expectChromiumFirefoxWebKitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), timeoutMs);
  }

  async scrollChromiumFirefoxWebKitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit));
  }

  async fillInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, RecorderPage.L.input), value);
  }

  async clearInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, RecorderPage.L.input));
  }

  async typeTextInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, RecorderPage.L.input), value);
  }

  async expectInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.input), timeoutMs);
  }

  async expectInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.input), timeoutMs);
  }

  async expectInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.input), timeoutMs);
  }

  async expectInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.input), timeoutMs);
  }

  async expectInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.input), expected, timeoutMs);
  }

  async expectInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.input), timeoutMs);
  }

  async scrollInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.input));
  }

  async fillInput2(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, RecorderPage.L.input2), value);
  }

  async clearInput2(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, RecorderPage.L.input2));
  }

  async typeTextInput2(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, RecorderPage.L.input2), value);
  }

  async expectInput2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.input2), timeoutMs);
  }

  async expectInput2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.input2), timeoutMs);
  }

  async expectInput2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.input2), timeoutMs);
  }

  async expectInput2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.input2), timeoutMs);
  }

  async expectInput2Value(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.input2), expected, timeoutMs);
  }

  async expectInput2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.input2), timeoutMs);
  }

  async scrollInput2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.input2));
  }

  async getInnerTextNoEnvironmentSelected(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RecorderPage.L.noEnvironmentSelected));
  }

  async expectNoEnvironmentSelectedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), timeoutMs);
  }

  async expectNoEnvironmentSelectedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), timeoutMs);
  }

  async expectNoEnvironmentSelectedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), expected, timeoutMs);
  }

  async expectNoEnvironmentSelectedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), substring, timeoutMs);
  }

  async scrollNoEnvironmentSelectedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.noEnvironmentSelected));
  }

  async clickOpenBrowser(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.openBrowser));
  }

  async doubleClickOpenBrowser(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.openBrowser));
  }

  async expectOpenBrowserVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.openBrowser), timeoutMs);
  }

  async expectOpenBrowserHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.openBrowser), timeoutMs);
  }

  async expectOpenBrowserEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.openBrowser), timeoutMs);
  }

  async expectOpenBrowserDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.openBrowser), timeoutMs);
  }

  async expectOpenBrowserText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.openBrowser), expected, timeoutMs);
  }

  async expectOpenBrowserContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.openBrowser), substring, timeoutMs);
  }

  async scrollOpenBrowserIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.openBrowser));
  }

  async clickCaptureCurrentPage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.captureCurrentPage));
  }

  async doubleClickCaptureCurrentPage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.captureCurrentPage));
  }

  async expectCaptureCurrentPageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.captureCurrentPage), timeoutMs);
  }

  async expectCaptureCurrentPageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.captureCurrentPage), timeoutMs);
  }

  async expectCaptureCurrentPageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.captureCurrentPage), timeoutMs);
  }

  async expectCaptureCurrentPageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.captureCurrentPage), timeoutMs);
  }

  async expectCaptureCurrentPageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.captureCurrentPage), expected, timeoutMs);
  }

  async expectCaptureCurrentPageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.captureCurrentPage), substring, timeoutMs);
  }

  async scrollCaptureCurrentPageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.captureCurrentPage));
  }

  async clickCloseBrowser(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.closeBrowser));
  }

  async doubleClickCloseBrowser(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.closeBrowser));
  }

  async expectCloseBrowserVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.closeBrowser), timeoutMs);
  }

  async expectCloseBrowserHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.closeBrowser), timeoutMs);
  }

  async expectCloseBrowserEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.closeBrowser), timeoutMs);
  }

  async expectCloseBrowserDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.closeBrowser), timeoutMs);
  }

  async expectCloseBrowserText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.closeBrowser), expected, timeoutMs);
  }

  async expectCloseBrowserContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.closeBrowser), substring, timeoutMs);
  }

  async scrollCloseBrowserIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.closeBrowser));
  }

  async fillTextarea(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, RecorderPage.L.textarea), value);
  }

  async clearTextarea(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, RecorderPage.L.textarea));
  }

  async typeTextTextarea(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, RecorderPage.L.textarea), value);
  }

  async expectTextareaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.textarea), timeoutMs);
  }

  async expectTextareaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.textarea), timeoutMs);
  }

  async expectTextareaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.textarea), timeoutMs);
  }

  async expectTextareaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.textarea), timeoutMs);
  }

  async expectTextareaValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.textarea), expected, timeoutMs);
  }

  async expectTextareaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.textarea), timeoutMs);
  }

  async scrollTextareaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.textarea));
  }

  async clickParseElements(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.parseElements));
  }

  async doubleClickParseElements(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.parseElements));
  }

  async expectParseElementsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.parseElements), timeoutMs);
  }

  async expectParseElementsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.parseElements), timeoutMs);
  }

  async expectParseElementsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.parseElements), timeoutMs);
  }

  async expectParseElementsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.parseElements), timeoutMs);
  }

  async expectParseElementsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.parseElements), expected, timeoutMs);
  }

  async expectParseElementsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.parseElements), substring, timeoutMs);
  }

  async scrollParseElementsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.parseElements));
  }

  async clickOpenProjectAssistant(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.openProjectAssistant));
  }

  async doubleClickOpenProjectAssistant(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.openProjectAssistant), expected, timeoutMs);
  }

  async expectOpenProjectAssistantContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.openProjectAssistant), substring, timeoutMs);
  }

  async scrollOpenProjectAssistantIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.openProjectAssistant));
  }

  async clickOpenNextJsDevTools(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.openNextJsDevTools));
  }

  async doubleClickOpenNextJsDevTools(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RecorderPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RecorderPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.openNextJsDevTools), expected, timeoutMs);
  }

  async expectOpenNextJsDevToolsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.openNextJsDevTools), substring, timeoutMs);
  }

  async scrollOpenNextJsDevToolsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RecorderPage.L.openNextJsDevTools));
  }


  async clickAUTOMATIONAIPROJECT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT));
  }

  async doubleClickAUTOMATIONAIPROJECT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT));
  }

  async longPressAUTOMATIONAIPROJECT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), value, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.aUTOMATIONAIPROJECT), count, timeoutMs);
  }

  async clickTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.test));
  }

  async doubleClickTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.test));
  }

  async longPressTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.test));
  }

  async expectTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.test), value, timeoutMs);
  }

  async expectTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.test), timeoutMs);
  }

  async expectTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.test), timeoutMs);
  }

  async expectTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.test), timeoutMs);
  }

  async expectTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.test), timeoutMs);
  }

  async expectTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.test), timeoutMs);
  }

  async expectTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.test), count, timeoutMs);
  }

  async clickCreated5272026121831PM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.created5272026121831PM));
  }

  async doubleClickCreated5272026121831PM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.created5272026121831PM));
  }

  async longPressCreated5272026121831PM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.created5272026121831PM), value, timeoutMs);
  }

  async expectCreated5272026121831PMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.created5272026121831PM), count, timeoutMs);
  }

  async longPressAllProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.allProjects));
  }

  async expectAllProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.allProjects), value, timeoutMs);
  }

  async expectAllProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.allProjects), count, timeoutMs);
  }

  async longPressDeleteProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.deleteProject));
  }

  async expectDeleteProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.deleteProject), value, timeoutMs);
  }

  async expectDeleteProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.deleteProject), count, timeoutMs);
  }

  async clickWORKSPACE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.wORKSPACE));
  }

  async doubleClickWORKSPACE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.wORKSPACE));
  }

  async longPressWORKSPACE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.wORKSPACE));
  }

  async expectWORKSPACEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.wORKSPACE), value, timeoutMs);
  }

  async expectWORKSPACEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.wORKSPACE), count, timeoutMs);
  }

  async clickAutomationAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.automationAI));
  }

  async doubleClickAutomationAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.automationAI));
  }

  async longPressAutomationAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.automationAI));
  }

  async expectAutomationAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.automationAI), value, timeoutMs);
  }

  async expectAutomationAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.automationAI), count, timeoutMs);
  }

  async longPressOverviewProjectSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.overviewProjectSummary), value, timeoutMs);
  }

  async expectOverviewProjectSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.overviewProjectSummary), count, timeoutMs);
  }

  async longPressSetup0APIKeys(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.setup0APIKeys), value, timeoutMs);
  }

  async expectSetup0APIKeysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.setup0APIKeys), count, timeoutMs);
  }

  async longPressRequirements0Write(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.requirements0Write));
  }

  async expectRequirements0WriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.requirements0Write), value, timeoutMs);
  }

  async expectRequirements0WriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.requirements0Write), count, timeoutMs);
  }

  async longPressRecorderBrowserDOMCapture(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), value, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.recorderBrowserDOMCapture), count, timeoutMs);
  }

  async longPressPageObjects0Browse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.pageObjects0Browse), value, timeoutMs);
  }

  async expectPageObjects0BrowseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.pageObjects0Browse), count, timeoutMs);
  }

  async longPressTestPlans0Review(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.testPlans0Review), value, timeoutMs);
  }

  async expectTestPlans0ReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.testPlans0Review), count, timeoutMs);
  }

  async longPressTestExecutionRunSpecs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), value, timeoutMs);
  }

  async expectTestExecutionRunSpecsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.testExecutionRunSpecs), count, timeoutMs);
  }

  async longPressTestReportsHTMLReport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), value, timeoutMs);
  }

  async expectTestReportsHTMLReportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.testReportsHTMLReport), count, timeoutMs);
  }

  async longPressFrameworkZipFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.frameworkZipFiles), value, timeoutMs);
  }

  async expectFrameworkZipFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.frameworkZipFiles), count, timeoutMs);
  }

  async clickBrowserRecorder(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.browserRecorder));
  }

  async doubleClickBrowserRecorder(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.browserRecorder));
  }

  async longPressBrowserRecorder(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.browserRecorder));
  }

  async expectBrowserRecorderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.browserRecorder), value, timeoutMs);
  }

  async expectBrowserRecorderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.browserRecorder), timeoutMs);
  }

  async expectBrowserRecorderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.browserRecorder), timeoutMs);
  }

  async expectBrowserRecorderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.browserRecorder), timeoutMs);
  }

  async expectBrowserRecorderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.browserRecorder), timeoutMs);
  }

  async expectBrowserRecorderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.browserRecorder), timeoutMs);
  }

  async expectBrowserRecorderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.browserRecorder), count, timeoutMs);
  }

  async clickNotConnected(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.notConnected));
  }

  async doubleClickNotConnected(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.notConnected));
  }

  async longPressNotConnected(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.notConnected));
  }

  async expectNotConnectedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.notConnected), value, timeoutMs);
  }

  async expectNotConnectedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.notConnected), timeoutMs);
  }

  async expectNotConnectedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.notConnected), timeoutMs);
  }

  async expectNotConnectedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.notConnected), timeoutMs);
  }

  async expectNotConnectedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.notConnected), timeoutMs);
  }

  async expectNotConnectedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.notConnected), timeoutMs);
  }

  async expectNotConnectedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.notConnected), count, timeoutMs);
  }

  async clickOpensANormalBrowser(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.opensANormalBrowser));
  }

  async doubleClickOpensANormalBrowser(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.opensANormalBrowser));
  }

  async longPressOpensANormalBrowser(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.opensANormalBrowser));
  }

  async expectOpensANormalBrowserValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.opensANormalBrowser), value, timeoutMs);
  }

  async expectOpensANormalBrowserEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.opensANormalBrowser), timeoutMs);
  }

  async expectOpensANormalBrowserDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.opensANormalBrowser), timeoutMs);
  }

  async expectOpensANormalBrowserChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.opensANormalBrowser), timeoutMs);
  }

  async expectOpensANormalBrowserUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.opensANormalBrowser), timeoutMs);
  }

  async expectOpensANormalBrowserFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.opensANormalBrowser), timeoutMs);
  }

  async expectOpensANormalBrowserCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.opensANormalBrowser), count, timeoutMs);
  }

  async clickSelectAnEnvironmentTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo));
  }

  async doubleClickSelectAnEnvironmentTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo));
  }

  async longPressSelectAnEnvironmentTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo));
  }

  async expectSelectAnEnvironmentToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), value, timeoutMs);
  }

  async expectSelectAnEnvironmentToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), timeoutMs);
  }

  async expectSelectAnEnvironmentToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), timeoutMs);
  }

  async expectSelectAnEnvironmentToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), timeoutMs);
  }

  async expectSelectAnEnvironmentToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), timeoutMs);
  }

  async expectSelectAnEnvironmentToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), timeoutMs);
  }

  async expectSelectAnEnvironmentToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.selectAnEnvironmentTo), count, timeoutMs);
  }

  async clickClickOpenBrowserRuns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns));
  }

  async doubleClickClickOpenBrowserRuns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns));
  }

  async longPressClickOpenBrowserRuns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns));
  }

  async expectClickOpenBrowserRunsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), value, timeoutMs);
  }

  async expectClickOpenBrowserRunsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), timeoutMs);
  }

  async expectClickOpenBrowserRunsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), timeoutMs);
  }

  async expectClickOpenBrowserRunsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), timeoutMs);
  }

  async expectClickOpenBrowserRunsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), timeoutMs);
  }

  async expectClickOpenBrowserRunsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), timeoutMs);
  }

  async expectClickOpenBrowserRunsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.clickOpenBrowserRuns), count, timeoutMs);
  }

  async clickNavigateInThatWindow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.navigateInThatWindow));
  }

  async doubleClickNavigateInThatWindow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.navigateInThatWindow));
  }

  async longPressNavigateInThatWindow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.navigateInThatWindow));
  }

  async expectNavigateInThatWindowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.navigateInThatWindow), value, timeoutMs);
  }

  async expectNavigateInThatWindowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.navigateInThatWindow), timeoutMs);
  }

  async expectNavigateInThatWindowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.navigateInThatWindow), timeoutMs);
  }

  async expectNavigateInThatWindowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.navigateInThatWindow), timeoutMs);
  }

  async expectNavigateInThatWindowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.navigateInThatWindow), timeoutMs);
  }

  async expectNavigateInThatWindowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.navigateInThatWindow), timeoutMs);
  }

  async expectNavigateInThatWindowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.navigateInThatWindow), count, timeoutMs);
  }

  async clickParseElementsNameThe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.parseElementsNameThe));
  }

  async doubleClickParseElementsNameThe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.parseElementsNameThe));
  }

  async longPressParseElementsNameThe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.parseElementsNameThe));
  }

  async expectParseElementsNameTheValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.parseElementsNameThe), value, timeoutMs);
  }

  async expectParseElementsNameTheEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.parseElementsNameThe), timeoutMs);
  }

  async expectParseElementsNameTheDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.parseElementsNameThe), timeoutMs);
  }

  async expectParseElementsNameTheChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.parseElementsNameThe), timeoutMs);
  }

  async expectParseElementsNameTheUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.parseElementsNameThe), timeoutMs);
  }

  async expectParseElementsNameTheFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.parseElementsNameThe), timeoutMs);
  }

  async expectParseElementsNameTheCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.parseElementsNameThe), count, timeoutMs);
  }

  async expectNoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.none), expected, timeoutMs);
  }

  async expectNoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.none), substring, timeoutMs);
  }

  async expectNoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.none), timeoutMs);
  }

  async expectNoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.none), timeoutMs);
  }

  async expectNoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.none), count, timeoutMs);
  }

  async expectChromiumFirefoxWebKitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), expected, timeoutMs);
  }

  async expectChromiumFirefoxWebKitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), substring, timeoutMs);
  }

  async expectChromiumFirefoxWebKitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), timeoutMs);
  }

  async expectChromiumFirefoxWebKitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), timeoutMs);
  }

  async expectChromiumFirefoxWebKitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.chromiumFirefoxWebKit), count, timeoutMs);
  }

  async expectInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.input), expected, timeoutMs);
  }

  async expectInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.input), substring, timeoutMs);
  }

  async expectInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.input), timeoutMs);
  }

  async expectInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.input), timeoutMs);
  }

  async expectInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.input), count, timeoutMs);
  }

  async expectInput2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.input2), expected, timeoutMs);
  }

  async expectInput2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.input2), substring, timeoutMs);
  }

  async expectInput2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.input2), timeoutMs);
  }

  async expectInput2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.input2), timeoutMs);
  }

  async expectInput2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.input2), count, timeoutMs);
  }

  async clickNoEnvironmentSelected(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RecorderPage.L.noEnvironmentSelected));
  }

  async doubleClickNoEnvironmentSelected(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RecorderPage.L.noEnvironmentSelected));
  }

  async longPressNoEnvironmentSelected(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.noEnvironmentSelected));
  }

  async expectNoEnvironmentSelectedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), value, timeoutMs);
  }

  async expectNoEnvironmentSelectedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), timeoutMs);
  }

  async expectNoEnvironmentSelectedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), timeoutMs);
  }

  async expectNoEnvironmentSelectedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), timeoutMs);
  }

  async expectNoEnvironmentSelectedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), timeoutMs);
  }

  async expectNoEnvironmentSelectedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), timeoutMs);
  }

  async expectNoEnvironmentSelectedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.noEnvironmentSelected), count, timeoutMs);
  }

  async longPressOpenBrowser(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.openBrowser));
  }

  async expectOpenBrowserValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.openBrowser), value, timeoutMs);
  }

  async expectOpenBrowserChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.openBrowser), timeoutMs);
  }

  async expectOpenBrowserUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.openBrowser), timeoutMs);
  }

  async expectOpenBrowserFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.openBrowser), timeoutMs);
  }

  async expectOpenBrowserCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.openBrowser), count, timeoutMs);
  }

  async longPressCaptureCurrentPage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.captureCurrentPage));
  }

  async expectCaptureCurrentPageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.captureCurrentPage), value, timeoutMs);
  }

  async expectCaptureCurrentPageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.captureCurrentPage), timeoutMs);
  }

  async expectCaptureCurrentPageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.captureCurrentPage), timeoutMs);
  }

  async expectCaptureCurrentPageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.captureCurrentPage), timeoutMs);
  }

  async expectCaptureCurrentPageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.captureCurrentPage), count, timeoutMs);
  }

  async longPressCloseBrowser(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.closeBrowser));
  }

  async expectCloseBrowserValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.closeBrowser), value, timeoutMs);
  }

  async expectCloseBrowserChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.closeBrowser), timeoutMs);
  }

  async expectCloseBrowserUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.closeBrowser), timeoutMs);
  }

  async expectCloseBrowserFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.closeBrowser), timeoutMs);
  }

  async expectCloseBrowserCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.closeBrowser), count, timeoutMs);
  }

  async expectTextareaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RecorderPage.L.textarea), expected, timeoutMs);
  }

  async expectTextareaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RecorderPage.L.textarea), substring, timeoutMs);
  }

  async expectTextareaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.textarea), timeoutMs);
  }

  async expectTextareaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.textarea), timeoutMs);
  }

  async expectTextareaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.textarea), count, timeoutMs);
  }

  async longPressParseElements(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.parseElements));
  }

  async expectParseElementsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.parseElements), value, timeoutMs);
  }

  async expectParseElementsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.parseElements), timeoutMs);
  }

  async expectParseElementsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.parseElements), timeoutMs);
  }

  async expectParseElementsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.parseElements), timeoutMs);
  }

  async expectParseElementsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.parseElements), count, timeoutMs);
  }

  async longPressOpenProjectAssistant(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.openProjectAssistant), value, timeoutMs);
  }

  async expectOpenProjectAssistantChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.openProjectAssistant), count, timeoutMs);
  }

  async longPressOpenNextJsDevTools(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RecorderPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RecorderPage.L.openNextJsDevTools), value, timeoutMs);
  }

  async expectOpenNextJsDevToolsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RecorderPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RecorderPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RecorderPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RecorderPage.L.openNextJsDevTools), count, timeoutMs);
  }

}
