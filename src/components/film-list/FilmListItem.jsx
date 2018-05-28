import React from 'react';
import {Link} from 'react-router-dom'

const FilmListItem = ({title, id, date, genre, path}) => (
    <Link to={{pathname: `/film/${id}`}}>
        <div className="film-list__item">
            <div className="description__block_picture">
                <img src={path}/>
            </div>
            <div className="film-list__item_info">
                <span className="item__title">{title}</span>
                <span className="item__date">{date}</span>
                <span className="item__category">{genre}</span>
            </div>
        </div>
    </Link>
);

export default FilmListItem;