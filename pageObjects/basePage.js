import webdriver, { By } from "selenium-webdriver"
let driver = new webdriver.Builder().forBrowser("chrome").build()
driver.manage().setTimeouts({ implicit: 1000 })
class BasePage {
  constructor() {
    global.driver = driver
  }
  async go_to_link(url) {
    await driver.get(url)
  }
  async enterText(css, text) {
    await driver.findElement(By.css(css)).sendKeys(text)
  }
  async isDisplayed(locator) {
    await driver.findElement(By.css(locator)).isDisplayed()
  }
  async clickButton(locator) {
    await driver.findElement(By.css(locator)).click()
  }

  async selectValueFromDropdown(locator) {
    await driver.executeScript("arguments[0].click();", locator)
  }
}

export default BasePage
