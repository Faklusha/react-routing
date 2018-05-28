import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Search from '../search/Search';
import Description from '../description/Description'
import FilmList from '../film-list/FilmList';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import {fetchFilms} from '../../actions/actions';
import './_page.css';

@connect(({state}) => ({
    films: state.films,
}))
export default class Page extends Component {
    componentWillMount() {
        const {dispatch, match: {params: {search}}, location} = this.props;
        if (search || location.search) {
            const searchString = location.search || search;
            const splittedSearch = searchString.split('?');
            const params = splittedSearch.length ? splittedSearch[1] : null;
            params && bindActionCreators(fetchFilms, dispatch)(params);
        }
    }

    render() {
        const {films} = this.props;
        return (
            <div className="page">
                <ErrorBoundary>
                    <Header/>
                    <Search/>
                    <Description isShownOptions count={films ? films.length : 0}/>
                    <FilmList/>
                    <Footer/>
                </ErrorBoundary>
            </div>
        );
    }
}
