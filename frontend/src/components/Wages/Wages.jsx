import React from 'react';

import WagesList from './WagesList';
import WagesAdd from './WagesAdd';
import WagesFilter from './WagesFilter';

import './wages.css';

const Wages = () => {
    return (
        <>
            <div className="wages__control card card__control">
                <WagesAdd />
                <WagesFilter />
            </div>
            <WagesList />
        </>
    );
}

export default Wages;
