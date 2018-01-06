import axios from 'axios';

export const FETCH_ARTICLES = 'fetch_articles';

const ROOT_URL = 'https://vincents-blog.herokuapp.com/getAllArticles';
const API_KEY = '?key=1';

export function fetchArticles() {
    const request = axios.get(`${ROOT_URL}`);


    return {
        type: FETCH_ARTICLES,
        payload: request
    };
}