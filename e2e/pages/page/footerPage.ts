import { Page, Locator } from '@playwright/test';

export class FooterPage {
    readonly footerBlock: Locator;
    readonly startProjectLink: Locator;
    readonly phoneNumber: Locator;
    readonly emailAddress: Locator;
    readonly awardsLink: Locator;
    readonly vkLink: Locator;
    readonly telegramLink: Locator;
    readonly vimeoLink: Locator;
    readonly behanceLink: Locator;
    readonly scrollToTopButton: Locator;
    readonly creativeDigitalText: Locator;
    readonly digitalProductText: Locator;
    readonly copyrightText: Locator;
    readonly onlyDigitalLogo: Locator;
    readonly questionnaireBlock: Locator;

    constructor(page: Page) {
        // Блок футер
        this.footerBlock = page.locator('footer');
        // Ссылка на виджет "Начать проект"
        this.startProjectLink = page.locator('p:has-text("Начать проект")');
        // Номер телефона
        this.phoneNumber = page.locator('p:has-text("+7 (495) 740 99 79")');
        // Почта
        this.emailAddress = page.locator('p:has-text("hello@only.com.ru")');
        // Ссылка Awwwards
        this.awardsLink = page.locator('footer a[href="https://www.awwwards.com/Ilyaredko/"]');
        // Ссылка ВК
        this.vkLink = page.locator('footer a[href="https://vk.com/onlydigitalagency"]');
        // Ссылка Телеграм
        this.telegramLink = page.locator('footer a[href="https://t.me/onlycreativedigitalagency"]');
        // Ссылка Vimeo
        this.vimeoLink = page.locator('footer a[href="https://vimeo.com/onlydigital"]');
        // Ссылка Behance
        this.behanceLink = page.locator('footer a[href="https://www.behance.net/onlydigitalagency"]');
        // Кнопка "Вверх"
        this.scrollToTopButton = page.locator('footer > div > svg');
        // Текст "Creative digital production"
        this.creativeDigitalText = page.locator('footer > div > div > p:nth-child(1)');
        // Текст "Создаем digital-продукт"
        this.digitalProductText = page.locator('footer > div > div:nth-child(1) > p:nth-child(2)');
        // Текст "© 2024"
        this.copyrightText = page.locator('footer > div > div:nth-child(2) > p:nth-child(2)');
        // Картинка Only.digital
        this.onlyDigitalLogo = page.locator('footer div > div > svg');
         // Виджет Анкеты
         this.questionnaireBlock = page.locator('body > div:nth-child(2) > div:nth-child(2)');
    }
}
