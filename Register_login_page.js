import { expect } from "@playwright/test"
import { newUserDetails } from "../data/newUserDetails"

export class Register_login_page {
    constructor(page){
        this.page = page
        this.nameField = page.locator('[data-qa="signup-name"]')
        this.emailField = page.locator('[data-qa="signup-email"]')
        
    }

    signUpAsNewUser = async (page) => {
        const signUpFormHeader = this.page.getByRole('heading', { name: 'New User Signup!' })
        await expect(signUpFormHeader).toBeVisible()
        await this.nameField.fill(newUserDetails.name)
        await this.emailField.fill(newUserDetails.email)
        await this.page.getByRole('button', {name: 'Signup'}).click()
    }
}