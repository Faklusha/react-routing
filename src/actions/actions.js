import {ACTION_TYPES} from './actions-types';

export const fetchFilms = (params) => (dispatch) => {
    const url = 'http://react-cdp-api.herokuapp.com/movies';
    fetch(`${url}?${params}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((response) => {
        return response.json();
    })
        .then((responseData) => {
            return dispatch(saveFilms(responseData.data));
        })
        .catch((error) => {
            console.error(error);
        });

    return {
        type: ACTION_TYPES.fetchFilms,
    };
};

export function saveFilms(films) {
    return {
        type: ACTION_TYPES.saveFilms,
        films
    };
}

export const fetchFilmById = (id) => (dispatch) => {
    fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((response) => {
        return response.json();
    })
        .then((responseData) => {
            return dispatch(selectFilm(responseData));
        })
        .catch((error) => {
            console.error(error);
        });

    return {
        type: ACTION_TYPES.fetchFilmById,
        id
    };
};


export function selectFilm(film) {
    return {
        type: ACTION_TYPES.selectFilm,
        film
    };
}

export function resetSelectedFilm() {
    return {
        type: ACTION_TYPES.resetSelectedFilm,
    };
}

export function changeSearchValue(value) {
    return {
        type: ACTION_TYPES.changeSearchValue,
        value
    };
}


export function changeSearchField(value) {
    return {
        type: ACTION_TYPES.changeSearchField,
        value
    };
}

export function changeSortField(value) {
    return {
        type: ACTION_TYPES.changeSortField,
        value
    };
}