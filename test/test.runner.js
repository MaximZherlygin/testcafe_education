import {HomePage} from "./pages/home.page.js";
import {GamesPage} from "./pages/games.page.js";
import {ArrayUtils} from "../framework/utils/array.utils.js";
import {GamePageSteps} from "./steps/game.page.steps.js";
import {userVariables} from "testcafe";
import assert from "assert";

import dataset from './test_data/test_data.json';

fixture `Getting Started`
    .page(userVariables.url);

dataset.forEach(data => {
    test('Searching different games', async () => {
        const homePage = new HomePage();
        assert.ok(await homePage.isOpened(), "Home page didn't opened");

        await homePage.inputGameInSearchInput(data.gameName);
        const gamesPage = new GamesPage();
        assert.ok(await gamesPage.isOpened(), "Games Page didn't opened");

        const gamePrices = await GamePageSteps.sortGamesByDescending(data.count);
        assert.ok(ArrayUtils.isArraySorted(gamePrices), `Array isn't sorted by descending: ${gamePrices}`);
    });
});