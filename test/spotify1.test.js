const spotifyMainPage = require("../pages/spotify_main_page")
const spotifyLoginPage = require("../pages/spotify_login_page")
//const spotifyProfile = require("../pages/spotify_profile")

describe("spotify website test", () => {
    before(async () =>{
        await spotifyMainPage.navigateToLogInPage()
        await expect(browser).toHaveUrl('https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F')
    })

    describe("UC -1 - Test Login form with empty credentials", () => {
        it("Test username or email field", async () =>{
            await spotifyLoginPage.typingAndClearingUsername()
            await spotifyLoginPage.gettingErrorMessagesUsername()
            await expect(spotifyLoginPage.usernameMessage).toHaveText('Please enter your Spotify username or email address.')
        })
        it("Test password field", async () =>{
            await spotifyLoginPage.typingAndClearingPassword()
            await spotifyLoginPage.gettingErrorMessagesPassword()
            await expect(spotifyLoginPage.passwordMessage).toHaveText('Please enter your password.')
        })
    })

    // describe("UC-2 - Test Login form with incorrect credentials", () => {
    //     it("", async () => {
    //         await spotifyLoginPage.typingAndSubmittingIncorrectCredentials()
    //         await spotifyLoginPage.gettingErrorMessage()
    //         await expect(spotifyLoginPage.errorMessage).toHaveText('Incorrect username or password.')
    //     })
    // })

    // describe("UC -3 - Test Login form with correct credentials", () => {
    //     before(async () =>{
    //         await spotifyLoginPage.typingAndSubmittingCorrectCredentials()
    //         await expect(browser).toHaveUrlContaining('https://open.spotify.com/?flow_ctx=')
    //     })

    //     it("", async () => {
    //         await spotifyProfile.navigateToProfileName()
    //         await expect(spotifyProfile.profileNameButton).toHaveText('EpamQAAutomationJunior')
    //     })
    // })
});