import axios from 'axios';

export const FETCH_ARTICLES = 'fetch_posts';

const ROOT_URL = 'https://vintruv-fitness.herokuapp.com/api/users';
const API_KEY = '?key=PAPERCLIP';

export function fetchArticles() {
    const request = axios.get(`${ROOT_URL}`);


    return {
        type: FETCH_ARTICLES,
        payload: request
    };
}