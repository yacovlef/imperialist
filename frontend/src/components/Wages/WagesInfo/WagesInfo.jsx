import React from 'react';

import './wages-info.css';

const WagesInfo = ({ wagesList }) => {
    if (!wagesList.length) return null;

    const total = wagesList.reduce((value, item) => value + item.price, 0);

    return (
        <div className="wages-info">
            <div>
                Сумма: {total}
            </div>
        </div>
    );
};

export default WagesInfo;
