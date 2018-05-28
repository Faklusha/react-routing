import React from 'react';
import {Link} from 'react-router-dom'
import './_header.css';

const Header = ({isFilmSelected, resetSelectedFilm}) => (
    <div className="header">
        <span className="main-title">netflixroulette</span>
        {
            isFilmSelected &&
            <Link to={{pathname: `/`}}>
                <div
                    onClick={() => resetSelectedFilm && resetSelectedFilm()}
                    className="search-button">
                    SEARCH
                </div>
            </Link>
        }
    </div>
);

export default Header;