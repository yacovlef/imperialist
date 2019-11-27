import React from 'react';

import './input.css';

const Input = (props) => {
    const {
        label,
        placeholder,
        name,
        type,
        theme,
        value,
        handleChange,
        errorList
    } = props;


    let error = (errorList || []).find(error => error.field === name);

    const inputClassList = ['input'];
    const labelClassList = [];

    switch(theme) {
        case 'light':
            inputClassList.push('input__light');

            break;
        default:
    }

    if (error) {
        inputClassList.push('input__error');
        labelClassList.push('input__label_error');
    }

    return (
        <>
            {label &&
                <>
                    <label className={labelClassList.join(' ')} htmlFor={name}>{label}</label><br/>
                </>
            }

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={inputClassList.join(' ')}
                autoComplete="off"
            />

            {error &&
                <div className="input__error_message">
                    {error.message}
                </div>
            }
        </>
    );
}

export default Input;
