import pkg from "testcafe";
const {Selector} = pkg;
import xPathToCss from "xpath-to-css";

class BaseElements {
    constructor(locator, elementName) {
        if (locator.startsWith('//' || locator.startsWith('(//'))) {
            this.element = Selector(xPathToCss(locator));
        } else {
            this.element = Selector(locator);
        }
        this.elementName = elementName;
    }

    async getElement() {
        return this.element;
    }

    async getName() {
        return this.elementName;
    }

    async findElements() {
        return (await this.getElement()).with({
            visibilityCheck: true
        });
    }

    async isExist() {
        const element = await this.findElement();
        return element.exists;
    }
}

export {BaseElements}