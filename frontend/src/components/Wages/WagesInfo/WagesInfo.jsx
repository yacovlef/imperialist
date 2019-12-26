import React from 'react';

import { formatPrice } from '../../../utils/lib';

import './wages-info.css';

const WagesInfo = ({ wagesList }) => {
    if (!wagesList.length) return null;

    const total = wagesList.reduce((value, item) => value + item.price, 0);

    return (
        <div className="wages-info">
            <div>
                Сумма: {formatPrice(total)}
            </div>
        </div>
    );
};

export default WagesInfo;
