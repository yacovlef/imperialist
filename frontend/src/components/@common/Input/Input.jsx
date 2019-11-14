import React from 'react';

import './input.css';

const Input = (props) => {
    const {
        label,
        name,
        type,
        value,
        handleChange,
        errorList
    } = props;


    let error = errorList.find(error => error.field === name);

    const inputClassList = ['input'];

    if (error) {
        inputClassList.push('input__error');
    }

    return (
        <>
            <label htmlFor={name}>{label}</label>
            
            <input
                id={name}
                name={name}
                type={type}
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
