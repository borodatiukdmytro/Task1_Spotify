class spotifyMainPage{
    get logInPageButton() {return $(' button.Button-sc-qlcn5g-0.KQWHP > span')}

    async navigateToLogInPage() {
        await browser.url('https://open.spotify.com/')
        await this.logInPageButton.waitForDisplayed()
        await this.logInPageButton.click()         
    }
}
module.exports = new spotifyMainPage();
