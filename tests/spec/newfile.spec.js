
// let test = require("@playwright/test")
import {test} from "@playwright/test"

test('amazon', async({browser}) => { 
// test('amazon', async({page}) => { 

    let context = await browser.newContext()
    let page = await context.newPage() 
    await page.goto("https://www.amazon.in/")

 })








 













































































































































































































