import {BasePage} from "../../framework/pages/base.page.js";
import {Input} from "../../framework/elements/input.element.js";
import {t} from "testcafe";

class HomePage extends BasePage {

    // Init of all page elements
    searchInput = new Input('//input[contains(@id, "store_nav_search_term")]', 'Search input');

    constructor() {
        super('//div[contains(@class, "home_page_body")]', 'Home Page');
    }

    async inputGameInSearchInput(gameName) {
        await t
            .typeText(await this.searchInput.findElement(), gameName)
            .pressKey('enter');
    }
}

export {HomePage}