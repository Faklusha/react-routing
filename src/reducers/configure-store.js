import {createStore, combineReducers, applyMiddleware} from 'redux'
import {SEARCH_FIELDS} from '../components/search/consts';
import {SORT_FIELDS} from '../components/description/consts';
import Reducer from './reducer';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux'

const initialState = {
    films: [],
    selectedFilm: null,
    searchValue: null,
    searchField: SEARCH_FIELDS.title.name,
    sortField: SORT_FIELDS.release.name,
};

export default () => {
    let store = createStore(combineReducers({
        state: Reducer,
        routing: routerReducer
    }), initialState, applyMiddleware(thunk));
    return {store};
}