import React from 'react';

import './info.css';

const Info = ({ type, message }) => {
    let typeMessage = '';

    switch (type) {
        case 'loading':
            typeMessage = 'Загрузка...';

            break;
        case 'error':
            typeMessage = 'Ошибка';

            break;
        case 'not-found':
            typeMessage = 'Страница не найдена!';

            break;
        default:
    }

    return <h3 className="info__message">{message || typeMessage}</h3>;
};

export default Info;
