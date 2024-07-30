import {test, expect} from "@playwright/test"
import { before, beforeEach } from "node:test"
import { Navigation } from "../page-objects/Navigation.js"
import { Register_login_page } from "../page-objects/Register_login_page.js"
import { SignUpPage } from "../page-objects/signup_page.js"
import { newUserDetails } from "../data/newUserDetails.js"

test.beforeEach(async ({page}) => {
    await page.goto('/')
    await expect(page).toHaveURL('/')
    await page.getByRole('button', {name: 'Consent'}).click()
})
test('register and delete new user', async ({page}) => {
    const navigation = new Navigation(page)
    const registerLoginPage = new Register_login_page(page)
    const signUpPage = new SignUpPage(page)
    await navigation.goToLoginPage()
    await registerLoginPage.signUpAsNewUser()
    await signUpPage.fillNewUserDetails()
    await expect(page.getByText(` Logged in as ${newUserDetails.name} `)).toBeVisible()
    await navigation.deleteAccount()
    await expect(page.getByText('Account Deleted!')).toBeVisible()
    await page.locator('[data-qa="continue-button"]').click()
    
})