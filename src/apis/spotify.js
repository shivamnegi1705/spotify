// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// 1. click login button
// 2. redirect to spotify login page
// 3.redirect to home page once logged in 

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
// const redirectUri = "https://spotify-v1.netlify.app/";

const clientId = "4bdf4077f46648518477b7a3132c1509";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user_read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const extractAccessToken = () => {
    const str = window.location.hash.split('=')[1];
    let token = "";
    if(str){
        token = str.split('&')[0];
    }
    return token;
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;
