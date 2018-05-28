import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Header', () => {

    it('renders without crashing', () => {
        shallow(<Header/>);
    });
});