import React from 'react';

import './button.css';

const Button = (props) => {
    const {
        label,
        type,
        size,
        onClick,
        loading,
        error,
        disabled
    } = props;

    const buttonClassList = ['button']

    switch(size) {
        case 'block':
            buttonClassList.push('button__block');

            break;
        case 'small':
            buttonClassList.push('button__small');
            
            break;
        default:
    }
    
    const renderLabel = (loading) ? 'Загрузка...' : (error && error.request.status !== 401) ? 'Ошибка!' : label;

    return <button disabled={disabled} onClick={onClick} type={type} className={buttonClassList.join(' ')}>{renderLabel}</button>
};

export default Button;
