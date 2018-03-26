import axios from 'axios';

export const FETCH_ARTICLES = 'fetch_articles';
export const FETCH_ONE = 'fetch_one';
export const POST_ARTICLES = 'post_articles';
export const POST_EMAIL = 'post_email';

const ROOT_URL = 'https://vincents-blog.herokuapp.com';
// const POST_URL = 'https://vincents-blog.herokuapp.com/postArticle';
// const API_KEY = '?key=1';

export function fetchArticles() {
    const request = axios.get(`${ROOT_URL}/getAllArticles`);
    console.log('fetching')
    return {
        type: FETCH_ARTICLES,
        payload: request
    };
}

export function fetchPost(id) {
    // console.log('id', id)
    const request = axios.get(`${ROOT_URL}/getArticle/${id}`)
    .then((res) =>  res);

    return {
        type: FETCH_ONE,
        payload: request
    };
}

export function postArticles(values, callback) {
    const request = axios.post(`${ROOT_URL}/postArticle`, values )
        .then(() => callback());

    return {
        type: POST_ARTICLES,
        payload: request
    };
}

export function postEmail(values, callback) {
    const request = axios.post(`${ROOT_URL}/email`, values )
        .then(() => callback());

    return {
        type: POST_EMAIL,
        payload: request
    };
}