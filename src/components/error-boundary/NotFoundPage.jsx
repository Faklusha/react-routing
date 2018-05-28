import React from 'react';
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
    <div className="error">
        <span className="error__title">Such page was not found =(</span>
        <Link to={{pathname: `/`}}>
          <span className="error__link">
            HIDE
          </span>
        </Link>
    </div>
);

export default NotFoundPage;