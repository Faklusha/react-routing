import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import FilmListItem from './FilmListItem';
import Adapter from 'enzyme-adapter-react-16';
import {Link} from 'react-router-dom'

configure({adapter: new Adapter()});
describe('FilmListItem', () => {

    it('renders without crashing', () => {
        shallow(<FilmListItem/>);
    });
});