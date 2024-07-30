

export class Navigation {
    constructor (page) {
        this.page = page
        this.loginSignupButton = page.getByText(' Signup / Login')
        this.deleteAccountButton = page.getByText(' Delete Account')
    }

    goToLoginPage = async () => {
        await this.loginSignupButton.click()
    }
    
    deleteAccount = async() => {
        await this.deleteAccountButton.click()
    }
}