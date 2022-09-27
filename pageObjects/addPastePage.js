import { Builder, By, until, Key } from "selenium-webdriver"
import BasePage from "./basePage.js"
import webdriver from "selenium-webdriver"

class AddPastePage extends BasePage {
  async enter_url(theUrl) {
    await this.go_to_link(theUrl)
  }
  async isAgreeButtonDisplayed() {
    let button = ".qc-cmp2-summary-buttons button:last-child"
    await this.isDisplayed(button)
  }
  async clickAgreeButton() {
    let button = ".qc-cmp2-summary-buttons button:last-child"
    await this.clickButton(button)
  }
  async writeNewPaste(writeText) {
    let locatorOfTextArea = "#postform-text"
    await this.enterText(locatorOfTextArea, writeText)
  }
  async clickDropdownButton(selectButton) {
    await this.selectValueFromDropdown(selectButton)
  }

  async writeNewPasteTitle(writeText) {
    let locatorOfTitleArea = "#postform-name"
    await this.enterText(locatorOfTitleArea, writeText)
  }
  // get newPasteTextArea() {
  //   return $("#postform-text")
  // }
  // async createNewPaste() {
  //   await this.newPasteTextArea.sendKeys("Hello from WebDriver")
  // }
}
export default new AddPastePage()
