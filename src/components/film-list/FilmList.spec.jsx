import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import FilmList from './FilmList';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from 'redux';
import Reducer from '../../reducers/reducer';

const store = createStore(Reducer, {state: {
    films: [{runtime: 'timeline', title: 'name', genres: ['genre'], release_date:'date', overview: 'description'}],
}});

configure({adapter: new Adapter()});
describe('FilmList', () => {

    it('renders without crashing', () => {
        shallow(<FilmList store={store}/>);
    });
});