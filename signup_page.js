import { expect } from "@playwright/test"
import { registerNewUserDetails } from "../data/registerNewUserDetails.js"

export class SignUpPage {
    constructor (page) {
        this.page = page
        this.genderField = page.locator('#id_gender1')
        this.nameField = page.locator('[data-qa="name"]')
        this.passwordField = page.locator('[data-qa="password"]')
        this.dayOfBirth = page.locator('[data-qa="days"]')
        this.monthOfBirth = page.locator('[data-qa="months"]')
        this.yearOfBirth = page.locator('[data-qa="years"]')
        this.newsletterRadio = page.locator('[id="newsletter"]')
        this.specialLettersRadio = page.locator('[id="optin"]')
        this.firstName = page.locator('[data-qa="first_name"]')
        this.lastName = page.locator('[data-qa="last_name"]')
        this.company = page.locator('[data-qa="company"]')
        this.address = page.locator('[data-qa="address"]')
        this.address2 = page.locator('[data-qa="address2"]')
        this.country = page.locator('[data-qa="country"]')
        this.state = page.locator('[data-qa="state"]')
        this.city = page.locator('[data-qa="city"]')
        this.zipCode = page.locator('[data-qa="zipcode"]')
        this.mobileNumber = page.locator('[data-qa="mobile_number"]')
        this.createAccountButton = page.getByRole('button', {name: 'Create Account'})
        this.continueButton = page.locator('[data-qa="continue-button"]')
    }

    fillNewUserDetails = async (page) => {
        const registerNewUserHeader = this.page.getByRole('heading', { name: 'Enter Account Information' })
        const accountCreatedHeader = this.page.getByRole('heading', { name: 'Account Created!' })
        await expect(registerNewUserHeader).toBeVisible()
        await this.genderField.check()
        await this.nameField.fill(registerNewUserDetails.name)
        await this.passwordField.fill(registerNewUserDetails.password)
        await this.dayOfBirth.selectOption('16')
        await this.monthOfBirth.selectOption('May')
        await this.yearOfBirth.selectOption('2000')
        await this.newsletterRadio.check()
        await this.specialLettersRadio.check()
        await expect(this.newsletterRadio).toBeChecked()
        await expect(this.specialLettersRadio).toBeChecked()
        await this.firstName.fill(registerNewUserDetails.firstName)
        await this.lastName.fill(registerNewUserDetails.lastName)
        await this.company.fill(registerNewUserDetails.company)
        await this.address.fill(registerNewUserDetails.address)
        await this.address2.fill(registerNewUserDetails.address2)
        await this.country.selectOption('Canada')
        await this.state.fill(registerNewUserDetails.state)
        await this.city.fill(registerNewUserDetails.city)
        await this.zipCode.fill(registerNewUserDetails.zipCode)
        await this.mobileNumber.fill(registerNewUserDetails.mobileNumber)
        await this.createAccountButton.click()
        await expect(accountCreatedHeader).toBeVisible()
        await this.continueButton.click()
        
    }
}