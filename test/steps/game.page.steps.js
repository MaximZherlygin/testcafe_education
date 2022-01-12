import {GamesPage} from "../pages/games.page.js";

class GamePageSteps {
    static async sortGamesByDescending(count) {
        const gamesPage = new GamesPage();
        await gamesPage.clickSortByTriggerButton();
        await gamesPage.clickSortByDescButton();
        return gamesPage.getGamesPrice(count);
    }
}

export {GamePageSteps}