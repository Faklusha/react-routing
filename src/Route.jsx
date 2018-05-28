import React, {Component} from 'react';
import {Switch, Route } from 'react-router-dom';
import Page from './components/pages/Page';
import FilmPage from './components/pages/FilmPage';
import {withRouter} from 'react-router';
import NotFoundPage from './components/error-boundary/NotFoundPage';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={withRouter(Page)}/>
                <Route path='/film/:id' component={withRouter(FilmPage)}/>
                <Route path='/search/:search' component={withRouter(Page)}/>
                <Route path='*' component={withRouter(NotFoundPage)}/>
            </Switch>
        );
    }
}
