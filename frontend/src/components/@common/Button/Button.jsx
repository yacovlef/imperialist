import React from 'react';

import './button.css';

const Button = (props) => {
    const {
        label,
        type,
        size,
        onClick
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

    return <button onClick={onClick} type={type} className={buttonClassList.join(' ')}>{label}</button>
};

export default Button;
