class spotifyProfile{
    get profileDropDown() {return $('figure > div > div')}
    get profileButton() {return $('#context-menu > div > ul > li:nth-child(2) > a')}
    get profileNameButton() {return $('span.rEN7ncpaUeSGL9z0NGQR > button > span')}
    get profileInfo() {return $('form > div.uj7hczcCH1dZpse8Kfmi')}    
    async navigateToProfileName() {
        await this.profileDropDown.waitForDisplayed()
        await this.profileDropDown.click()
        await this.profileButton.waitForDisplayed()
        await this.profileButton.click()    
        await this.profileNameButton.waitForDisplayed() 
    }

}
module.exports = new spotifyProfile();