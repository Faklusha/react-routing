import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FilmDescription from '../film-description/FilmDescription';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import {fetchFilmById, resetSelectedFilm} from '../../actions/actions';
import './_page.css';

@connect(({state}) => ({
    selectedFilm: state.selectedFilm,
}))
export default class FilmPage extends Component {
    componentWillMount() {
        const {dispatch, match: {params: {id}}} = this.props;
        bindActionCreators(fetchFilmById, dispatch)(id);
    }

    resetFilm = () => {
        const {dispatch} = this.props;
        bindActionCreators(resetSelectedFilm, dispatch)();
    }

    render() {
        const {selectedFilm} = this.props;

        return (
            <div className="page">
                <ErrorBoundary>i
                    <Header isFilmSelected/>
                    {selectedFilm && <FilmDescription selectedFilm={selectedFilm}/>}
                    <Footer/>
                </ErrorBoundary>
            </div>
        );
    }
}
