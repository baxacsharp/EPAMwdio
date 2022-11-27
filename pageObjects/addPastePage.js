import { Builder, By, until, Key } from "selenium-webdriver"
import BasePage from "./basePage.js"
import webdriver from "selenium-webdriver"
import chrome from "selenium-webdriver/chrome.js"
import chromedriver from "chromedriver"

class AddPastePage extends BasePage {
  async enter_url(theUrl) {
    await this.go_to_link(theUrl)
  }

  async writeNewPaste(writeText) {
    let locatorOfTextArea = "#postform-text"
    await this.enterText(locatorOfTextArea, writeText)
  }
  async clickPasteExpirationDropdown() {
    let selectButton = "span#select2-postform-expiration-container"
    await this.clickDropdown(selectButton)
    let selectedChoice = "li.select2-results__option:nth-of-type(3)"
    await this.clickButton(selectedChoice)
  }
  async clickSyntaxChoice() {
    let selectButton = "span#select2-postform-format-container"
    await this.clickDropdown(selectButton)
    let selectedChoice = "li.select2-results__option:nth-of-type(2)"
    await this.clickButton(selectedChoice)
  }

  async writeNewPasteTitle(writeText) {
    let locatorOfTitleArea = "#postform-name"
    await this.enterText(locatorOfTitleArea, writeText)
  }
  async clickSubmitButton() {
    let locator = ".form-btn-container"
    await this.clickButton(locator)
  }
  async clickNewPasteButton() {
    let locator = ".header__btn"
    await this.clickButton(locator)
  }
}

export default new AddPastePage()
