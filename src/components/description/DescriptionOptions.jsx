import React, {Component} from 'react';
import {SORT_FIELDS} from './consts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeSortField, fetchFilms} from '../../actions/actions';
import {resolveUrl} from '../../actions/utils/resolveUrl';

@connect(({state}) => ({
    sortField: state.sortField,
    searchField: state.searchField,
    searchValue: state.searchValue,
}))

export default class DescriptionOptions extends Component {
    changeField = (value) => {
        const {dispatch, sortField, searchField, searchValue} = this.props;
        if (sortField !== value) {
            const params = resolveUrl(searchValue, searchField, sortField);
            bindActionCreators(changeSortField, dispatch)(value);
            bindActionCreators(fetchFilms, dispatch)(params);
        }
    };

    resolveFieldClassName = (value) => {
        const {sortField} = this.props;
        return value === sortField ? "description-options__button--active" : "description-options__button"
    };

    render() {
        return (
            <div className="description-options">
                <span className="description__title">Sort by</span>
                <div
                    className={this.resolveFieldClassName(SORT_FIELDS.release.name)}
                    onClick={() => this.changeField(SORT_FIELDS.release.name)}>
                    {SORT_FIELDS.release.title}
                </div>
                <div
                    className={this.resolveFieldClassName(SORT_FIELDS.raiting.name)}
                    onClick={() => this.changeField(SORT_FIELDS.raiting.name)}>
                    {SORT_FIELDS.raiting.title}
                </div>
            </div>
        );
    }
}

