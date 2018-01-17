import _ from 'lodash';
import { FETCH_ARTICLES, FETCH_ONE } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
    case FETCH_ONE:
        // const post = action.payload.data;
        // const newState = { ...state }
        // newState[post.id] = post;
        // return { newState }
        return { ...state, [action.payload.data[0].id]: action.payload.data[0] }

    case FETCH_ARTICLES:    
        // return _.mapKeys(action.payload.data, 'id');
        return _.mapKeys(action.payload.data, 'id');
        // console.log(action.payload.data); //array of articles
        //transform this array to an object where the id is the property and the content is the value
    default:
        return state;
    }
}