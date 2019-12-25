import React from 'react';

import WagesList from './WagesList';
import WagesAdd from './WagesAdd';
import WagesFilter from './WagesFilter';
import WagesInfo from './WagesInfo';

import './wages.css';

const Wages = () => {
    return (
        <>
            <div className="wages__control card card__control">
                <WagesAdd />
                <WagesFilter />
            </div>
            <div className="card card__control">
                <WagesInfo />
            </div>
            <WagesList />
        </>
    );
}

export default Wages;
