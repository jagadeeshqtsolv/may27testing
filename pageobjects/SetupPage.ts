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

export class SetupPage {
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
    setup: { strategy: 'text' as const, value: 'Setup', actionKind: 'text' as const },
    configureAIExecutionProvider: { strategy: 'text' as const, value: 'Configure AI, execution provider, Git integration,', actionKind: 'text' as const },
    completeSetupBeforeUsing: { strategy: 'text' as const, value: 'Complete setup before using this project', actionKind: 'text' as const },
    aIAddYour: { strategy: 'text' as const, value: 'AI — Add your OpenAI API key. Required for', actionKind: 'text' as const },
    aI: { strategy: 'role' as const, value: 'AI', role: 'button', actionKind: 'button' as const },
    executionChooseWhere: { strategy: 'text' as const, value: 'Execution — Choose where tests run: locally or on', actionKind: 'text' as const },
    execution: { strategy: 'role' as const, value: 'Execution', role: 'button', actionKind: 'button' as const },
    gitConnectYour: { strategy: 'text' as const, value: 'Git — Connect your repository so generated test', actionKind: 'text' as const },
    git: { strategy: 'role' as const, value: 'Git', role: 'button', actionKind: 'button' as const },
    environmentsDefineAt: { strategy: 'text' as const, value: 'Environments — Define at least one environment', actionKind: 'text' as const },
    environments: { strategy: 'role' as const, value: 'Environments', role: 'button', actionKind: 'button' as const },
    aI2: { strategy: 'role' as const, value: 'AI', role: 'button', actionKind: 'button' as const },
    execution2: { strategy: 'role' as const, value: 'Execution', role: 'button', actionKind: 'button' as const },
    git2: { strategy: 'role' as const, value: 'Git', role: 'button', actionKind: 'button' as const },
    environments2: { strategy: 'role' as const, value: 'Environments', role: 'button', actionKind: 'button' as const },
    jira: { strategy: 'role' as const, value: 'Jira', role: 'button', actionKind: 'button' as const },
    aIProvider: { strategy: 'text' as const, value: 'AI Provider', actionKind: 'text' as const },
    addYourOpenAIAPI: { strategy: 'text' as const, value: 'Add your OpenAI API key. Used for all test plan,', actionKind: 'text' as const },
    openAI: { strategy: 'testId' as const, value: 'ai-provider-tab-openai', actionKind: 'button' as const },
    gPT41GPT4oAndOther: { strategy: 'text' as const, value: 'GPT-4.1, GPT-4o, and other OpenAI models.', actionKind: 'text' as const },
    status: { strategy: 'text' as const, value: 'Status', actionKind: 'text' as const },
    notConfigured: { strategy: 'text' as const, value: 'Not configured', actionKind: 'text' as const },
    required: { strategy: 'text' as const, value: '(required)', actionKind: 'text' as const },
    aiSettingsApikey: { strategy: 'testId' as const, value: 'ai-settings-apikey-input', actionKind: 'textbox' as const },
    optional: { strategy: 'text' as const, value: '(optional)', actionKind: 'text' as const },
    aiSettingsModel: { strategy: 'testId' as const, value: 'ai-settings-model-input', actionKind: 'textbox' as const },
    saveActivateOpenAI: { strategy: 'testId' as const, value: 'ai-settings-save-btn', actionKind: 'button' as const },
    openProjectAssistant: { strategy: 'testId' as const, value: 'chat-toggle-btn', actionKind: 'button' as const },
    openNextJsDevTools: { strategy: 'css' as const, value: '#next-logo', shadowHost: 'nextjs-portal', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAUTOMATIONAIPROJECT(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), expected, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), substring, timeoutMs);
  }

  async scrollAUTOMATIONAIPROJECTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT));
  }

  async getInnerTextTest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.test));
  }

  async expectTestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.test), timeoutMs);
  }

  async expectTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.test), timeoutMs);
  }

  async expectTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.test), expected, timeoutMs);
  }

  async expectTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.test), substring, timeoutMs);
  }

  async scrollTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.test));
  }

  async getInnerTextCreated5272026121831PM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.created5272026121831PM), expected, timeoutMs);
  }

  async expectCreated5272026121831PMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.created5272026121831PM), substring, timeoutMs);
  }

  async scrollCreated5272026121831PMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.created5272026121831PM));
  }

  async clickAllProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.allProjects));
  }

  async doubleClickAllProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.allProjects));
  }

  async expectAllProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.allProjects), expected, timeoutMs);
  }

  async expectAllProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.allProjects), substring, timeoutMs);
  }

  async scrollAllProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.allProjects));
  }

  async clickDeleteProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.deleteProject));
  }

  async doubleClickDeleteProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.deleteProject));
  }

  async expectDeleteProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.deleteProject), expected, timeoutMs);
  }

  async expectDeleteProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.deleteProject), substring, timeoutMs);
  }

  async scrollDeleteProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.deleteProject));
  }

  async getInnerTextWORKSPACE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.wORKSPACE));
  }

  async expectWORKSPACEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.wORKSPACE), expected, timeoutMs);
  }

  async expectWORKSPACEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.wORKSPACE), substring, timeoutMs);
  }

  async scrollWORKSPACEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.wORKSPACE));
  }

  async getInnerTextAutomationAI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.automationAI));
  }

  async expectAutomationAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.automationAI), expected, timeoutMs);
  }

  async expectAutomationAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.automationAI), substring, timeoutMs);
  }

  async scrollAutomationAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.automationAI));
  }

  async clickOverviewProjectSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.overviewProjectSummary));
  }

  async doubleClickOverviewProjectSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.overviewProjectSummary), expected, timeoutMs);
  }

  async expectOverviewProjectSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.overviewProjectSummary), substring, timeoutMs);
  }

  async scrollOverviewProjectSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.overviewProjectSummary));
  }

  async clickSetup0APIKeys(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.setup0APIKeys));
  }

  async doubleClickSetup0APIKeys(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.setup0APIKeys), expected, timeoutMs);
  }

  async expectSetup0APIKeysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.setup0APIKeys), substring, timeoutMs);
  }

  async scrollSetup0APIKeysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.setup0APIKeys));
  }

  async clickRequirements0Write(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.requirements0Write));
  }

  async doubleClickRequirements0Write(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.requirements0Write));
  }

  async expectRequirements0WriteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.requirements0Write), expected, timeoutMs);
  }

  async expectRequirements0WriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.requirements0Write), substring, timeoutMs);
  }

  async scrollRequirements0WriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.requirements0Write));
  }

  async clickRecorderBrowserDOMCapture(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture));
  }

  async doubleClickRecorderBrowserDOMCapture(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), expected, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), substring, timeoutMs);
  }

  async scrollRecorderBrowserDOMCaptureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture));
  }

  async clickPageObjects0Browse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.pageObjects0Browse));
  }

  async doubleClickPageObjects0Browse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.pageObjects0Browse), expected, timeoutMs);
  }

  async expectPageObjects0BrowseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.pageObjects0Browse), substring, timeoutMs);
  }

  async scrollPageObjects0BrowseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.pageObjects0Browse));
  }

  async clickTestPlans0Review(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.testPlans0Review));
  }

  async doubleClickTestPlans0Review(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.testPlans0Review), expected, timeoutMs);
  }

  async expectTestPlans0ReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.testPlans0Review), substring, timeoutMs);
  }

  async scrollTestPlans0ReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.testPlans0Review));
  }

  async clickTestExecutionRunSpecs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.testExecutionRunSpecs));
  }

  async doubleClickTestExecutionRunSpecs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), expected, timeoutMs);
  }

  async expectTestExecutionRunSpecsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), substring, timeoutMs);
  }

  async scrollTestExecutionRunSpecsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.testExecutionRunSpecs));
  }

  async clickTestReportsHTMLReport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.testReportsHTMLReport));
  }

  async doubleClickTestReportsHTMLReport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.testReportsHTMLReport), expected, timeoutMs);
  }

  async expectTestReportsHTMLReportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.testReportsHTMLReport), substring, timeoutMs);
  }

  async scrollTestReportsHTMLReportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.testReportsHTMLReport));
  }

  async clickFrameworkZipFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.frameworkZipFiles));
  }

  async doubleClickFrameworkZipFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.frameworkZipFiles), expected, timeoutMs);
  }

  async expectFrameworkZipFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.frameworkZipFiles), substring, timeoutMs);
  }

  async scrollFrameworkZipFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.frameworkZipFiles));
  }

  async getInnerTextSetup(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.setup));
  }

  async expectSetupVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.setup), timeoutMs);
  }

  async expectSetupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.setup), timeoutMs);
  }

  async expectSetupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.setup), expected, timeoutMs);
  }

  async expectSetupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.setup), substring, timeoutMs);
  }

  async scrollSetupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.setup));
  }

  async getInnerTextConfigureAIExecutionProvider(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.configureAIExecutionProvider));
  }

  async expectConfigureAIExecutionProviderVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), timeoutMs);
  }

  async expectConfigureAIExecutionProviderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), timeoutMs);
  }

  async expectConfigureAIExecutionProviderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), expected, timeoutMs);
  }

  async expectConfigureAIExecutionProviderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), substring, timeoutMs);
  }

  async scrollConfigureAIExecutionProviderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.configureAIExecutionProvider));
  }

  async getInnerTextCompleteSetupBeforeUsing(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing));
  }

  async expectCompleteSetupBeforeUsingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), timeoutMs);
  }

  async expectCompleteSetupBeforeUsingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), timeoutMs);
  }

  async expectCompleteSetupBeforeUsingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), expected, timeoutMs);
  }

  async expectCompleteSetupBeforeUsingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), substring, timeoutMs);
  }

  async scrollCompleteSetupBeforeUsingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing));
  }

  async getInnerTextAIAddYour(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.aIAddYour));
  }

  async expectAIAddYourVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.aIAddYour), timeoutMs);
  }

  async expectAIAddYourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.aIAddYour), timeoutMs);
  }

  async expectAIAddYourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.aIAddYour), expected, timeoutMs);
  }

  async expectAIAddYourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.aIAddYour), substring, timeoutMs);
  }

  async scrollAIAddYourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.aIAddYour));
  }

  async clickAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.aI));
  }

  async doubleClickAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.aI));
  }

  async expectAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.aI), timeoutMs);
  }

  async expectAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.aI), timeoutMs);
  }

  async expectAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.aI), timeoutMs);
  }

  async expectAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.aI), timeoutMs);
  }

  async expectAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.aI), expected, timeoutMs);
  }

  async expectAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.aI), substring, timeoutMs);
  }

  async scrollAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.aI));
  }

  async getInnerTextExecutionChooseWhere(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.executionChooseWhere));
  }

  async expectExecutionChooseWhereVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.executionChooseWhere), timeoutMs);
  }

  async expectExecutionChooseWhereHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.executionChooseWhere), timeoutMs);
  }

  async expectExecutionChooseWhereText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.executionChooseWhere), expected, timeoutMs);
  }

  async expectExecutionChooseWhereContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.executionChooseWhere), substring, timeoutMs);
  }

  async scrollExecutionChooseWhereIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.executionChooseWhere));
  }

  async clickExecution(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.execution));
  }

  async doubleClickExecution(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.execution));
  }

  async expectExecutionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.execution), timeoutMs);
  }

  async expectExecutionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.execution), timeoutMs);
  }

  async expectExecutionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.execution), timeoutMs);
  }

  async expectExecutionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.execution), timeoutMs);
  }

  async expectExecutionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.execution), expected, timeoutMs);
  }

  async expectExecutionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.execution), substring, timeoutMs);
  }

  async scrollExecutionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.execution));
  }

  async getInnerTextGitConnectYour(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.gitConnectYour));
  }

  async expectGitConnectYourVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.gitConnectYour), timeoutMs);
  }

  async expectGitConnectYourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.gitConnectYour), timeoutMs);
  }

  async expectGitConnectYourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.gitConnectYour), expected, timeoutMs);
  }

  async expectGitConnectYourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.gitConnectYour), substring, timeoutMs);
  }

  async scrollGitConnectYourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.gitConnectYour));
  }

  async clickGit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.git));
  }

  async doubleClickGit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.git));
  }

  async expectGitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.git), timeoutMs);
  }

  async expectGitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.git), timeoutMs);
  }

  async expectGitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.git), timeoutMs);
  }

  async expectGitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.git), timeoutMs);
  }

  async expectGitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.git), expected, timeoutMs);
  }

  async expectGitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.git), substring, timeoutMs);
  }

  async scrollGitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.git));
  }

  async getInnerTextEnvironmentsDefineAt(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.environmentsDefineAt));
  }

  async expectEnvironmentsDefineAtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.environmentsDefineAt), timeoutMs);
  }

  async expectEnvironmentsDefineAtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.environmentsDefineAt), timeoutMs);
  }

  async expectEnvironmentsDefineAtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.environmentsDefineAt), expected, timeoutMs);
  }

  async expectEnvironmentsDefineAtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.environmentsDefineAt), substring, timeoutMs);
  }

  async scrollEnvironmentsDefineAtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.environmentsDefineAt));
  }

  async clickEnvironments(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.environments));
  }

  async doubleClickEnvironments(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.environments));
  }

  async expectEnvironmentsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.environments), timeoutMs);
  }

  async expectEnvironmentsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.environments), timeoutMs);
  }

  async expectEnvironmentsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.environments), timeoutMs);
  }

  async expectEnvironmentsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.environments), timeoutMs);
  }

  async expectEnvironmentsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.environments), expected, timeoutMs);
  }

  async expectEnvironmentsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.environments), substring, timeoutMs);
  }

  async scrollEnvironmentsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.environments));
  }

  async clickAI2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.aI2));
  }

  async doubleClickAI2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.aI2));
  }

  async expectAI2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.aI2), timeoutMs);
  }

  async expectAI2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.aI2), timeoutMs);
  }

  async expectAI2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.aI2), timeoutMs);
  }

  async expectAI2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.aI2), timeoutMs);
  }

  async expectAI2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.aI2), expected, timeoutMs);
  }

  async expectAI2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.aI2), substring, timeoutMs);
  }

  async scrollAI2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.aI2));
  }

  async clickExecution2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.execution2));
  }

  async doubleClickExecution2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.execution2));
  }

  async expectExecution2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.execution2), timeoutMs);
  }

  async expectExecution2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.execution2), timeoutMs);
  }

  async expectExecution2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.execution2), timeoutMs);
  }

  async expectExecution2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.execution2), timeoutMs);
  }

  async expectExecution2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.execution2), expected, timeoutMs);
  }

  async expectExecution2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.execution2), substring, timeoutMs);
  }

  async scrollExecution2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.execution2));
  }

  async clickGit2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.git2));
  }

  async doubleClickGit2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.git2));
  }

  async expectGit2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.git2), timeoutMs);
  }

  async expectGit2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.git2), timeoutMs);
  }

  async expectGit2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.git2), timeoutMs);
  }

  async expectGit2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.git2), timeoutMs);
  }

  async expectGit2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.git2), expected, timeoutMs);
  }

  async expectGit2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.git2), substring, timeoutMs);
  }

  async scrollGit2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.git2));
  }

  async clickEnvironments2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.environments2));
  }

  async doubleClickEnvironments2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.environments2));
  }

  async expectEnvironments2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.environments2), timeoutMs);
  }

  async expectEnvironments2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.environments2), timeoutMs);
  }

  async expectEnvironments2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.environments2), timeoutMs);
  }

  async expectEnvironments2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.environments2), timeoutMs);
  }

  async expectEnvironments2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.environments2), expected, timeoutMs);
  }

  async expectEnvironments2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.environments2), substring, timeoutMs);
  }

  async scrollEnvironments2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.environments2));
  }

  async clickJira(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.jira));
  }

  async doubleClickJira(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.jira));
  }

  async expectJiraVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.jira), timeoutMs);
  }

  async expectJiraHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.jira), timeoutMs);
  }

  async expectJiraEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.jira), timeoutMs);
  }

  async expectJiraDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.jira), timeoutMs);
  }

  async expectJiraText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.jira), expected, timeoutMs);
  }

  async expectJiraContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.jira), substring, timeoutMs);
  }

  async scrollJiraIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.jira));
  }

  async getInnerTextAIProvider(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.aIProvider));
  }

  async expectAIProviderVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.aIProvider), timeoutMs);
  }

  async expectAIProviderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.aIProvider), timeoutMs);
  }

  async expectAIProviderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.aIProvider), expected, timeoutMs);
  }

  async expectAIProviderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.aIProvider), substring, timeoutMs);
  }

  async scrollAIProviderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.aIProvider));
  }

  async getInnerTextAddYourOpenAIAPI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.addYourOpenAIAPI));
  }

  async expectAddYourOpenAIAPIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), timeoutMs);
  }

  async expectAddYourOpenAIAPIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), timeoutMs);
  }

  async expectAddYourOpenAIAPIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), expected, timeoutMs);
  }

  async expectAddYourOpenAIAPIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), substring, timeoutMs);
  }

  async scrollAddYourOpenAIAPIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.addYourOpenAIAPI));
  }

  async clickOpenAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.openAI));
  }

  async doubleClickOpenAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.openAI));
  }

  async expectOpenAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.openAI), timeoutMs);
  }

  async expectOpenAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.openAI), timeoutMs);
  }

  async expectOpenAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.openAI), timeoutMs);
  }

  async expectOpenAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.openAI), timeoutMs);
  }

  async expectOpenAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.openAI), expected, timeoutMs);
  }

  async expectOpenAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.openAI), substring, timeoutMs);
  }

  async scrollOpenAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.openAI));
  }

  async getInnerTextGPT41GPT4oAndOther(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther));
  }

  async expectGPT41GPT4oAndOtherVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), timeoutMs);
  }

  async expectGPT41GPT4oAndOtherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), timeoutMs);
  }

  async expectGPT41GPT4oAndOtherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), expected, timeoutMs);
  }

  async expectGPT41GPT4oAndOtherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), substring, timeoutMs);
  }

  async scrollGPT41GPT4oAndOtherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther));
  }

  async getInnerTextStatus(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.status));
  }

  async expectStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.status), timeoutMs);
  }

  async expectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.status), timeoutMs);
  }

  async expectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.status), expected, timeoutMs);
  }

  async expectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.status), substring, timeoutMs);
  }

  async scrollStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.status));
  }

  async getInnerTextNotConfigured(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.notConfigured));
  }

  async expectNotConfiguredVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.notConfigured), timeoutMs);
  }

  async expectNotConfiguredHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.notConfigured), timeoutMs);
  }

  async expectNotConfiguredText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.notConfigured), expected, timeoutMs);
  }

  async expectNotConfiguredContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.notConfigured), substring, timeoutMs);
  }

  async scrollNotConfiguredIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.notConfigured));
  }

  async getInnerTextRequired(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.required));
  }

  async expectRequiredVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.required), timeoutMs);
  }

  async expectRequiredHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.required), timeoutMs);
  }

  async expectRequiredText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.required), expected, timeoutMs);
  }

  async expectRequiredContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.required), substring, timeoutMs);
  }

  async scrollRequiredIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.required));
  }

  async fillAiSettingsApikey(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SetupPage.L.aiSettingsApikey), value);
  }

  async clearAiSettingsApikey(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SetupPage.L.aiSettingsApikey));
  }

  async typeTextAiSettingsApikey(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SetupPage.L.aiSettingsApikey), value);
  }

  async expectAiSettingsApikeyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.aiSettingsApikey), timeoutMs);
  }

  async expectAiSettingsApikeyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.aiSettingsApikey), timeoutMs);
  }

  async expectAiSettingsApikeyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.aiSettingsApikey), timeoutMs);
  }

  async expectAiSettingsApikeyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.aiSettingsApikey), timeoutMs);
  }

  async expectAiSettingsApikeyValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.aiSettingsApikey), expected, timeoutMs);
  }

  async expectAiSettingsApikeyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.aiSettingsApikey), timeoutMs);
  }

  async scrollAiSettingsApikeyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.aiSettingsApikey));
  }

  async getInnerTextOptional(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SetupPage.L.optional));
  }

  async expectOptionalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.optional), timeoutMs);
  }

  async expectOptionalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.optional), timeoutMs);
  }

  async expectOptionalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.optional), expected, timeoutMs);
  }

  async expectOptionalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.optional), substring, timeoutMs);
  }

  async scrollOptionalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.optional));
  }

  async fillAiSettingsModel(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SetupPage.L.aiSettingsModel), value);
  }

  async clearAiSettingsModel(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SetupPage.L.aiSettingsModel));
  }

  async typeTextAiSettingsModel(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SetupPage.L.aiSettingsModel), value);
  }

  async expectAiSettingsModelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.aiSettingsModel), timeoutMs);
  }

  async expectAiSettingsModelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.aiSettingsModel), timeoutMs);
  }

  async expectAiSettingsModelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.aiSettingsModel), timeoutMs);
  }

  async expectAiSettingsModelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.aiSettingsModel), timeoutMs);
  }

  async expectAiSettingsModelValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.aiSettingsModel), expected, timeoutMs);
  }

  async expectAiSettingsModelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.aiSettingsModel), timeoutMs);
  }

  async scrollAiSettingsModelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.aiSettingsModel));
  }

  async clickSaveActivateOpenAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.saveActivateOpenAI));
  }

  async doubleClickSaveActivateOpenAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.saveActivateOpenAI));
  }

  async expectSaveActivateOpenAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.saveActivateOpenAI), timeoutMs);
  }

  async expectSaveActivateOpenAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.saveActivateOpenAI), timeoutMs);
  }

  async expectSaveActivateOpenAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.saveActivateOpenAI), timeoutMs);
  }

  async expectSaveActivateOpenAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.saveActivateOpenAI), timeoutMs);
  }

  async expectSaveActivateOpenAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.saveActivateOpenAI), expected, timeoutMs);
  }

  async expectSaveActivateOpenAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.saveActivateOpenAI), substring, timeoutMs);
  }

  async scrollSaveActivateOpenAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.saveActivateOpenAI));
  }

  async clickOpenProjectAssistant(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.openProjectAssistant));
  }

  async doubleClickOpenProjectAssistant(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.openProjectAssistant), expected, timeoutMs);
  }

  async expectOpenProjectAssistantContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.openProjectAssistant), substring, timeoutMs);
  }

  async scrollOpenProjectAssistantIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.openProjectAssistant));
  }

  async clickOpenNextJsDevTools(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.openNextJsDevTools));
  }

  async doubleClickOpenNextJsDevTools(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SetupPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SetupPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.openNextJsDevTools), expected, timeoutMs);
  }

  async expectOpenNextJsDevToolsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.openNextJsDevTools), substring, timeoutMs);
  }

  async scrollOpenNextJsDevToolsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SetupPage.L.openNextJsDevTools));
  }


  async clickAUTOMATIONAIPROJECT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT));
  }

  async doubleClickAUTOMATIONAIPROJECT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT));
  }

  async longPressAUTOMATIONAIPROJECT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), value, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.aUTOMATIONAIPROJECT), count, timeoutMs);
  }

  async clickTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.test));
  }

  async doubleClickTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.test));
  }

  async longPressTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.test));
  }

  async expectTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.test), value, timeoutMs);
  }

  async expectTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.test), timeoutMs);
  }

  async expectTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.test), timeoutMs);
  }

  async expectTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.test), timeoutMs);
  }

  async expectTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.test), timeoutMs);
  }

  async expectTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.test), timeoutMs);
  }

  async expectTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.test), count, timeoutMs);
  }

  async clickCreated5272026121831PM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.created5272026121831PM));
  }

  async doubleClickCreated5272026121831PM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.created5272026121831PM));
  }

  async longPressCreated5272026121831PM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.created5272026121831PM), value, timeoutMs);
  }

  async expectCreated5272026121831PMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.created5272026121831PM), count, timeoutMs);
  }

  async longPressAllProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.allProjects));
  }

  async expectAllProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.allProjects), value, timeoutMs);
  }

  async expectAllProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.allProjects), count, timeoutMs);
  }

  async longPressDeleteProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.deleteProject));
  }

  async expectDeleteProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.deleteProject), value, timeoutMs);
  }

  async expectDeleteProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.deleteProject), count, timeoutMs);
  }

  async clickWORKSPACE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.wORKSPACE));
  }

  async doubleClickWORKSPACE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.wORKSPACE));
  }

  async longPressWORKSPACE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.wORKSPACE));
  }

  async expectWORKSPACEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.wORKSPACE), value, timeoutMs);
  }

  async expectWORKSPACEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.wORKSPACE), count, timeoutMs);
  }

  async clickAutomationAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.automationAI));
  }

  async doubleClickAutomationAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.automationAI));
  }

  async longPressAutomationAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.automationAI));
  }

  async expectAutomationAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.automationAI), value, timeoutMs);
  }

  async expectAutomationAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.automationAI), count, timeoutMs);
  }

  async longPressOverviewProjectSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.overviewProjectSummary), value, timeoutMs);
  }

  async expectOverviewProjectSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.overviewProjectSummary), count, timeoutMs);
  }

  async longPressSetup0APIKeys(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.setup0APIKeys), value, timeoutMs);
  }

  async expectSetup0APIKeysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.setup0APIKeys), count, timeoutMs);
  }

  async longPressRequirements0Write(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.requirements0Write));
  }

  async expectRequirements0WriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.requirements0Write), value, timeoutMs);
  }

  async expectRequirements0WriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.requirements0Write), count, timeoutMs);
  }

  async longPressRecorderBrowserDOMCapture(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), value, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.recorderBrowserDOMCapture), count, timeoutMs);
  }

  async longPressPageObjects0Browse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.pageObjects0Browse), value, timeoutMs);
  }

  async expectPageObjects0BrowseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.pageObjects0Browse), count, timeoutMs);
  }

  async longPressTestPlans0Review(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.testPlans0Review), value, timeoutMs);
  }

  async expectTestPlans0ReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.testPlans0Review), count, timeoutMs);
  }

  async longPressTestExecutionRunSpecs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), value, timeoutMs);
  }

  async expectTestExecutionRunSpecsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.testExecutionRunSpecs), count, timeoutMs);
  }

  async longPressTestReportsHTMLReport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.testReportsHTMLReport), value, timeoutMs);
  }

  async expectTestReportsHTMLReportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.testReportsHTMLReport), count, timeoutMs);
  }

  async longPressFrameworkZipFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.frameworkZipFiles), value, timeoutMs);
  }

  async expectFrameworkZipFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.frameworkZipFiles), count, timeoutMs);
  }

  async clickSetup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.setup));
  }

  async doubleClickSetup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.setup));
  }

  async longPressSetup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.setup));
  }

  async expectSetupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.setup), value, timeoutMs);
  }

  async expectSetupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.setup), timeoutMs);
  }

  async expectSetupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.setup), timeoutMs);
  }

  async expectSetupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.setup), timeoutMs);
  }

  async expectSetupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.setup), timeoutMs);
  }

  async expectSetupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.setup), timeoutMs);
  }

  async expectSetupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.setup), count, timeoutMs);
  }

  async clickConfigureAIExecutionProvider(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.configureAIExecutionProvider));
  }

  async doubleClickConfigureAIExecutionProvider(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.configureAIExecutionProvider));
  }

  async longPressConfigureAIExecutionProvider(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.configureAIExecutionProvider));
  }

  async expectConfigureAIExecutionProviderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), value, timeoutMs);
  }

  async expectConfigureAIExecutionProviderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), timeoutMs);
  }

  async expectConfigureAIExecutionProviderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), timeoutMs);
  }

  async expectConfigureAIExecutionProviderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), timeoutMs);
  }

  async expectConfigureAIExecutionProviderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), timeoutMs);
  }

  async expectConfigureAIExecutionProviderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), timeoutMs);
  }

  async expectConfigureAIExecutionProviderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.configureAIExecutionProvider), count, timeoutMs);
  }

  async clickCompleteSetupBeforeUsing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing));
  }

  async doubleClickCompleteSetupBeforeUsing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing));
  }

  async longPressCompleteSetupBeforeUsing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing));
  }

  async expectCompleteSetupBeforeUsingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), value, timeoutMs);
  }

  async expectCompleteSetupBeforeUsingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), timeoutMs);
  }

  async expectCompleteSetupBeforeUsingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), timeoutMs);
  }

  async expectCompleteSetupBeforeUsingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), timeoutMs);
  }

  async expectCompleteSetupBeforeUsingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), timeoutMs);
  }

  async expectCompleteSetupBeforeUsingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), timeoutMs);
  }

  async expectCompleteSetupBeforeUsingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.completeSetupBeforeUsing), count, timeoutMs);
  }

  async clickAIAddYour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.aIAddYour));
  }

  async doubleClickAIAddYour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.aIAddYour));
  }

  async longPressAIAddYour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.aIAddYour));
  }

  async expectAIAddYourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.aIAddYour), value, timeoutMs);
  }

  async expectAIAddYourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.aIAddYour), timeoutMs);
  }

  async expectAIAddYourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.aIAddYour), timeoutMs);
  }

  async expectAIAddYourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.aIAddYour), timeoutMs);
  }

  async expectAIAddYourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.aIAddYour), timeoutMs);
  }

  async expectAIAddYourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.aIAddYour), timeoutMs);
  }

  async expectAIAddYourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.aIAddYour), count, timeoutMs);
  }

  async longPressAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.aI));
  }

  async expectAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.aI), value, timeoutMs);
  }

  async expectAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.aI), timeoutMs);
  }

  async expectAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.aI), timeoutMs);
  }

  async expectAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.aI), timeoutMs);
  }

  async expectAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.aI), count, timeoutMs);
  }

  async clickExecutionChooseWhere(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.executionChooseWhere));
  }

  async doubleClickExecutionChooseWhere(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.executionChooseWhere));
  }

  async longPressExecutionChooseWhere(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.executionChooseWhere));
  }

  async expectExecutionChooseWhereValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.executionChooseWhere), value, timeoutMs);
  }

  async expectExecutionChooseWhereEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.executionChooseWhere), timeoutMs);
  }

  async expectExecutionChooseWhereDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.executionChooseWhere), timeoutMs);
  }

  async expectExecutionChooseWhereChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.executionChooseWhere), timeoutMs);
  }

  async expectExecutionChooseWhereUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.executionChooseWhere), timeoutMs);
  }

  async expectExecutionChooseWhereFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.executionChooseWhere), timeoutMs);
  }

  async expectExecutionChooseWhereCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.executionChooseWhere), count, timeoutMs);
  }

  async longPressExecution(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.execution));
  }

  async expectExecutionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.execution), value, timeoutMs);
  }

  async expectExecutionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.execution), timeoutMs);
  }

  async expectExecutionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.execution), timeoutMs);
  }

  async expectExecutionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.execution), timeoutMs);
  }

  async expectExecutionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.execution), count, timeoutMs);
  }

  async clickGitConnectYour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.gitConnectYour));
  }

  async doubleClickGitConnectYour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.gitConnectYour));
  }

  async longPressGitConnectYour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.gitConnectYour));
  }

  async expectGitConnectYourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.gitConnectYour), value, timeoutMs);
  }

  async expectGitConnectYourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.gitConnectYour), timeoutMs);
  }

  async expectGitConnectYourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.gitConnectYour), timeoutMs);
  }

  async expectGitConnectYourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.gitConnectYour), timeoutMs);
  }

  async expectGitConnectYourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.gitConnectYour), timeoutMs);
  }

  async expectGitConnectYourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.gitConnectYour), timeoutMs);
  }

  async expectGitConnectYourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.gitConnectYour), count, timeoutMs);
  }

  async longPressGit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.git));
  }

  async expectGitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.git), value, timeoutMs);
  }

  async expectGitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.git), timeoutMs);
  }

  async expectGitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.git), timeoutMs);
  }

  async expectGitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.git), timeoutMs);
  }

  async expectGitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.git), count, timeoutMs);
  }

  async clickEnvironmentsDefineAt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.environmentsDefineAt));
  }

  async doubleClickEnvironmentsDefineAt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.environmentsDefineAt));
  }

  async longPressEnvironmentsDefineAt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.environmentsDefineAt));
  }

  async expectEnvironmentsDefineAtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.environmentsDefineAt), value, timeoutMs);
  }

  async expectEnvironmentsDefineAtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.environmentsDefineAt), timeoutMs);
  }

  async expectEnvironmentsDefineAtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.environmentsDefineAt), timeoutMs);
  }

  async expectEnvironmentsDefineAtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.environmentsDefineAt), timeoutMs);
  }

  async expectEnvironmentsDefineAtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.environmentsDefineAt), timeoutMs);
  }

  async expectEnvironmentsDefineAtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.environmentsDefineAt), timeoutMs);
  }

  async expectEnvironmentsDefineAtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.environmentsDefineAt), count, timeoutMs);
  }

  async longPressEnvironments(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.environments));
  }

  async expectEnvironmentsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.environments), value, timeoutMs);
  }

  async expectEnvironmentsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.environments), timeoutMs);
  }

  async expectEnvironmentsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.environments), timeoutMs);
  }

  async expectEnvironmentsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.environments), timeoutMs);
  }

  async expectEnvironmentsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.environments), count, timeoutMs);
  }

  async longPressAI2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.aI2));
  }

  async expectAI2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.aI2), value, timeoutMs);
  }

  async expectAI2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.aI2), timeoutMs);
  }

  async expectAI2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.aI2), timeoutMs);
  }

  async expectAI2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.aI2), timeoutMs);
  }

  async expectAI2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.aI2), count, timeoutMs);
  }

  async longPressExecution2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.execution2));
  }

  async expectExecution2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.execution2), value, timeoutMs);
  }

  async expectExecution2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.execution2), timeoutMs);
  }

  async expectExecution2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.execution2), timeoutMs);
  }

  async expectExecution2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.execution2), timeoutMs);
  }

  async expectExecution2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.execution2), count, timeoutMs);
  }

  async longPressGit2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.git2));
  }

  async expectGit2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.git2), value, timeoutMs);
  }

  async expectGit2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.git2), timeoutMs);
  }

  async expectGit2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.git2), timeoutMs);
  }

  async expectGit2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.git2), timeoutMs);
  }

  async expectGit2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.git2), count, timeoutMs);
  }

  async longPressEnvironments2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.environments2));
  }

  async expectEnvironments2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.environments2), value, timeoutMs);
  }

  async expectEnvironments2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.environments2), timeoutMs);
  }

  async expectEnvironments2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.environments2), timeoutMs);
  }

  async expectEnvironments2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.environments2), timeoutMs);
  }

  async expectEnvironments2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.environments2), count, timeoutMs);
  }

  async longPressJira(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.jira));
  }

  async expectJiraValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.jira), value, timeoutMs);
  }

  async expectJiraChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.jira), timeoutMs);
  }

  async expectJiraUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.jira), timeoutMs);
  }

  async expectJiraFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.jira), timeoutMs);
  }

  async expectJiraCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.jira), count, timeoutMs);
  }

  async clickAIProvider(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.aIProvider));
  }

  async doubleClickAIProvider(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.aIProvider));
  }

  async longPressAIProvider(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.aIProvider));
  }

  async expectAIProviderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.aIProvider), value, timeoutMs);
  }

  async expectAIProviderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.aIProvider), timeoutMs);
  }

  async expectAIProviderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.aIProvider), timeoutMs);
  }

  async expectAIProviderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.aIProvider), timeoutMs);
  }

  async expectAIProviderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.aIProvider), timeoutMs);
  }

  async expectAIProviderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.aIProvider), timeoutMs);
  }

  async expectAIProviderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.aIProvider), count, timeoutMs);
  }

  async clickAddYourOpenAIAPI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.addYourOpenAIAPI));
  }

  async doubleClickAddYourOpenAIAPI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.addYourOpenAIAPI));
  }

  async longPressAddYourOpenAIAPI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.addYourOpenAIAPI));
  }

  async expectAddYourOpenAIAPIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), value, timeoutMs);
  }

  async expectAddYourOpenAIAPIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), timeoutMs);
  }

  async expectAddYourOpenAIAPIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), timeoutMs);
  }

  async expectAddYourOpenAIAPIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), timeoutMs);
  }

  async expectAddYourOpenAIAPIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), timeoutMs);
  }

  async expectAddYourOpenAIAPIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), timeoutMs);
  }

  async expectAddYourOpenAIAPICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.addYourOpenAIAPI), count, timeoutMs);
  }

  async longPressOpenAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.openAI));
  }

  async expectOpenAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.openAI), value, timeoutMs);
  }

  async expectOpenAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.openAI), timeoutMs);
  }

  async expectOpenAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.openAI), timeoutMs);
  }

  async expectOpenAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.openAI), timeoutMs);
  }

  async expectOpenAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.openAI), count, timeoutMs);
  }

  async clickGPT41GPT4oAndOther(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther));
  }

  async doubleClickGPT41GPT4oAndOther(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther));
  }

  async longPressGPT41GPT4oAndOther(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther));
  }

  async expectGPT41GPT4oAndOtherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), value, timeoutMs);
  }

  async expectGPT41GPT4oAndOtherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), timeoutMs);
  }

  async expectGPT41GPT4oAndOtherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), timeoutMs);
  }

  async expectGPT41GPT4oAndOtherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), timeoutMs);
  }

  async expectGPT41GPT4oAndOtherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), timeoutMs);
  }

  async expectGPT41GPT4oAndOtherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), timeoutMs);
  }

  async expectGPT41GPT4oAndOtherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.gPT41GPT4oAndOther), count, timeoutMs);
  }

  async clickStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.status));
  }

  async doubleClickStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.status));
  }

  async longPressStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.status));
  }

  async expectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.status), value, timeoutMs);
  }

  async expectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.status), timeoutMs);
  }

  async expectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.status), timeoutMs);
  }

  async expectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.status), timeoutMs);
  }

  async expectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.status), timeoutMs);
  }

  async expectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.status), timeoutMs);
  }

  async expectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.status), count, timeoutMs);
  }

  async clickNotConfigured(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.notConfigured));
  }

  async doubleClickNotConfigured(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.notConfigured));
  }

  async longPressNotConfigured(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.notConfigured));
  }

  async expectNotConfiguredValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.notConfigured), value, timeoutMs);
  }

  async expectNotConfiguredEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.notConfigured), timeoutMs);
  }

  async expectNotConfiguredDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.notConfigured), timeoutMs);
  }

  async expectNotConfiguredChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.notConfigured), timeoutMs);
  }

  async expectNotConfiguredUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.notConfigured), timeoutMs);
  }

  async expectNotConfiguredFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.notConfigured), timeoutMs);
  }

  async expectNotConfiguredCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.notConfigured), count, timeoutMs);
  }

  async clickRequired(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.required));
  }

  async doubleClickRequired(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.required));
  }

  async longPressRequired(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.required));
  }

  async expectRequiredValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.required), value, timeoutMs);
  }

  async expectRequiredEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.required), timeoutMs);
  }

  async expectRequiredDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.required), timeoutMs);
  }

  async expectRequiredChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.required), timeoutMs);
  }

  async expectRequiredUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.required), timeoutMs);
  }

  async expectRequiredFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.required), timeoutMs);
  }

  async expectRequiredCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.required), count, timeoutMs);
  }

  async expectAiSettingsApikeyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.aiSettingsApikey), expected, timeoutMs);
  }

  async expectAiSettingsApikeyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.aiSettingsApikey), substring, timeoutMs);
  }

  async expectAiSettingsApikeyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.aiSettingsApikey), timeoutMs);
  }

  async expectAiSettingsApikeyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.aiSettingsApikey), timeoutMs);
  }

  async expectAiSettingsApikeyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.aiSettingsApikey), count, timeoutMs);
  }

  async clickOptional(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SetupPage.L.optional));
  }

  async doubleClickOptional(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SetupPage.L.optional));
  }

  async longPressOptional(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.optional));
  }

  async expectOptionalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.optional), value, timeoutMs);
  }

  async expectOptionalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SetupPage.L.optional), timeoutMs);
  }

  async expectOptionalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SetupPage.L.optional), timeoutMs);
  }

  async expectOptionalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.optional), timeoutMs);
  }

  async expectOptionalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.optional), timeoutMs);
  }

  async expectOptionalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.optional), timeoutMs);
  }

  async expectOptionalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.optional), count, timeoutMs);
  }

  async expectAiSettingsModelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SetupPage.L.aiSettingsModel), expected, timeoutMs);
  }

  async expectAiSettingsModelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SetupPage.L.aiSettingsModel), substring, timeoutMs);
  }

  async expectAiSettingsModelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.aiSettingsModel), timeoutMs);
  }

  async expectAiSettingsModelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.aiSettingsModel), timeoutMs);
  }

  async expectAiSettingsModelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.aiSettingsModel), count, timeoutMs);
  }

  async longPressSaveActivateOpenAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.saveActivateOpenAI));
  }

  async expectSaveActivateOpenAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.saveActivateOpenAI), value, timeoutMs);
  }

  async expectSaveActivateOpenAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.saveActivateOpenAI), timeoutMs);
  }

  async expectSaveActivateOpenAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.saveActivateOpenAI), timeoutMs);
  }

  async expectSaveActivateOpenAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.saveActivateOpenAI), timeoutMs);
  }

  async expectSaveActivateOpenAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.saveActivateOpenAI), count, timeoutMs);
  }

  async longPressOpenProjectAssistant(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.openProjectAssistant), value, timeoutMs);
  }

  async expectOpenProjectAssistantChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.openProjectAssistant), count, timeoutMs);
  }

  async longPressOpenNextJsDevTools(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SetupPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SetupPage.L.openNextJsDevTools), value, timeoutMs);
  }

  async expectOpenNextJsDevToolsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SetupPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SetupPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SetupPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SetupPage.L.openNextJsDevTools), count, timeoutMs);
  }

}
