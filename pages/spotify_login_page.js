class spotifyLoginPage{
    get usernameBox() {return $('#login-username')}
    get passwordBox() {return $('#login-password')}
    get usernameMessage() {return $('#username-error')}
    get passwordMessage() {return $('#password-error')}
    get loginButton() {return $('#login-button')}
    get errorMessage() {return $(' div.sc-lllmON.iPNZrJ > div')}

    async typingAndClearingUsername(){
        await this.usernameBox.waitForDisplayed()
        await this.usernameBox.setValue('abc')
        await this.usernameBox.doubleClick()
        await browser.keys('\uE017');
    }
    async typingAndClearingPassword(){
        await this.passwordBox.waitForDisplayed()
        await this.passwordBox.setValue('abc')
        await this.passwordBox.doubleClick()
        await browser.keys('\uE017');
    }
    async gettingErrorMessagesUsername(){
        await this.usernameMessage.waitForDisplayed()
    }
    async gettingErrorMessagesPassword(){
        await this.passwordMessage.waitForDisplayed()
    }

    async typingAndSubmittingIncorrectCredentials(){
        await this.usernameBox.waitForDisplayed()
        await this.passwordBox.waitForDisplayed()
        await this.passwordBox.setValue('incorrectvalue12082023')
        await this.usernameBox.setValue('incorrectvalue12082023')
        await this.loginButton.waitForDisplayed()
        await this.loginButton.click()
    }
    async gettingErrorMessage(){
        await this.errorMessage.waitForDisplayed()
    }

    async typingAndSubmittingCorrectCredentials(){
        await this.usernameBox.waitForDisplayed()
        await this.passwordBox.waitForDisplayed()
        await this.usernameBox.setValue('3134s27yw7lt6pobteo6zh4ijkom')
        await this.passwordBox.setValue('EpamQAAutomation2023')
        await this.loginButton.waitForDisplayed()
        await this.loginButton.click()
    }
}

module.exports = new spotifyLoginPage();