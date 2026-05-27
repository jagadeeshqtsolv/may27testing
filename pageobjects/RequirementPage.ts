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

export class RequirementPage {
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
    requirements: { strategy: 'text' as const, value: 'Requirements', actionKind: 'text' as const },
    captureProductIntentThen: { strategy: 'text' as const, value: 'Capture product intent, then generate structured', actionKind: 'text' as const },
    testPlans: { strategy: 'testId' as const, value: 'requirements-view-testplans-link', actionKind: 'button' as const },
    importFromJira: { strategy: 'testId' as const, value: 'jira-import-toggle-btn', actionKind: 'button' as const },
    newRequirement: { strategy: 'text' as const, value: 'New requirement', actionKind: 'text' as const },
    pastePRDSnippetsAcceptance: { strategy: 'text' as const, value: 'Paste PRD snippets, acceptance criteria, or user', actionKind: 'text' as const },
    input: { strategy: 'placeholder' as const, value: 'Guest checkout', actionKind: 'textbox' as const },
    textarea: { strategy: 'placeholder' as const, value: 'As a shopper, I can …', actionKind: 'textbox' as const },
    saveRequirement: { strategy: 'role' as const, value: 'Save requirement', role: 'button', actionKind: 'button' as const },
    savedRequirements: { strategy: 'text' as const, value: 'Saved requirements', actionKind: 'text' as const },
    refresh: { strategy: 'testId' as const, value: 'requirements-refresh-btn', actionKind: 'button' as const },
    noRequirementsYet: { strategy: 'text' as const, value: 'No requirements yet.', actionKind: 'text' as const },
    openProjectAssistant: { strategy: 'testId' as const, value: 'chat-toggle-btn', actionKind: 'button' as const },
    openNextJsDevTools: { strategy: 'css' as const, value: '#next-logo', shadowHost: 'nextjs-portal', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextAUTOMATIONAIPROJECT(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), expected, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), substring, timeoutMs);
  }

  async scrollAUTOMATIONAIPROJECTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT));
  }

  async getInnerTextTest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.test));
  }

  async expectTestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.test), timeoutMs);
  }

  async expectTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.test), timeoutMs);
  }

  async expectTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.test), expected, timeoutMs);
  }

  async expectTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.test), substring, timeoutMs);
  }

  async scrollTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.test));
  }

  async getInnerTextCreated5272026121831PM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.created5272026121831PM), expected, timeoutMs);
  }

  async expectCreated5272026121831PMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.created5272026121831PM), substring, timeoutMs);
  }

  async scrollCreated5272026121831PMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.created5272026121831PM));
  }

  async clickAllProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.allProjects));
  }

  async doubleClickAllProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.allProjects));
  }

  async expectAllProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.allProjects), expected, timeoutMs);
  }

  async expectAllProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.allProjects), substring, timeoutMs);
  }

  async scrollAllProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.allProjects));
  }

  async clickDeleteProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.deleteProject));
  }

  async doubleClickDeleteProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.deleteProject));
  }

  async expectDeleteProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.deleteProject), expected, timeoutMs);
  }

  async expectDeleteProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.deleteProject), substring, timeoutMs);
  }

  async scrollDeleteProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.deleteProject));
  }

  async getInnerTextWORKSPACE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.wORKSPACE));
  }

  async expectWORKSPACEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.wORKSPACE), expected, timeoutMs);
  }

  async expectWORKSPACEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.wORKSPACE), substring, timeoutMs);
  }

  async scrollWORKSPACEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.wORKSPACE));
  }

  async getInnerTextAutomationAI(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.automationAI));
  }

  async expectAutomationAIVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.automationAI), expected, timeoutMs);
  }

  async expectAutomationAIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.automationAI), substring, timeoutMs);
  }

  async scrollAutomationAIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.automationAI));
  }

  async clickOverviewProjectSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.overviewProjectSummary));
  }

  async doubleClickOverviewProjectSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.overviewProjectSummary), expected, timeoutMs);
  }

  async expectOverviewProjectSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.overviewProjectSummary), substring, timeoutMs);
  }

  async scrollOverviewProjectSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.overviewProjectSummary));
  }

  async clickSetup0APIKeys(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.setup0APIKeys));
  }

  async doubleClickSetup0APIKeys(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.setup0APIKeys), expected, timeoutMs);
  }

  async expectSetup0APIKeysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.setup0APIKeys), substring, timeoutMs);
  }

  async scrollSetup0APIKeysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.setup0APIKeys));
  }

  async clickRequirements0Write(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.requirements0Write));
  }

  async doubleClickRequirements0Write(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.requirements0Write));
  }

  async expectRequirements0WriteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.requirements0Write), expected, timeoutMs);
  }

  async expectRequirements0WriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.requirements0Write), substring, timeoutMs);
  }

  async scrollRequirements0WriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.requirements0Write));
  }

  async clickRecorderBrowserDOMCapture(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture));
  }

  async doubleClickRecorderBrowserDOMCapture(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), expected, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), substring, timeoutMs);
  }

  async scrollRecorderBrowserDOMCaptureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture));
  }

  async clickPageObjects0Browse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.pageObjects0Browse));
  }

  async doubleClickPageObjects0Browse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.pageObjects0Browse), expected, timeoutMs);
  }

  async expectPageObjects0BrowseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.pageObjects0Browse), substring, timeoutMs);
  }

  async scrollPageObjects0BrowseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.pageObjects0Browse));
  }

  async clickTestPlans0Review(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.testPlans0Review));
  }

  async doubleClickTestPlans0Review(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.testPlans0Review), expected, timeoutMs);
  }

  async expectTestPlans0ReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.testPlans0Review), substring, timeoutMs);
  }

  async scrollTestPlans0ReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.testPlans0Review));
  }

  async clickTestExecutionRunSpecs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs));
  }

  async doubleClickTestExecutionRunSpecs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), expected, timeoutMs);
  }

  async expectTestExecutionRunSpecsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), substring, timeoutMs);
  }

  async scrollTestExecutionRunSpecsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs));
  }

  async clickTestReportsHTMLReport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.testReportsHTMLReport));
  }

  async doubleClickTestReportsHTMLReport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), expected, timeoutMs);
  }

  async expectTestReportsHTMLReportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), substring, timeoutMs);
  }

  async scrollTestReportsHTMLReportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.testReportsHTMLReport));
  }

  async clickFrameworkZipFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.frameworkZipFiles));
  }

  async doubleClickFrameworkZipFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.frameworkZipFiles), expected, timeoutMs);
  }

  async expectFrameworkZipFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.frameworkZipFiles), substring, timeoutMs);
  }

  async scrollFrameworkZipFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.frameworkZipFiles));
  }

  async getInnerTextRequirements(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.requirements));
  }

  async expectRequirementsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.requirements), timeoutMs);
  }

  async expectRequirementsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.requirements), timeoutMs);
  }

  async expectRequirementsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.requirements), expected, timeoutMs);
  }

  async expectRequirementsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.requirements), substring, timeoutMs);
  }

  async scrollRequirementsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.requirements));
  }

  async getInnerTextCaptureProductIntentThen(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.captureProductIntentThen));
  }

  async expectCaptureProductIntentThenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.captureProductIntentThen), timeoutMs);
  }

  async expectCaptureProductIntentThenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.captureProductIntentThen), timeoutMs);
  }

  async expectCaptureProductIntentThenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.captureProductIntentThen), expected, timeoutMs);
  }

  async expectCaptureProductIntentThenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.captureProductIntentThen), substring, timeoutMs);
  }

  async scrollCaptureProductIntentThenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.captureProductIntentThen));
  }

  async clickTestPlans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.testPlans));
  }

  async doubleClickTestPlans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.testPlans));
  }

  async expectTestPlansVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.testPlans), timeoutMs);
  }

  async expectTestPlansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.testPlans), timeoutMs);
  }

  async expectTestPlansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.testPlans), timeoutMs);
  }

  async expectTestPlansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.testPlans), timeoutMs);
  }

  async expectTestPlansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.testPlans), expected, timeoutMs);
  }

  async expectTestPlansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.testPlans), substring, timeoutMs);
  }

  async scrollTestPlansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.testPlans));
  }

  async clickImportFromJira(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.importFromJira));
  }

  async doubleClickImportFromJira(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.importFromJira));
  }

  async expectImportFromJiraVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.importFromJira), timeoutMs);
  }

  async expectImportFromJiraHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.importFromJira), timeoutMs);
  }

  async expectImportFromJiraEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.importFromJira), timeoutMs);
  }

  async expectImportFromJiraDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.importFromJira), timeoutMs);
  }

  async expectImportFromJiraText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.importFromJira), expected, timeoutMs);
  }

  async expectImportFromJiraContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.importFromJira), substring, timeoutMs);
  }

  async scrollImportFromJiraIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.importFromJira));
  }

  async getInnerTextNewRequirement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.newRequirement));
  }

  async expectNewRequirementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.newRequirement), timeoutMs);
  }

  async expectNewRequirementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.newRequirement), timeoutMs);
  }

  async expectNewRequirementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.newRequirement), expected, timeoutMs);
  }

  async expectNewRequirementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.newRequirement), substring, timeoutMs);
  }

  async scrollNewRequirementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.newRequirement));
  }

  async getInnerTextPastePRDSnippetsAcceptance(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance));
  }

  async expectPastePRDSnippetsAcceptanceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), timeoutMs);
  }

  async expectPastePRDSnippetsAcceptanceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), timeoutMs);
  }

  async expectPastePRDSnippetsAcceptanceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), expected, timeoutMs);
  }

  async expectPastePRDSnippetsAcceptanceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), substring, timeoutMs);
  }

  async scrollPastePRDSnippetsAcceptanceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance));
  }

  async fillInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, RequirementPage.L.input), value);
  }

  async clearInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, RequirementPage.L.input));
  }

  async typeTextInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, RequirementPage.L.input), value);
  }

  async expectInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.input), timeoutMs);
  }

  async expectInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.input), timeoutMs);
  }

  async expectInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.input), timeoutMs);
  }

  async expectInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.input), timeoutMs);
  }

  async expectInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.input), expected, timeoutMs);
  }

  async expectInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.input), timeoutMs);
  }

  async scrollInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.input));
  }

  async fillTextarea(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, RequirementPage.L.textarea), value);
  }

  async clearTextarea(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, RequirementPage.L.textarea));
  }

  async typeTextTextarea(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, RequirementPage.L.textarea), value);
  }

  async expectTextareaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.textarea), timeoutMs);
  }

  async expectTextareaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.textarea), timeoutMs);
  }

  async expectTextareaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.textarea), timeoutMs);
  }

  async expectTextareaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.textarea), timeoutMs);
  }

  async expectTextareaValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.textarea), expected, timeoutMs);
  }

  async expectTextareaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.textarea), timeoutMs);
  }

  async scrollTextareaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.textarea));
  }

  async clickSaveRequirement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.saveRequirement));
  }

  async doubleClickSaveRequirement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.saveRequirement));
  }

  async expectSaveRequirementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.saveRequirement), timeoutMs);
  }

  async expectSaveRequirementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.saveRequirement), timeoutMs);
  }

  async expectSaveRequirementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.saveRequirement), timeoutMs);
  }

  async expectSaveRequirementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.saveRequirement), timeoutMs);
  }

  async expectSaveRequirementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.saveRequirement), expected, timeoutMs);
  }

  async expectSaveRequirementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.saveRequirement), substring, timeoutMs);
  }

  async scrollSaveRequirementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.saveRequirement));
  }

  async getInnerTextSavedRequirements(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.savedRequirements));
  }

  async expectSavedRequirementsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.savedRequirements), timeoutMs);
  }

  async expectSavedRequirementsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.savedRequirements), timeoutMs);
  }

  async expectSavedRequirementsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.savedRequirements), expected, timeoutMs);
  }

  async expectSavedRequirementsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.savedRequirements), substring, timeoutMs);
  }

  async scrollSavedRequirementsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.savedRequirements));
  }

  async clickRefresh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.refresh));
  }

  async doubleClickRefresh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.refresh));
  }

  async expectRefreshVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.refresh), timeoutMs);
  }

  async expectRefreshHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.refresh), timeoutMs);
  }

  async expectRefreshEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.refresh), timeoutMs);
  }

  async expectRefreshDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.refresh), timeoutMs);
  }

  async expectRefreshText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.refresh), expected, timeoutMs);
  }

  async expectRefreshContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.refresh), substring, timeoutMs);
  }

  async scrollRefreshIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.refresh));
  }

  async getInnerTextNoRequirementsYet(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RequirementPage.L.noRequirementsYet));
  }

  async expectNoRequirementsYetVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.noRequirementsYet), timeoutMs);
  }

  async expectNoRequirementsYetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.noRequirementsYet), timeoutMs);
  }

  async expectNoRequirementsYetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.noRequirementsYet), expected, timeoutMs);
  }

  async expectNoRequirementsYetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.noRequirementsYet), substring, timeoutMs);
  }

  async scrollNoRequirementsYetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.noRequirementsYet));
  }

  async clickOpenProjectAssistant(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.openProjectAssistant));
  }

  async doubleClickOpenProjectAssistant(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.openProjectAssistant), expected, timeoutMs);
  }

  async expectOpenProjectAssistantContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.openProjectAssistant), substring, timeoutMs);
  }

  async scrollOpenProjectAssistantIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.openProjectAssistant));
  }

  async clickOpenNextJsDevTools(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.openNextJsDevTools));
  }

  async doubleClickOpenNextJsDevTools(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, RequirementPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RequirementPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.openNextJsDevTools), expected, timeoutMs);
  }

  async expectOpenNextJsDevToolsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.openNextJsDevTools), substring, timeoutMs);
  }

  async scrollOpenNextJsDevToolsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RequirementPage.L.openNextJsDevTools));
  }


  async clickAUTOMATIONAIPROJECT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT));
  }

  async doubleClickAUTOMATIONAIPROJECT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT));
  }

  async longPressAUTOMATIONAIPROJECT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT));
  }

  async expectAUTOMATIONAIPROJECTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), value, timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), timeoutMs);
  }

  async expectAUTOMATIONAIPROJECTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.aUTOMATIONAIPROJECT), count, timeoutMs);
  }

  async clickTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.test));
  }

  async doubleClickTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.test));
  }

  async longPressTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.test));
  }

  async expectTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.test), value, timeoutMs);
  }

  async expectTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.test), timeoutMs);
  }

  async expectTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.test), timeoutMs);
  }

  async expectTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.test), timeoutMs);
  }

  async expectTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.test), timeoutMs);
  }

  async expectTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.test), timeoutMs);
  }

  async expectTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.test), count, timeoutMs);
  }

  async clickCreated5272026121831PM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.created5272026121831PM));
  }

  async doubleClickCreated5272026121831PM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.created5272026121831PM));
  }

  async longPressCreated5272026121831PM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.created5272026121831PM));
  }

  async expectCreated5272026121831PMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.created5272026121831PM), value, timeoutMs);
  }

  async expectCreated5272026121831PMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.created5272026121831PM), timeoutMs);
  }

  async expectCreated5272026121831PMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.created5272026121831PM), count, timeoutMs);
  }

  async longPressAllProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.allProjects));
  }

  async expectAllProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.allProjects), value, timeoutMs);
  }

  async expectAllProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.allProjects), count, timeoutMs);
  }

  async longPressDeleteProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.deleteProject));
  }

  async expectDeleteProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.deleteProject), value, timeoutMs);
  }

  async expectDeleteProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.deleteProject), timeoutMs);
  }

  async expectDeleteProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.deleteProject), count, timeoutMs);
  }

  async clickWORKSPACE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.wORKSPACE));
  }

  async doubleClickWORKSPACE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.wORKSPACE));
  }

  async longPressWORKSPACE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.wORKSPACE));
  }

  async expectWORKSPACEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.wORKSPACE), value, timeoutMs);
  }

  async expectWORKSPACEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.wORKSPACE), timeoutMs);
  }

  async expectWORKSPACECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.wORKSPACE), count, timeoutMs);
  }

  async clickAutomationAI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.automationAI));
  }

  async doubleClickAutomationAI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.automationAI));
  }

  async longPressAutomationAI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.automationAI));
  }

  async expectAutomationAIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.automationAI), value, timeoutMs);
  }

  async expectAutomationAIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.automationAI), timeoutMs);
  }

  async expectAutomationAICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.automationAI), count, timeoutMs);
  }

  async longPressOverviewProjectSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.overviewProjectSummary));
  }

  async expectOverviewProjectSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.overviewProjectSummary), value, timeoutMs);
  }

  async expectOverviewProjectSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.overviewProjectSummary), timeoutMs);
  }

  async expectOverviewProjectSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.overviewProjectSummary), count, timeoutMs);
  }

  async longPressSetup0APIKeys(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.setup0APIKeys));
  }

  async expectSetup0APIKeysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.setup0APIKeys), value, timeoutMs);
  }

  async expectSetup0APIKeysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.setup0APIKeys), timeoutMs);
  }

  async expectSetup0APIKeysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.setup0APIKeys), count, timeoutMs);
  }

  async longPressRequirements0Write(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.requirements0Write));
  }

  async expectRequirements0WriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.requirements0Write), value, timeoutMs);
  }

  async expectRequirements0WriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.requirements0Write), timeoutMs);
  }

  async expectRequirements0WriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.requirements0Write), count, timeoutMs);
  }

  async longPressRecorderBrowserDOMCapture(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture));
  }

  async expectRecorderBrowserDOMCaptureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), value, timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), timeoutMs);
  }

  async expectRecorderBrowserDOMCaptureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.recorderBrowserDOMCapture), count, timeoutMs);
  }

  async longPressPageObjects0Browse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.pageObjects0Browse));
  }

  async expectPageObjects0BrowseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.pageObjects0Browse), value, timeoutMs);
  }

  async expectPageObjects0BrowseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.pageObjects0Browse), timeoutMs);
  }

  async expectPageObjects0BrowseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.pageObjects0Browse), count, timeoutMs);
  }

  async longPressTestPlans0Review(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.testPlans0Review));
  }

  async expectTestPlans0ReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.testPlans0Review), value, timeoutMs);
  }

  async expectTestPlans0ReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.testPlans0Review), timeoutMs);
  }

  async expectTestPlans0ReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.testPlans0Review), count, timeoutMs);
  }

  async longPressTestExecutionRunSpecs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs));
  }

  async expectTestExecutionRunSpecsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), value, timeoutMs);
  }

  async expectTestExecutionRunSpecsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), timeoutMs);
  }

  async expectTestExecutionRunSpecsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.testExecutionRunSpecs), count, timeoutMs);
  }

  async longPressTestReportsHTMLReport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.testReportsHTMLReport));
  }

  async expectTestReportsHTMLReportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), value, timeoutMs);
  }

  async expectTestReportsHTMLReportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), timeoutMs);
  }

  async expectTestReportsHTMLReportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.testReportsHTMLReport), count, timeoutMs);
  }

  async longPressFrameworkZipFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.frameworkZipFiles));
  }

  async expectFrameworkZipFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.frameworkZipFiles), value, timeoutMs);
  }

  async expectFrameworkZipFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.frameworkZipFiles), timeoutMs);
  }

  async expectFrameworkZipFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.frameworkZipFiles), count, timeoutMs);
  }

  async clickRequirements(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.requirements));
  }

  async doubleClickRequirements(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.requirements));
  }

  async longPressRequirements(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.requirements));
  }

  async expectRequirementsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.requirements), value, timeoutMs);
  }

  async expectRequirementsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.requirements), timeoutMs);
  }

  async expectRequirementsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.requirements), timeoutMs);
  }

  async expectRequirementsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.requirements), timeoutMs);
  }

  async expectRequirementsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.requirements), timeoutMs);
  }

  async expectRequirementsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.requirements), timeoutMs);
  }

  async expectRequirementsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.requirements), count, timeoutMs);
  }

  async clickCaptureProductIntentThen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.captureProductIntentThen));
  }

  async doubleClickCaptureProductIntentThen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.captureProductIntentThen));
  }

  async longPressCaptureProductIntentThen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.captureProductIntentThen));
  }

  async expectCaptureProductIntentThenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.captureProductIntentThen), value, timeoutMs);
  }

  async expectCaptureProductIntentThenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.captureProductIntentThen), timeoutMs);
  }

  async expectCaptureProductIntentThenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.captureProductIntentThen), timeoutMs);
  }

  async expectCaptureProductIntentThenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.captureProductIntentThen), timeoutMs);
  }

  async expectCaptureProductIntentThenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.captureProductIntentThen), timeoutMs);
  }

  async expectCaptureProductIntentThenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.captureProductIntentThen), timeoutMs);
  }

  async expectCaptureProductIntentThenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.captureProductIntentThen), count, timeoutMs);
  }

  async longPressTestPlans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.testPlans));
  }

  async expectTestPlansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.testPlans), value, timeoutMs);
  }

  async expectTestPlansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.testPlans), timeoutMs);
  }

  async expectTestPlansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.testPlans), timeoutMs);
  }

  async expectTestPlansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.testPlans), timeoutMs);
  }

  async expectTestPlansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.testPlans), count, timeoutMs);
  }

  async longPressImportFromJira(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.importFromJira));
  }

  async expectImportFromJiraValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.importFromJira), value, timeoutMs);
  }

  async expectImportFromJiraChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.importFromJira), timeoutMs);
  }

  async expectImportFromJiraUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.importFromJira), timeoutMs);
  }

  async expectImportFromJiraFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.importFromJira), timeoutMs);
  }

  async expectImportFromJiraCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.importFromJira), count, timeoutMs);
  }

  async clickNewRequirement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.newRequirement));
  }

  async doubleClickNewRequirement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.newRequirement));
  }

  async longPressNewRequirement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.newRequirement));
  }

  async expectNewRequirementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.newRequirement), value, timeoutMs);
  }

  async expectNewRequirementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.newRequirement), timeoutMs);
  }

  async expectNewRequirementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.newRequirement), timeoutMs);
  }

  async expectNewRequirementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.newRequirement), timeoutMs);
  }

  async expectNewRequirementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.newRequirement), timeoutMs);
  }

  async expectNewRequirementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.newRequirement), timeoutMs);
  }

  async expectNewRequirementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.newRequirement), count, timeoutMs);
  }

  async clickPastePRDSnippetsAcceptance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance));
  }

  async doubleClickPastePRDSnippetsAcceptance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance));
  }

  async longPressPastePRDSnippetsAcceptance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance));
  }

  async expectPastePRDSnippetsAcceptanceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), value, timeoutMs);
  }

  async expectPastePRDSnippetsAcceptanceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), timeoutMs);
  }

  async expectPastePRDSnippetsAcceptanceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), timeoutMs);
  }

  async expectPastePRDSnippetsAcceptanceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), timeoutMs);
  }

  async expectPastePRDSnippetsAcceptanceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), timeoutMs);
  }

  async expectPastePRDSnippetsAcceptanceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), timeoutMs);
  }

  async expectPastePRDSnippetsAcceptanceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.pastePRDSnippetsAcceptance), count, timeoutMs);
  }

  async expectInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.input), expected, timeoutMs);
  }

  async expectInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.input), substring, timeoutMs);
  }

  async expectInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.input), timeoutMs);
  }

  async expectInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.input), timeoutMs);
  }

  async expectInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.input), count, timeoutMs);
  }

  async expectTextareaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RequirementPage.L.textarea), expected, timeoutMs);
  }

  async expectTextareaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RequirementPage.L.textarea), substring, timeoutMs);
  }

  async expectTextareaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.textarea), timeoutMs);
  }

  async expectTextareaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.textarea), timeoutMs);
  }

  async expectTextareaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.textarea), count, timeoutMs);
  }

  async longPressSaveRequirement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.saveRequirement));
  }

  async expectSaveRequirementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.saveRequirement), value, timeoutMs);
  }

  async expectSaveRequirementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.saveRequirement), timeoutMs);
  }

  async expectSaveRequirementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.saveRequirement), timeoutMs);
  }

  async expectSaveRequirementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.saveRequirement), timeoutMs);
  }

  async expectSaveRequirementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.saveRequirement), count, timeoutMs);
  }

  async clickSavedRequirements(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.savedRequirements));
  }

  async doubleClickSavedRequirements(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.savedRequirements));
  }

  async longPressSavedRequirements(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.savedRequirements));
  }

  async expectSavedRequirementsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.savedRequirements), value, timeoutMs);
  }

  async expectSavedRequirementsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.savedRequirements), timeoutMs);
  }

  async expectSavedRequirementsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.savedRequirements), timeoutMs);
  }

  async expectSavedRequirementsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.savedRequirements), timeoutMs);
  }

  async expectSavedRequirementsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.savedRequirements), timeoutMs);
  }

  async expectSavedRequirementsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.savedRequirements), timeoutMs);
  }

  async expectSavedRequirementsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.savedRequirements), count, timeoutMs);
  }

  async longPressRefresh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.refresh));
  }

  async expectRefreshValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.refresh), value, timeoutMs);
  }

  async expectRefreshChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.refresh), timeoutMs);
  }

  async expectRefreshUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.refresh), timeoutMs);
  }

  async expectRefreshFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.refresh), timeoutMs);
  }

  async expectRefreshCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.refresh), count, timeoutMs);
  }

  async clickNoRequirementsYet(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RequirementPage.L.noRequirementsYet));
  }

  async doubleClickNoRequirementsYet(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RequirementPage.L.noRequirementsYet));
  }

  async longPressNoRequirementsYet(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.noRequirementsYet));
  }

  async expectNoRequirementsYetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.noRequirementsYet), value, timeoutMs);
  }

  async expectNoRequirementsYetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RequirementPage.L.noRequirementsYet), timeoutMs);
  }

  async expectNoRequirementsYetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RequirementPage.L.noRequirementsYet), timeoutMs);
  }

  async expectNoRequirementsYetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.noRequirementsYet), timeoutMs);
  }

  async expectNoRequirementsYetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.noRequirementsYet), timeoutMs);
  }

  async expectNoRequirementsYetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.noRequirementsYet), timeoutMs);
  }

  async expectNoRequirementsYetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.noRequirementsYet), count, timeoutMs);
  }

  async longPressOpenProjectAssistant(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.openProjectAssistant));
  }

  async expectOpenProjectAssistantValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.openProjectAssistant), value, timeoutMs);
  }

  async expectOpenProjectAssistantChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.openProjectAssistant), timeoutMs);
  }

  async expectOpenProjectAssistantCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.openProjectAssistant), count, timeoutMs);
  }

  async longPressOpenNextJsDevTools(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RequirementPage.L.openNextJsDevTools));
  }

  async expectOpenNextJsDevToolsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RequirementPage.L.openNextJsDevTools), value, timeoutMs);
  }

  async expectOpenNextJsDevToolsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RequirementPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RequirementPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RequirementPage.L.openNextJsDevTools), timeoutMs);
  }

  async expectOpenNextJsDevToolsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RequirementPage.L.openNextJsDevTools), count, timeoutMs);
  }

}
