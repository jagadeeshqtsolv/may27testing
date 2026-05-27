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

export class FrameworksPage {
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
    dOWNLOADFRAMEWORK: { strategy: 'text' as const, value: 'DOWNLOAD FRAMEWORK', actionKind: 'text' as const },
    playwrightProjectBundle: { strategy: 'text' as const, value: 'Playwright project bundle', actionKind: 'text' as const },
    exportTestsPageObjects: { strategy: 'text' as const, value: 'Export tests, page objects, and', actionKind: 'text' as const },
    downloadZip: { strategy: 'role' as const, value: 'Download zip', role: 'button', actionKind: 'button' as const },
    refreshTree: { strategy: 'role' as const, value: 'Refresh tree', role: 'button', actionKind: 'button' as const },
    pATHONSERVER: { strategy: 'text' as const, value: 'PATH ON SERVER', actionKind: 'text' as const },
    usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2: { strategy: 'text' as const, value: '/Users/jagadeesh/Documents/AutomationAI/frameworks', actionKind: 'text' as const },
    FilesExcludesNodeModules: { strategy: 'text' as const, value: '17 files (excludes node_modules)', actionKind: 'text' as const },
    githubWorkflowsRunTestsYml: { strategy: 'text' as const, value: '.github/workflows/run-tests.yml', actionKind: 'text' as const },
    gitignore: { strategy: 'text' as const, value: '.gitignore', actionKind: 'text' as const },
    npmrc: { strategy: 'text' as const, value: '.npmrc', actionKind: 'text' as const },
    environmentsQaJson: { strategy: 'text' as const, value: 'environments/qa.json', actionKind: 'text' as const },
    logsGitkeep: { strategy: 'text' as const, value: 'logs/.gitkeep', actionKind: 'text' as const },
    packageJson: { strategy: 'text' as const, value: 'package.json', actionKind: 'text' as const },
    playwrightConfigTs: { strategy: 'text' as const, value: 'playwright.config.ts', actionKind: 'text' as const },
    rEADMEMd: { strategy: 'text' as const, value: 'README.md', actionKind: 'text' as const },
    requirementsGitkeep: { strategy: 'text' as const, value: 'requirements/.gitkeep', actionKind: 'text' as const },
    supportFixturesTs: { strategy: 'text' as const, value: 'support/fixtures.ts', actionKind: 'text' as const },
    supportWebActionsTs: { strategy: 'text' as const, value: 'support/web-actions.ts', actionKind: 'text' as const },
    supportWebLocateTs: { strategy: 'text' as const, value: 'support/web-locate.ts', actionKind: 'text' as const },
    testCasesGitkeep: { strategy: 'text' as const, value: 'test-cases/.gitkeep', actionKind: 'text' as const },
    testPlansGitkeep: { strategy: 'text' as const, value: 'test-plans/.gitkeep', actionKind: 'text' as const },
    testdataTestDataJson: { strategy: 'text' as const, value: 'testdata/test-data.json', actionKind: 'text' as const },
    tsconfigJson: { strategy: 'text' as const, value: 'tsconfig.json', actionKind: 'text' as const },
    utilsDataUtilsTs: { strategy: 'text' as const, value: 'utils/data-utils.ts', actionKind: 'text' as const },
    localRunCdFrameworks93df1992A5754488B3af5309c4032ea2: { strategy: 'text' as const, value: 'Local run: cd', actionKind: 'text' as const },
    openProjectAssistant: { strategy: 'testId' as const, value: 'chat-toggle-btn', actionKind: 'button' as const },
    openNextJsDevTools: { strategy: 'css' as const, value: '#next-logo', shadowHost: 'nextjs-portal', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAUTOMATIONAIPROJECT(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), expected, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), substring, timeoutMs);
  }

  async scrollAUTOMATIONAIPROJECTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT));
  }

  async getInnerTextTest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.test));
  }

  async expectTestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.test), timeoutMs);
  }

  async expectTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.test), timeoutMs);
  }

  async expectTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.test), expected, timeoutMs);
  }

  async expectTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.test), substring, timeoutMs);
  }

  async scrollTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.test));
  }

  async getInnerTextCreated5272026121831PM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.created5272026121831PM), expected, timeoutMs);
  }

  async expectCreated5272026121831PMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.created5272026121831PM), substring, timeoutMs);
  }

  async scrollCreated5272026121831PMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.created5272026121831PM));
  }

  async clickAllProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.allProjects));
  }

  async doubleClickAllProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.allProjects));
  }

  async expectAllProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.allProjects), expected, timeoutMs);
  }

  async expectAllProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.allProjects), substring, timeoutMs);
  }

  async scrollAllProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.allProjects));
  }

  async clickDeleteProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.deleteProject));
  }

  async doubleClickDeleteProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.deleteProject));
  }

  async expectDeleteProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.deleteProject), expected, timeoutMs);
  }

  async expectDeleteProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.deleteProject), substring, timeoutMs);
  }

  async scrollDeleteProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.deleteProject));
  }

  async getInnerTextWORKSPACE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.wORKSPACE));
  }

  async expectWORKSPACEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.wORKSPACE), expected, timeoutMs);
  }

  async expectWORKSPACEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.wORKSPACE), substring, timeoutMs);
  }

  async scrollWORKSPACEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.wORKSPACE));
  }

  async getInnerTextAutomationAI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.automationAI));
  }

  async expectAutomationAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.automationAI), expected, timeoutMs);
  }

  async expectAutomationAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.automationAI), substring, timeoutMs);
  }

  async scrollAutomationAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.automationAI));
  }

  async clickOverviewProjectSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.overviewProjectSummary));
  }

  async doubleClickOverviewProjectSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), expected, timeoutMs);
  }

  async expectOverviewProjectSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), substring, timeoutMs);
  }

  async scrollOverviewProjectSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.overviewProjectSummary));
  }

  async clickSetup0APIKeys(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.setup0APIKeys));
  }

  async doubleClickSetup0APIKeys(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.setup0APIKeys), expected, timeoutMs);
  }

  async expectSetup0APIKeysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.setup0APIKeys), substring, timeoutMs);
  }

  async scrollSetup0APIKeysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.setup0APIKeys));
  }

  async clickRequirements0Write(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.requirements0Write));
  }

  async doubleClickRequirements0Write(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.requirements0Write));
  }

  async expectRequirements0WriteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.requirements0Write), expected, timeoutMs);
  }

  async expectRequirements0WriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.requirements0Write), substring, timeoutMs);
  }

  async scrollRequirements0WriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.requirements0Write));
  }

  async clickRecorderBrowserDOMCapture(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture));
  }

  async doubleClickRecorderBrowserDOMCapture(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), expected, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), substring, timeoutMs);
  }

  async scrollRecorderBrowserDOMCaptureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture));
  }

  async clickPageObjects0Browse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.pageObjects0Browse));
  }

  async doubleClickPageObjects0Browse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), expected, timeoutMs);
  }

  async expectPageObjects0BrowseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), substring, timeoutMs);
  }

  async scrollPageObjects0BrowseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.pageObjects0Browse));
  }

  async clickTestPlans0Review(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.testPlans0Review));
  }

  async doubleClickTestPlans0Review(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.testPlans0Review), expected, timeoutMs);
  }

  async expectTestPlans0ReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.testPlans0Review), substring, timeoutMs);
  }

  async scrollTestPlans0ReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.testPlans0Review));
  }

  async clickTestExecutionRunSpecs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs));
  }

  async doubleClickTestExecutionRunSpecs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), expected, timeoutMs);
  }

  async expectTestExecutionRunSpecsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), substring, timeoutMs);
  }

  async scrollTestExecutionRunSpecsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs));
  }

  async clickTestReportsHTMLReport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport));
  }

  async doubleClickTestReportsHTMLReport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), expected, timeoutMs);
  }

  async expectTestReportsHTMLReportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), substring, timeoutMs);
  }

  async scrollTestReportsHTMLReportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport));
  }

  async clickFrameworkZipFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.frameworkZipFiles));
  }

  async doubleClickFrameworkZipFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), expected, timeoutMs);
  }

  async expectFrameworkZipFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), substring, timeoutMs);
  }

  async scrollFrameworkZipFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.frameworkZipFiles));
  }

  async getInnerTextDOWNLOADFRAMEWORK(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK));
  }

  async expectDOWNLOADFRAMEWORKVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), timeoutMs);
  }

  async expectDOWNLOADFRAMEWORKHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), timeoutMs);
  }

  async expectDOWNLOADFRAMEWORKText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), expected, timeoutMs);
  }

  async expectDOWNLOADFRAMEWORKContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), substring, timeoutMs);
  }

  async scrollDOWNLOADFRAMEWORKIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK));
  }

  async getInnerTextPlaywrightProjectBundle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle));
  }

  async expectPlaywrightProjectBundleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), timeoutMs);
  }

  async expectPlaywrightProjectBundleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), timeoutMs);
  }

  async expectPlaywrightProjectBundleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), expected, timeoutMs);
  }

  async expectPlaywrightProjectBundleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), substring, timeoutMs);
  }

  async scrollPlaywrightProjectBundleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle));
  }

  async getInnerTextExportTestsPageObjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects));
  }

  async expectExportTestsPageObjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), timeoutMs);
  }

  async expectExportTestsPageObjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), timeoutMs);
  }

  async expectExportTestsPageObjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), expected, timeoutMs);
  }

  async expectExportTestsPageObjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), substring, timeoutMs);
  }

  async scrollExportTestsPageObjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects));
  }

  async clickDownloadZip(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.downloadZip));
  }

  async doubleClickDownloadZip(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.downloadZip));
  }

  async expectDownloadZipVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.downloadZip), timeoutMs);
  }

  async expectDownloadZipHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.downloadZip), timeoutMs);
  }

  async expectDownloadZipEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.downloadZip), timeoutMs);
  }

  async expectDownloadZipDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.downloadZip), timeoutMs);
  }

  async expectDownloadZipText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.downloadZip), expected, timeoutMs);
  }

  async expectDownloadZipContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.downloadZip), substring, timeoutMs);
  }

  async scrollDownloadZipIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.downloadZip));
  }

  async clickRefreshTree(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.refreshTree));
  }

  async doubleClickRefreshTree(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.refreshTree));
  }

  async expectRefreshTreeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.refreshTree), timeoutMs);
  }

  async expectRefreshTreeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.refreshTree), timeoutMs);
  }

  async expectRefreshTreeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.refreshTree), timeoutMs);
  }

  async expectRefreshTreeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.refreshTree), timeoutMs);
  }

  async expectRefreshTreeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.refreshTree), expected, timeoutMs);
  }

  async expectRefreshTreeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.refreshTree), substring, timeoutMs);
  }

  async scrollRefreshTreeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.refreshTree));
  }

  async getInnerTextPATHONSERVER(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.pATHONSERVER));
  }

  async expectPATHONSERVERVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.pATHONSERVER), timeoutMs);
  }

  async expectPATHONSERVERHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.pATHONSERVER), timeoutMs);
  }

  async expectPATHONSERVERText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.pATHONSERVER), expected, timeoutMs);
  }

  async expectPATHONSERVERContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.pATHONSERVER), substring, timeoutMs);
  }

  async scrollPATHONSERVERIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.pATHONSERVER));
  }

  async getInnerTextUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2));
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), expected, timeoutMs);
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), substring, timeoutMs);
  }

  async scrollUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2));
  }

  async getInnerTextFilesExcludesNodeModules(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules));
  }

  async expectFilesExcludesNodeModulesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), timeoutMs);
  }

  async expectFilesExcludesNodeModulesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), timeoutMs);
  }

  async expectFilesExcludesNodeModulesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), expected, timeoutMs);
  }

  async expectFilesExcludesNodeModulesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), substring, timeoutMs);
  }

  async scrollFilesExcludesNodeModulesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules));
  }

  async getInnerTextGithubWorkflowsRunTestsYml(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml));
  }

  async expectGithubWorkflowsRunTestsYmlVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), timeoutMs);
  }

  async expectGithubWorkflowsRunTestsYmlHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), timeoutMs);
  }

  async expectGithubWorkflowsRunTestsYmlText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), expected, timeoutMs);
  }

  async expectGithubWorkflowsRunTestsYmlContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), substring, timeoutMs);
  }

  async scrollGithubWorkflowsRunTestsYmlIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml));
  }

  async getInnerTextGitignore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.gitignore));
  }

  async expectGitignoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.gitignore), timeoutMs);
  }

  async expectGitignoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.gitignore), timeoutMs);
  }

  async expectGitignoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.gitignore), expected, timeoutMs);
  }

  async expectGitignoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.gitignore), substring, timeoutMs);
  }

  async scrollGitignoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.gitignore));
  }

  async getInnerTextNpmrc(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.npmrc));
  }

  async expectNpmrcVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.npmrc), timeoutMs);
  }

  async expectNpmrcHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.npmrc), timeoutMs);
  }

  async expectNpmrcText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.npmrc), expected, timeoutMs);
  }

  async expectNpmrcContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.npmrc), substring, timeoutMs);
  }

  async scrollNpmrcIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.npmrc));
  }

  async getInnerTextEnvironmentsQaJson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.environmentsQaJson));
  }

  async expectEnvironmentsQaJsonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.environmentsQaJson), timeoutMs);
  }

  async expectEnvironmentsQaJsonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.environmentsQaJson), timeoutMs);
  }

  async expectEnvironmentsQaJsonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.environmentsQaJson), expected, timeoutMs);
  }

  async expectEnvironmentsQaJsonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.environmentsQaJson), substring, timeoutMs);
  }

  async scrollEnvironmentsQaJsonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.environmentsQaJson));
  }

  async getInnerTextLogsGitkeep(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.logsGitkeep));
  }

  async expectLogsGitkeepVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.logsGitkeep), timeoutMs);
  }

  async expectLogsGitkeepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.logsGitkeep), timeoutMs);
  }

  async expectLogsGitkeepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.logsGitkeep), expected, timeoutMs);
  }

  async expectLogsGitkeepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.logsGitkeep), substring, timeoutMs);
  }

  async scrollLogsGitkeepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.logsGitkeep));
  }

  async getInnerTextPackageJson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.packageJson));
  }

  async expectPackageJsonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.packageJson), timeoutMs);
  }

  async expectPackageJsonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.packageJson), timeoutMs);
  }

  async expectPackageJsonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.packageJson), expected, timeoutMs);
  }

  async expectPackageJsonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.packageJson), substring, timeoutMs);
  }

  async scrollPackageJsonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.packageJson));
  }

  async getInnerTextPlaywrightConfigTs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.playwrightConfigTs));
  }

  async expectPlaywrightConfigTsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), timeoutMs);
  }

  async expectPlaywrightConfigTsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), timeoutMs);
  }

  async expectPlaywrightConfigTsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), expected, timeoutMs);
  }

  async expectPlaywrightConfigTsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), substring, timeoutMs);
  }

  async scrollPlaywrightConfigTsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.playwrightConfigTs));
  }

  async getInnerTextREADMEMd(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.rEADMEMd));
  }

  async expectREADMEMdVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.rEADMEMd), timeoutMs);
  }

  async expectREADMEMdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.rEADMEMd), timeoutMs);
  }

  async expectREADMEMdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.rEADMEMd), expected, timeoutMs);
  }

  async expectREADMEMdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.rEADMEMd), substring, timeoutMs);
  }

  async scrollREADMEMdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.rEADMEMd));
  }

  async getInnerTextRequirementsGitkeep(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.requirementsGitkeep));
  }

  async expectRequirementsGitkeepVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), timeoutMs);
  }

  async expectRequirementsGitkeepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), timeoutMs);
  }

  async expectRequirementsGitkeepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), expected, timeoutMs);
  }

  async expectRequirementsGitkeepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), substring, timeoutMs);
  }

  async scrollRequirementsGitkeepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.requirementsGitkeep));
  }

  async getInnerTextSupportFixturesTs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.supportFixturesTs));
  }

  async expectSupportFixturesTsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.supportFixturesTs), timeoutMs);
  }

  async expectSupportFixturesTsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.supportFixturesTs), timeoutMs);
  }

  async expectSupportFixturesTsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.supportFixturesTs), expected, timeoutMs);
  }

  async expectSupportFixturesTsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.supportFixturesTs), substring, timeoutMs);
  }

  async scrollSupportFixturesTsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.supportFixturesTs));
  }

  async getInnerTextSupportWebActionsTs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.supportWebActionsTs));
  }

  async expectSupportWebActionsTsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), timeoutMs);
  }

  async expectSupportWebActionsTsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), timeoutMs);
  }

  async expectSupportWebActionsTsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), expected, timeoutMs);
  }

  async expectSupportWebActionsTsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), substring, timeoutMs);
  }

  async scrollSupportWebActionsTsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.supportWebActionsTs));
  }

  async getInnerTextSupportWebLocateTs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.supportWebLocateTs));
  }

  async expectSupportWebLocateTsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), timeoutMs);
  }

  async expectSupportWebLocateTsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), timeoutMs);
  }

  async expectSupportWebLocateTsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), expected, timeoutMs);
  }

  async expectSupportWebLocateTsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), substring, timeoutMs);
  }

  async scrollSupportWebLocateTsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.supportWebLocateTs));
  }

  async getInnerTextTestCasesGitkeep(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.testCasesGitkeep));
  }

  async expectTestCasesGitkeepVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), timeoutMs);
  }

  async expectTestCasesGitkeepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), timeoutMs);
  }

  async expectTestCasesGitkeepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), expected, timeoutMs);
  }

  async expectTestCasesGitkeepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), substring, timeoutMs);
  }

  async scrollTestCasesGitkeepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.testCasesGitkeep));
  }

  async getInnerTextTestPlansGitkeep(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.testPlansGitkeep));
  }

  async expectTestPlansGitkeepVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), timeoutMs);
  }

  async expectTestPlansGitkeepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), timeoutMs);
  }

  async expectTestPlansGitkeepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), expected, timeoutMs);
  }

  async expectTestPlansGitkeepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), substring, timeoutMs);
  }

  async scrollTestPlansGitkeepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.testPlansGitkeep));
  }

  async getInnerTextTestdataTestDataJson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.testdataTestDataJson));
  }

  async expectTestdataTestDataJsonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), timeoutMs);
  }

  async expectTestdataTestDataJsonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), timeoutMs);
  }

  async expectTestdataTestDataJsonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), expected, timeoutMs);
  }

  async expectTestdataTestDataJsonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), substring, timeoutMs);
  }

  async scrollTestdataTestDataJsonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.testdataTestDataJson));
  }

  async getInnerTextTsconfigJson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.tsconfigJson));
  }

  async expectTsconfigJsonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.tsconfigJson), timeoutMs);
  }

  async expectTsconfigJsonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.tsconfigJson), timeoutMs);
  }

  async expectTsconfigJsonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.tsconfigJson), expected, timeoutMs);
  }

  async expectTsconfigJsonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.tsconfigJson), substring, timeoutMs);
  }

  async scrollTsconfigJsonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.tsconfigJson));
  }

  async getInnerTextUtilsDataUtilsTs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs));
  }

  async expectUtilsDataUtilsTsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), timeoutMs);
  }

  async expectUtilsDataUtilsTsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), timeoutMs);
  }

  async expectUtilsDataUtilsTsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), expected, timeoutMs);
  }

  async expectUtilsDataUtilsTsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), substring, timeoutMs);
  }

  async scrollUtilsDataUtilsTsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs));
  }

  async getInnerTextLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2));
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), expected, timeoutMs);
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), substring, timeoutMs);
  }

  async scrollLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2));
  }

  async clickOpenProjectAssistant(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.openProjectAssistant));
  }

  async doubleClickOpenProjectAssistant(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.openProjectAssistant), expected, timeoutMs);
  }

  async expectOpenProjectAssistantContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.openProjectAssistant), substring, timeoutMs);
  }

  async scrollOpenProjectAssistantIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.openProjectAssistant));
  }

  async clickOpenNextJsDevTools(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.openNextJsDevTools));
  }

  async doubleClickOpenNextJsDevTools(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), expected, timeoutMs);
  }

  async expectOpenNextJsDevToolsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), substring, timeoutMs);
  }

  async scrollOpenNextJsDevToolsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, FrameworksPage.L.openNextJsDevTools));
  }


  async clickAUTOMATIONAIPROJECT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT));
  }

  async doubleClickAUTOMATIONAIPROJECT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT));
  }

  async longPressAUTOMATIONAIPROJECT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), value, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.aUTOMATIONAIPROJECT), count, timeoutMs);
  }

  async clickTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.test));
  }

  async doubleClickTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.test));
  }

  async longPressTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.test));
  }

  async expectTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.test), value, timeoutMs);
  }

  async expectTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.test), timeoutMs);
  }

  async expectTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.test), timeoutMs);
  }

  async expectTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.test), timeoutMs);
  }

  async expectTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.test), timeoutMs);
  }

  async expectTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.test), timeoutMs);
  }

  async expectTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.test), count, timeoutMs);
  }

  async clickCreated5272026121831PM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.created5272026121831PM));
  }

  async doubleClickCreated5272026121831PM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.created5272026121831PM));
  }

  async longPressCreated5272026121831PM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.created5272026121831PM), value, timeoutMs);
  }

  async expectCreated5272026121831PMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.created5272026121831PM), count, timeoutMs);
  }

  async longPressAllProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.allProjects));
  }

  async expectAllProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.allProjects), value, timeoutMs);
  }

  async expectAllProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.allProjects), count, timeoutMs);
  }

  async longPressDeleteProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.deleteProject));
  }

  async expectDeleteProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.deleteProject), value, timeoutMs);
  }

  async expectDeleteProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.deleteProject), count, timeoutMs);
  }

  async clickWORKSPACE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.wORKSPACE));
  }

  async doubleClickWORKSPACE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.wORKSPACE));
  }

  async longPressWORKSPACE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.wORKSPACE));
  }

  async expectWORKSPACEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.wORKSPACE), value, timeoutMs);
  }

  async expectWORKSPACEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.wORKSPACE), count, timeoutMs);
  }

  async clickAutomationAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.automationAI));
  }

  async doubleClickAutomationAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.automationAI));
  }

  async longPressAutomationAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.automationAI));
  }

  async expectAutomationAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.automationAI), value, timeoutMs);
  }

  async expectAutomationAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.automationAI), count, timeoutMs);
  }

  async longPressOverviewProjectSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), value, timeoutMs);
  }

  async expectOverviewProjectSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.overviewProjectSummary), count, timeoutMs);
  }

  async longPressSetup0APIKeys(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.setup0APIKeys), value, timeoutMs);
  }

  async expectSetup0APIKeysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.setup0APIKeys), count, timeoutMs);
  }

  async longPressRequirements0Write(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.requirements0Write));
  }

  async expectRequirements0WriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.requirements0Write), value, timeoutMs);
  }

  async expectRequirements0WriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.requirements0Write), count, timeoutMs);
  }

  async longPressRecorderBrowserDOMCapture(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), value, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.recorderBrowserDOMCapture), count, timeoutMs);
  }

  async longPressPageObjects0Browse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), value, timeoutMs);
  }

  async expectPageObjects0BrowseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.pageObjects0Browse), count, timeoutMs);
  }

  async longPressTestPlans0Review(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.testPlans0Review), value, timeoutMs);
  }

  async expectTestPlans0ReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.testPlans0Review), count, timeoutMs);
  }

  async longPressTestExecutionRunSpecs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), value, timeoutMs);
  }

  async expectTestExecutionRunSpecsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.testExecutionRunSpecs), count, timeoutMs);
  }

  async longPressTestReportsHTMLReport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), value, timeoutMs);
  }

  async expectTestReportsHTMLReportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.testReportsHTMLReport), count, timeoutMs);
  }

  async longPressFrameworkZipFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), value, timeoutMs);
  }

  async expectFrameworkZipFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.frameworkZipFiles), count, timeoutMs);
  }

  async clickDOWNLOADFRAMEWORK(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK));
  }

  async doubleClickDOWNLOADFRAMEWORK(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK));
  }

  async longPressDOWNLOADFRAMEWORK(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK));
  }

  async expectDOWNLOADFRAMEWORKValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), value, timeoutMs);
  }

  async expectDOWNLOADFRAMEWORKEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), timeoutMs);
  }

  async expectDOWNLOADFRAMEWORKDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), timeoutMs);
  }

  async expectDOWNLOADFRAMEWORKChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), timeoutMs);
  }

  async expectDOWNLOADFRAMEWORKUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), timeoutMs);
  }

  async expectDOWNLOADFRAMEWORKFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), timeoutMs);
  }

  async expectDOWNLOADFRAMEWORKCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.dOWNLOADFRAMEWORK), count, timeoutMs);
  }

  async clickPlaywrightProjectBundle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle));
  }

  async doubleClickPlaywrightProjectBundle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle));
  }

  async longPressPlaywrightProjectBundle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle));
  }

  async expectPlaywrightProjectBundleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), value, timeoutMs);
  }

  async expectPlaywrightProjectBundleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), timeoutMs);
  }

  async expectPlaywrightProjectBundleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), timeoutMs);
  }

  async expectPlaywrightProjectBundleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), timeoutMs);
  }

  async expectPlaywrightProjectBundleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), timeoutMs);
  }

  async expectPlaywrightProjectBundleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), timeoutMs);
  }

  async expectPlaywrightProjectBundleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.playwrightProjectBundle), count, timeoutMs);
  }

  async clickExportTestsPageObjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects));
  }

  async doubleClickExportTestsPageObjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects));
  }

  async longPressExportTestsPageObjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects));
  }

  async expectExportTestsPageObjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), value, timeoutMs);
  }

  async expectExportTestsPageObjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), timeoutMs);
  }

  async expectExportTestsPageObjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), timeoutMs);
  }

  async expectExportTestsPageObjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), timeoutMs);
  }

  async expectExportTestsPageObjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), timeoutMs);
  }

  async expectExportTestsPageObjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), timeoutMs);
  }

  async expectExportTestsPageObjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.exportTestsPageObjects), count, timeoutMs);
  }

  async longPressDownloadZip(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.downloadZip));
  }

  async expectDownloadZipValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.downloadZip), value, timeoutMs);
  }

  async expectDownloadZipChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.downloadZip), timeoutMs);
  }

  async expectDownloadZipUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.downloadZip), timeoutMs);
  }

  async expectDownloadZipFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.downloadZip), timeoutMs);
  }

  async expectDownloadZipCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.downloadZip), count, timeoutMs);
  }

  async longPressRefreshTree(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.refreshTree));
  }

  async expectRefreshTreeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.refreshTree), value, timeoutMs);
  }

  async expectRefreshTreeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.refreshTree), timeoutMs);
  }

  async expectRefreshTreeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.refreshTree), timeoutMs);
  }

  async expectRefreshTreeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.refreshTree), timeoutMs);
  }

  async expectRefreshTreeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.refreshTree), count, timeoutMs);
  }

  async clickPATHONSERVER(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.pATHONSERVER));
  }

  async doubleClickPATHONSERVER(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.pATHONSERVER));
  }

  async longPressPATHONSERVER(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.pATHONSERVER));
  }

  async expectPATHONSERVERValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.pATHONSERVER), value, timeoutMs);
  }

  async expectPATHONSERVEREnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.pATHONSERVER), timeoutMs);
  }

  async expectPATHONSERVERDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.pATHONSERVER), timeoutMs);
  }

  async expectPATHONSERVERChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.pATHONSERVER), timeoutMs);
  }

  async expectPATHONSERVERUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.pATHONSERVER), timeoutMs);
  }

  async expectPATHONSERVERFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.pATHONSERVER), timeoutMs);
  }

  async expectPATHONSERVERCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.pATHONSERVER), count, timeoutMs);
  }

  async clickUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2));
  }

  async doubleClickUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2));
  }

  async longPressUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2));
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), value, timeoutMs);
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectUsersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.usersJagadeeshDocumentsAutomationAIFrameworksWeb93df1992A5754488B3af5309c4032ea2), count, timeoutMs);
  }

  async clickFilesExcludesNodeModules(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules));
  }

  async doubleClickFilesExcludesNodeModules(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules));
  }

  async longPressFilesExcludesNodeModules(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules));
  }

  async expectFilesExcludesNodeModulesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), value, timeoutMs);
  }

  async expectFilesExcludesNodeModulesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), timeoutMs);
  }

  async expectFilesExcludesNodeModulesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), timeoutMs);
  }

  async expectFilesExcludesNodeModulesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), timeoutMs);
  }

  async expectFilesExcludesNodeModulesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), timeoutMs);
  }

  async expectFilesExcludesNodeModulesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), timeoutMs);
  }

  async expectFilesExcludesNodeModulesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.FilesExcludesNodeModules), count, timeoutMs);
  }

  async clickGithubWorkflowsRunTestsYml(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml));
  }

  async doubleClickGithubWorkflowsRunTestsYml(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml));
  }

  async longPressGithubWorkflowsRunTestsYml(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml));
  }

  async expectGithubWorkflowsRunTestsYmlValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), value, timeoutMs);
  }

  async expectGithubWorkflowsRunTestsYmlEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), timeoutMs);
  }

  async expectGithubWorkflowsRunTestsYmlDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), timeoutMs);
  }

  async expectGithubWorkflowsRunTestsYmlChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), timeoutMs);
  }

  async expectGithubWorkflowsRunTestsYmlUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), timeoutMs);
  }

  async expectGithubWorkflowsRunTestsYmlFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), timeoutMs);
  }

  async expectGithubWorkflowsRunTestsYmlCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.githubWorkflowsRunTestsYml), count, timeoutMs);
  }

  async clickGitignore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.gitignore));
  }

  async doubleClickGitignore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.gitignore));
  }

  async longPressGitignore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.gitignore));
  }

  async expectGitignoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.gitignore), value, timeoutMs);
  }

  async expectGitignoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.gitignore), timeoutMs);
  }

  async expectGitignoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.gitignore), timeoutMs);
  }

  async expectGitignoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.gitignore), timeoutMs);
  }

  async expectGitignoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.gitignore), timeoutMs);
  }

  async expectGitignoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.gitignore), timeoutMs);
  }

  async expectGitignoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.gitignore), count, timeoutMs);
  }

  async clickNpmrc(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.npmrc));
  }

  async doubleClickNpmrc(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.npmrc));
  }

  async longPressNpmrc(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.npmrc));
  }

  async expectNpmrcValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.npmrc), value, timeoutMs);
  }

  async expectNpmrcEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.npmrc), timeoutMs);
  }

  async expectNpmrcDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.npmrc), timeoutMs);
  }

  async expectNpmrcChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.npmrc), timeoutMs);
  }

  async expectNpmrcUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.npmrc), timeoutMs);
  }

  async expectNpmrcFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.npmrc), timeoutMs);
  }

  async expectNpmrcCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.npmrc), count, timeoutMs);
  }

  async clickEnvironmentsQaJson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.environmentsQaJson));
  }

  async doubleClickEnvironmentsQaJson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.environmentsQaJson));
  }

  async longPressEnvironmentsQaJson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.environmentsQaJson));
  }

  async expectEnvironmentsQaJsonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.environmentsQaJson), value, timeoutMs);
  }

  async expectEnvironmentsQaJsonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.environmentsQaJson), timeoutMs);
  }

  async expectEnvironmentsQaJsonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.environmentsQaJson), timeoutMs);
  }

  async expectEnvironmentsQaJsonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.environmentsQaJson), timeoutMs);
  }

  async expectEnvironmentsQaJsonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.environmentsQaJson), timeoutMs);
  }

  async expectEnvironmentsQaJsonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.environmentsQaJson), timeoutMs);
  }

  async expectEnvironmentsQaJsonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.environmentsQaJson), count, timeoutMs);
  }

  async clickLogsGitkeep(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.logsGitkeep));
  }

  async doubleClickLogsGitkeep(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.logsGitkeep));
  }

  async longPressLogsGitkeep(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.logsGitkeep));
  }

  async expectLogsGitkeepValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.logsGitkeep), value, timeoutMs);
  }

  async expectLogsGitkeepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.logsGitkeep), timeoutMs);
  }

  async expectLogsGitkeepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.logsGitkeep), timeoutMs);
  }

  async expectLogsGitkeepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.logsGitkeep), timeoutMs);
  }

  async expectLogsGitkeepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.logsGitkeep), timeoutMs);
  }

  async expectLogsGitkeepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.logsGitkeep), timeoutMs);
  }

  async expectLogsGitkeepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.logsGitkeep), count, timeoutMs);
  }

  async clickPackageJson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.packageJson));
  }

  async doubleClickPackageJson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.packageJson));
  }

  async longPressPackageJson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.packageJson));
  }

  async expectPackageJsonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.packageJson), value, timeoutMs);
  }

  async expectPackageJsonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.packageJson), timeoutMs);
  }

  async expectPackageJsonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.packageJson), timeoutMs);
  }

  async expectPackageJsonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.packageJson), timeoutMs);
  }

  async expectPackageJsonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.packageJson), timeoutMs);
  }

  async expectPackageJsonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.packageJson), timeoutMs);
  }

  async expectPackageJsonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.packageJson), count, timeoutMs);
  }

  async clickPlaywrightConfigTs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.playwrightConfigTs));
  }

  async doubleClickPlaywrightConfigTs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.playwrightConfigTs));
  }

  async longPressPlaywrightConfigTs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.playwrightConfigTs));
  }

  async expectPlaywrightConfigTsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), value, timeoutMs);
  }

  async expectPlaywrightConfigTsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), timeoutMs);
  }

  async expectPlaywrightConfigTsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), timeoutMs);
  }

  async expectPlaywrightConfigTsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), timeoutMs);
  }

  async expectPlaywrightConfigTsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), timeoutMs);
  }

  async expectPlaywrightConfigTsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), timeoutMs);
  }

  async expectPlaywrightConfigTsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.playwrightConfigTs), count, timeoutMs);
  }

  async clickREADMEMd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.rEADMEMd));
  }

  async doubleClickREADMEMd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.rEADMEMd));
  }

  async longPressREADMEMd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.rEADMEMd));
  }

  async expectREADMEMdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.rEADMEMd), value, timeoutMs);
  }

  async expectREADMEMdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.rEADMEMd), timeoutMs);
  }

  async expectREADMEMdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.rEADMEMd), timeoutMs);
  }

  async expectREADMEMdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.rEADMEMd), timeoutMs);
  }

  async expectREADMEMdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.rEADMEMd), timeoutMs);
  }

  async expectREADMEMdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.rEADMEMd), timeoutMs);
  }

  async expectREADMEMdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.rEADMEMd), count, timeoutMs);
  }

  async clickRequirementsGitkeep(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.requirementsGitkeep));
  }

  async doubleClickRequirementsGitkeep(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.requirementsGitkeep));
  }

  async longPressRequirementsGitkeep(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.requirementsGitkeep));
  }

  async expectRequirementsGitkeepValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), value, timeoutMs);
  }

  async expectRequirementsGitkeepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), timeoutMs);
  }

  async expectRequirementsGitkeepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), timeoutMs);
  }

  async expectRequirementsGitkeepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), timeoutMs);
  }

  async expectRequirementsGitkeepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), timeoutMs);
  }

  async expectRequirementsGitkeepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), timeoutMs);
  }

  async expectRequirementsGitkeepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.requirementsGitkeep), count, timeoutMs);
  }

  async clickSupportFixturesTs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.supportFixturesTs));
  }

  async doubleClickSupportFixturesTs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.supportFixturesTs));
  }

  async longPressSupportFixturesTs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.supportFixturesTs));
  }

  async expectSupportFixturesTsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.supportFixturesTs), value, timeoutMs);
  }

  async expectSupportFixturesTsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.supportFixturesTs), timeoutMs);
  }

  async expectSupportFixturesTsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.supportFixturesTs), timeoutMs);
  }

  async expectSupportFixturesTsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.supportFixturesTs), timeoutMs);
  }

  async expectSupportFixturesTsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.supportFixturesTs), timeoutMs);
  }

  async expectSupportFixturesTsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.supportFixturesTs), timeoutMs);
  }

  async expectSupportFixturesTsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.supportFixturesTs), count, timeoutMs);
  }

  async clickSupportWebActionsTs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.supportWebActionsTs));
  }

  async doubleClickSupportWebActionsTs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.supportWebActionsTs));
  }

  async longPressSupportWebActionsTs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.supportWebActionsTs));
  }

  async expectSupportWebActionsTsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), value, timeoutMs);
  }

  async expectSupportWebActionsTsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), timeoutMs);
  }

  async expectSupportWebActionsTsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), timeoutMs);
  }

  async expectSupportWebActionsTsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), timeoutMs);
  }

  async expectSupportWebActionsTsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), timeoutMs);
  }

  async expectSupportWebActionsTsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), timeoutMs);
  }

  async expectSupportWebActionsTsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.supportWebActionsTs), count, timeoutMs);
  }

  async clickSupportWebLocateTs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.supportWebLocateTs));
  }

  async doubleClickSupportWebLocateTs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.supportWebLocateTs));
  }

  async longPressSupportWebLocateTs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.supportWebLocateTs));
  }

  async expectSupportWebLocateTsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), value, timeoutMs);
  }

  async expectSupportWebLocateTsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), timeoutMs);
  }

  async expectSupportWebLocateTsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), timeoutMs);
  }

  async expectSupportWebLocateTsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), timeoutMs);
  }

  async expectSupportWebLocateTsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), timeoutMs);
  }

  async expectSupportWebLocateTsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), timeoutMs);
  }

  async expectSupportWebLocateTsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.supportWebLocateTs), count, timeoutMs);
  }

  async clickTestCasesGitkeep(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.testCasesGitkeep));
  }

  async doubleClickTestCasesGitkeep(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.testCasesGitkeep));
  }

  async longPressTestCasesGitkeep(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.testCasesGitkeep));
  }

  async expectTestCasesGitkeepValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), value, timeoutMs);
  }

  async expectTestCasesGitkeepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), timeoutMs);
  }

  async expectTestCasesGitkeepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), timeoutMs);
  }

  async expectTestCasesGitkeepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), timeoutMs);
  }

  async expectTestCasesGitkeepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), timeoutMs);
  }

  async expectTestCasesGitkeepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), timeoutMs);
  }

  async expectTestCasesGitkeepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.testCasesGitkeep), count, timeoutMs);
  }

  async clickTestPlansGitkeep(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.testPlansGitkeep));
  }

  async doubleClickTestPlansGitkeep(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.testPlansGitkeep));
  }

  async longPressTestPlansGitkeep(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.testPlansGitkeep));
  }

  async expectTestPlansGitkeepValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), value, timeoutMs);
  }

  async expectTestPlansGitkeepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), timeoutMs);
  }

  async expectTestPlansGitkeepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), timeoutMs);
  }

  async expectTestPlansGitkeepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), timeoutMs);
  }

  async expectTestPlansGitkeepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), timeoutMs);
  }

  async expectTestPlansGitkeepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), timeoutMs);
  }

  async expectTestPlansGitkeepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.testPlansGitkeep), count, timeoutMs);
  }

  async clickTestdataTestDataJson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.testdataTestDataJson));
  }

  async doubleClickTestdataTestDataJson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.testdataTestDataJson));
  }

  async longPressTestdataTestDataJson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.testdataTestDataJson));
  }

  async expectTestdataTestDataJsonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), value, timeoutMs);
  }

  async expectTestdataTestDataJsonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), timeoutMs);
  }

  async expectTestdataTestDataJsonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), timeoutMs);
  }

  async expectTestdataTestDataJsonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), timeoutMs);
  }

  async expectTestdataTestDataJsonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), timeoutMs);
  }

  async expectTestdataTestDataJsonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), timeoutMs);
  }

  async expectTestdataTestDataJsonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.testdataTestDataJson), count, timeoutMs);
  }

  async clickTsconfigJson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.tsconfigJson));
  }

  async doubleClickTsconfigJson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.tsconfigJson));
  }

  async longPressTsconfigJson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.tsconfigJson));
  }

  async expectTsconfigJsonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.tsconfigJson), value, timeoutMs);
  }

  async expectTsconfigJsonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.tsconfigJson), timeoutMs);
  }

  async expectTsconfigJsonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.tsconfigJson), timeoutMs);
  }

  async expectTsconfigJsonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.tsconfigJson), timeoutMs);
  }

  async expectTsconfigJsonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.tsconfigJson), timeoutMs);
  }

  async expectTsconfigJsonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.tsconfigJson), timeoutMs);
  }

  async expectTsconfigJsonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.tsconfigJson), count, timeoutMs);
  }

  async clickUtilsDataUtilsTs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs));
  }

  async doubleClickUtilsDataUtilsTs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs));
  }

  async longPressUtilsDataUtilsTs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs));
  }

  async expectUtilsDataUtilsTsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), value, timeoutMs);
  }

  async expectUtilsDataUtilsTsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), timeoutMs);
  }

  async expectUtilsDataUtilsTsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), timeoutMs);
  }

  async expectUtilsDataUtilsTsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), timeoutMs);
  }

  async expectUtilsDataUtilsTsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), timeoutMs);
  }

  async expectUtilsDataUtilsTsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), timeoutMs);
  }

  async expectUtilsDataUtilsTsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.utilsDataUtilsTs), count, timeoutMs);
  }

  async clickLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2));
  }

  async doubleClickLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2));
  }

  async longPressLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2));
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), value, timeoutMs);
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), timeoutMs);
  }

  async expectLocalRunCdFrameworks93df1992A5754488B3af5309c4032ea2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.localRunCdFrameworks93df1992A5754488B3af5309c4032ea2), count, timeoutMs);
  }

  async longPressOpenProjectAssistant(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.openProjectAssistant), value, timeoutMs);
  }

  async expectOpenProjectAssistantChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.openProjectAssistant), count, timeoutMs);
  }

  async longPressOpenNextJsDevTools(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, FrameworksPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), value, timeoutMs);
  }

  async expectOpenNextJsDevToolsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, FrameworksPage.L.openNextJsDevTools), count, timeoutMs);
  }

}
