import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ConfigureStore from './reducers/configure-store';
import {HashRouter} from 'react-router-dom';
import Router from './Route'
const {store} = ConfigureStore();

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <HashRouter >
                        <Router />
                    </HashRouter>
                </Provider>
            </div>
        );
    }
}