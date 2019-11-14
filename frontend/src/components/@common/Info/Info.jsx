import React from 'react';

import './info.css';

const getTypeInfo = (type) => {
    let result;

    switch (type) {
        case 'loading':
            result = 'Загрузка...';

            break;
        case 'error':
            result = 'Ошибка';

            break;
        case 'not-found':
            result = 'Страница не найдена!';

            break;
        default:
    }

    return result;

};

const Info = ({ type, value }) => {
    return <h3 className="info__message">{value || getTypeInfo(type)}</h3>;
};

export default Info;
