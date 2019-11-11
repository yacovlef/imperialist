import React from 'react';

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
    return <h3 className="text-center">{value || getTypeInfo(type)}</h3>;
};

export default Info;