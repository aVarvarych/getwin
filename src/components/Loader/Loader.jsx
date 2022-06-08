import React from 'react';
import './Loader.css';

export const Loader = ({ isLoading }) => {
    return isLoading && (
        <div className={'loader-container'}>
            <div className="loader-image">
                <div className="clock-loader"></div>
            </div>
        </div>
    );
};
