import addPastePage from "../../pageObjects/addPastePage.js"
import webdriver from "selenium-webdriver"
import { Builder, By, until, Key } from "selenium-webdriver"

describe("Test", function () {
  it("Automatically open the url", async () => {
    let baseUrl = "https://pastebin.com"
    await addPastePage.enter_url(baseUrl)
  })
  it("Click Agree button from the Modal", async () => {
    await addPastePage.isAgreeButtonDisplayed()
    await addPastePage.clickAgreeButton()
  })
  it('Create New Paste with following given task "I can win"', async () => {
    await addPastePage.writeNewPaste("Hello from WebDriver")
    await addPastePage.writeNewPasteTitle("helloweb")
  })
  it("Click dropdown", async () => {
    let selectButton = "#postform-expiration"
    await addPastePage.clickDropdownButton(selectButton)
  })
})
