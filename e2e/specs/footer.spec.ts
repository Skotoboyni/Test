import { test, Browser, Page, expect } from '@playwright/test';
import { FunctionFooter } from '../pages/function/functionFooter';


let functionFooter: FunctionFooter;
let page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    functionFooter = new FunctionFooter(page);
});

test.afterAll(async () => {
    await page.close();
});

test('Переход на сайт Only', async () => {
    await functionFooter.goingSite('Переход на сайт');
    await expect(page).toHaveURL('https://only.digital/');
});

test('Проверка наличия всех элементов футера', async () => {
    await functionFooter.goingSite('Переход на сайт для проверки локаторов футера');
    await functionFooter.verifyFooterLocators('Проверка всех локаторов футера');
});

test('Проверка ссылки "Начать проект"', async () => {
    await functionFooter.goingSite('Переход на сайт');
    await functionFooter.clickStartProject('Клик по ссылке "Начать проект"');
    // Проверка, что после клика произошло ожидаемое действие (например, переход на страницу или открытие формы)
    await expect(functionFooter.footerPage.questionnaireBlock).toBeVisible();
});

test('Проверка ссылки на Awwwards', async () => {
    await functionFooter.goingSite('Переход на сайт Only для проверки ссылки Awwwards');
    await functionFooter.checkExternalLink(
        'Проверка ссылки Awwwards',
        functionFooter.footerPage.awardsLink,
        'https://www.awwwards.com/Ilyaredko/'
    );
});

test('Проверка ссылки на Vkontakte', async () => {
    await functionFooter.goingSite('Переход на сайт Only для проверки ссылки Vkontakte');
    await functionFooter.checkExternalLink(
        'Проверка ссылки Vkontakte',
        functionFooter.footerPage.vkLink,
        'https://vk.com/onlydigitalagency'
    );
});

test('Проверка ссылки на Telegram', async () => {
    await functionFooter.goingSite('Переход на сайт Only для проверки ссылки Telegram');
    await functionFooter.checkExternalLink(
        'Проверка ссылки Telegram',
        functionFooter.footerPage.telegramLink,
        'https://t.me/onlycreativedigitalagency'
    );
});

test('Проверка ссылки на Vimeo', async () => {
    await functionFooter.goingSite('Переход на сайт Only для проверки ссылки Vimeo');
    await functionFooter.checkExternalLink(
        'Проверка ссылки Vimeo',
        functionFooter.footerPage.vimeoLink,
        'https://vimeo.com/onlydigital'
    );
});

test('Проверка ссылки на Behance', async () => {
    await functionFooter.goingSite('Переход на сайт Only для проверки ссылки Behance');
    await functionFooter.checkExternalLink(
        'Проверка ссылки Behance',
        functionFooter.footerPage.behanceLink,
        'https://www.behance.net/onlydigitalagency'
    );
});

test('Проверка кнопки "Вверх"', async () => {
    await functionFooter.goingSite('Переход на сайт Only для проверки кнопки "Вверх"');
    await functionFooter.checkScrollToTop('Проверка работы кнопки "Вверх"');
});