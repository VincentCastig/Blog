import axios from 'axios';

export const FETCH_ARTICLES = 'fetch_articles';
export const POST_ARTICLES = 'post_articles';

const ROOT_URL = 'https://vincents-blog.herokuapp.com/getAllArticles';
const POST_URL = 'https://vincents-blog.herokuapp.com/postArticle';
const API_KEY = '?key=1';

export function fetchArticles() {
    const request = axios.get(`${ROOT_URL}`);


    return {
        type: FETCH_ARTICLES,
        payload: request
    };
}

export function postArticles(values) {
    const request = axios.post(`${POST_URL}`, values );


    return {
        type: POST_ARTICLES,
        payload: request
    };
}