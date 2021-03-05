import request from 'superagent';

const URL = 'http://localhost:3000';
const USER = 'USER';

export async function signupUser(email, password) {
    const response = await request
    .post(`${URL}/auth/signup`)
    .send({email: email, password: password});
    return response.body;
}

export async function signinUser(email, password) {
    const response = await request
    .post(`${URL}/auth/signin`)
    .send({email: email, password: password});
    return response.body;
}

export function putUserInLocalStorage(user) {
    localStorage.setItem(USER, JSON.stringify({user}));
}

export function getUserFromLocalStorage() {
    const user = localStorage.getItem(USER);
    if(user && user.token) return JSON.parse(user);
    return {
        email: '',
        id: '',
        token: ''
    }
}

export async function addFavorite(fav, token) {
    const response = await request
    .post(`${URL}/api/favorites`)
    .set('Authorization', token)
    .send(fav);
    return response.body;
}

export async function getFavorite(token) {
    const response = await request
    .get(`${URL}/api/favorites`)
    .set('Authorization', token)
    return response.body;
}

export async function searchPlaces(query, token) {
    const response = await request
    .get(`${URL}/api/search?location=${query}`)
    .set('Authorization', token)
    return response.body;
}

// export async function deleteFavorite(favId, token) {
//     const response = await request
//     .post(`${URL}/api/favorites/${favId}`)
//     .set('Authorization', token)
//     return response.body;
// }