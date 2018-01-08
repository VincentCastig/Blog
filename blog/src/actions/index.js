import axios from 'axios';

export const FETCH_ARTICLES = 'fetch_articles';
export const FETCH_ONE_ARTICLE = 'fetch_one_article';
export const POST_ARTICLES = 'post_articles';

const ROOT_URL = 'https://vincents-blog.herokuapp.com';
// const POST_URL = 'https://vincents-blog.herokuapp.com/postArticle';
// const API_KEY = '?key=1';

export function fetchArticles() {
    const request = axios.get(`${ROOT_URL}/getAllArticles`);


    return {
        type: FETCH_ARTICLES,
        payload: request
    };
}

export function fetchOneArticle(values) {
    const request = axios.get(`${ROOT_URL}/getArticle/${values}`);


    return {
        type: FETCH_ONE_ARTICLE,
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