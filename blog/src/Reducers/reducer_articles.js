import _ from 'lodash';
import { FETCH_ARTICLES } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
    case FETCH_ARTICLES:    
        return _.mapKeys(action.payload.data, 'id');
        console.log(action.payload.data); //array of articles
        //transform this array to an object where the id is the property and the content is the value
    default:
        return state;
    }
}