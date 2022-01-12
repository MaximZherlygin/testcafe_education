import pkg from "testcafe";
const {Selector} = pkg;
import xPathToCss from "xpath-to-css";

class BasePage {
    constructor(locator, pageName) {
        if (locator.startsWith('//')) {
            this.uniquePageElement = Selector(xPathToCss(locator));
        } else {
            this.uniquePageElement = Selector(locator);
        }
        this.pageName = pageName;
    }

    async getElement() {
        return this.uniquePageElement;
    }

    async isOpened() {
        const element = this.uniquePageElement.with({
            visibilityCheck: true
        });
        return element.exists;
    }
}

export {BasePage}