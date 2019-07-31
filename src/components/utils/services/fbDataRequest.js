export function fbDataRequest(accessToken, fields){
    const path= `https://graph.facebook.com/me?fields=${fields}&access_token=${accessToken}`;
    return fetch(path)
    .then(response => response.json())
}
