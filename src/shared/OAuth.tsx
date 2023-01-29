const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI

const oAuthURL =
    //`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${REDIRECT_URI}`;

    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email`;

export const GOOGLE_AUTH_URL = () => {
    window.location.assign(oAuthURL);
}