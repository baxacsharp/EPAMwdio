import addPastePage from "../../pageObjects/addPastePage.js"
import webdriver from "selenium-webdriver"
import { Builder, By, until, Key } from "selenium-webdriver"

describe("Test", function () {
  it("Automatically open the url", async () => {
    let baseUrl = "https://pastebin.com"
    await addPastePage.enter_url(baseUrl)
  })

  it('Create New Paste with following given task "I can win"', async () => {
    await addPastePage.writeNewPaste("Hello from WebDriver")
  })
  it("Choose specific option from dropdown and write title", async () => {
    await addPastePage.clickPasteExpirationDropdown()
    await addPastePage.writeNewPasteTitle("helloweb")
  })
  it("Click submit button", async () => {
    await addPastePage.clickSubmitButton()
  })
  it("Click new Paste button", async () => {
    await addPastePage.clickNewPasteButton()
  })
  it(" Create New PasteText with following given task 'Bring It On'", async () => {
    await addPastePage.writeNewPaste(
      `git config --global user.name "New Sheriff in Town"
      git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
      git push origin master --force`
    )
  })
  it("Choose Bash Terminal from Syntax highligh dropdown", async () => {
    await addPastePage.clickSyntaxChoice()
  })
  it("Title of this given task paste", async () => {
    await addPastePage.writeNewPasteTitle(
      "how to gain dominance among developers"
    )
  })
  it("Click submit button", async () => {
    await addPastePage.clickSubmitButton()
  })
})
