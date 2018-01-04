import axios from 'axios';

export const FETCH_ARTICLES = 'fetch_posts';

const ROOT_URL = 'http//rexuxblog.heroku.com/api';
const API_KEY = '?key=PAPERCLIP';

export function fetchArticles() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);


    return {
        type: FETCH_ARTICLES,
        payload: request
    };
}