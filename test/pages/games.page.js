import {BasePage} from "../../framework/pages/base.page.js";
import {BaseElements} from "../../framework/elements/base/base.elements.js";
import {Button} from "../../framework/elements/button.element.js"
import {t} from "testcafe";

class GamesPage extends BasePage {

    // Init of all page elements
    gamesPrices = new BaseElements('div.search_price_discount_combined', 'Games prices')
    sortByTrigger = new Button('//a[contains(@id, "sort_by_trigger")]', 'Sort By Trigger');
    sortByDescButton = new Button('//div[contains(@class, "dropcontainer")]//a[contains(@id, "Price_DESC")]',
                                  "Sort by descending button");

    constructor() {
        super('//div[@id = "search_results"]', 'Games Page');
    }

    async clickSortByTriggerButton() {
        await t
            .click(await this.sortByTrigger.findElement());
    }

    async clickSortByDescButton() {
        await t
            .click(await this.sortByDescButton.findElement());
    }

    async getGamesPrice(count) {
        const priceList = [];
        for (let i = 0; i < count; i++) {
            const gamePrice = (await this.gamesPrices.getElement()).nth(i);
            priceList.push(await gamePrice.getAttribute('data-price-final'));
        }
        return priceList;
    }
}

export {GamesPage}