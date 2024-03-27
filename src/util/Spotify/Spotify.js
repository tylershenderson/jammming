let accessToken;
const clientID = "a6cfec82c7e24d0981b05c53712478b3"
const redirectURL = "http://localhost:3000/"

const Spotify = {
    getAccessToken () {
        if (accessToken) return accessToken;
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expireyTime = window.location.href.match(/expires_in=([^&]*)/);
        if(tokenInURL && expireyTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expireyTime[1])

            window.setTimeout(() => (accessToken = ""), expiresIn * 1000)
            window.history.pushState('Access token', null, "/")
            return accessToken;
        }
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
        windows.location = redirect
    }
    search(term){
        return fetch()
    }
}

export {Spotify}