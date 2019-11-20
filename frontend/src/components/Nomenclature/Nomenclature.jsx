import React from 'react';

import NomenclatureList from './NomenclatureList';
import NomenclatureAdd from './NomenclatureAdd';

import './nomenclature.css';

const Nomenclature = () => {
    return (
        <>
            <div className="nomenclature__control card card__control">
                <NomenclatureAdd />
            </div>
            <NomenclatureList />
        </>
    );
}

export default Nomenclature;
