import { test, Browser, Page, expect, Locator } from '@playwright/test';
import { FooterPage } from '../page/footerPage';


export class FunctionFooter {
    readonly footerPage: FooterPage;
    readonly page: Page;

    constructor(page: Page) {
        this.footerPage = new FooterPage(page);
        this.page = page;
    }

    // Переход на сайт Only
    async goingSite(nameStep: string) {
        await test.step(nameStep, async () => {
            await this.page.goto('https://only.digital/');
        });
    }
    // Проверка видимости всех локаторов футера
    async verifyFooterLocators(nameStep: string) {
        await test.step(nameStep, async () => {
            const locators = Object.entries(this.footerPage).filter(
                ([key, value]) => typeof value !== 'function' && value != null
            );
    
            for (const [name, locator] of locators) {
                await expect(locator, `Локатор ${name} отсутствует или невидим`).toBeVisible();
            }
        });
    }   
    // Клик по ссылке "Начать проект"
    async clickStartProject(nameStep: string) {
        await test.step(nameStep, async () => {
            await this.footerPage.startProjectLink.click();
        });
    }
    // Проверка кнопки "Вверх"
    async checkScrollToTop(nameStep: string) {
        await test.step(nameStep, async () => {
            // Скроллим страницу вниз
            await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
            const currentScroll = await this.page.evaluate(() => window.scrollY);
            expect(currentScroll).toBeGreaterThan(0); // Убедимся, что страница прокручена вниз

            // Кликаем по кнопке "Вверх"
            await this.footerPage.scrollToTopButton.click();

            // Проверяем, что страница прокручена вверх
            const newScroll = await this.page.evaluate(() => window.scrollY);
            expect(newScroll).toBe(0);
        });
    }
    // Проверка ссылки на внешний сайт и возврат
    async checkExternalLink(nameStep: string, locator: Locator, expectedUrl: string) {
        await test.step(nameStep, async () => {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                locator.click(),
            ]);
            await expect(newPage).toHaveURL(expectedUrl);
            await newPage.close();
        });
    }
    
}
