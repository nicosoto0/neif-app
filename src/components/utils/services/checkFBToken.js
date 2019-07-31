export function checkFBToken(accessToken){
    const path= `https://graph.facebook.com/me?access_token=${accessToken}`;
    return fetch(path)
    .then(response => response.json())
}
