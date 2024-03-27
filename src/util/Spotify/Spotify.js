let accessToken ="";
const clientID = "a6cfec82c7e24d0981b05c53712478b3";
const redirectURL = "https://cosmic-fairy-eb9dfa.netlify.app/";

const Spotify = {
  getAccessToken() {
    // First check for the access token
    if (accessToken) return accessToken;
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);
    // Second check for the access token

    if (tokenInURL && expiryTime) {
      accessToken = tokenInURL[1];
      const expiresIn = Number(expiryTime[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access token", null, "/");
      return accessToken;
    }
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
    window.location = redirect;
  },

  async search(term) {
    accessToken = Spotify.getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
      });
      const jsonResponse = await response.json();
      if (!jsonResponse) {
          console.error("Response Error" + JSON.stringify(jsonResponse));
      }
      console.log(jsonResponse);
      return jsonResponse.tracks.items.map((t) => ({
          id: t.id,
          name: t.name,
          artist: t.artists[0].name,
          album: t.album.name,
          uri: t.uri,
          image: t.album.images[0].url,
      }));
  },

  savePlaylist(name, trackUris){
    if(!name || !trackUris) return;
    const aToken = Spotify.getAccessToken()
    const header = { Authorization: `Bearer ${aToken}` };
    let userId;
    return fetch('https://api.spotify.com/v1/me', {headers: header})
    .then(response => response.json())
    .then((jsonResponse) => {
        userId = jsonResponse.id;
        let playlistId;
        console.log('1')
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: header,
        method: "post",
        body: JSON.stringify({name: name}),
    })
    .then((response) => response.json())
    .then((jsonResponse) => {
        console.log('2')
        playlistId = jsonResponse.id
        console.log(playlistId)
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: header,
            method: "post",
            body: JSON.stringify({uris: trackUris}),
        })
    })
    })
  },
};

export { Spotify };
