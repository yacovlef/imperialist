import React from 'react';

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

    const inputClassList = ['form-control'];

    if (error) {
        inputClassList.push('is-invalid');
    }

    return (
        <div className="form-group">
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
                <div className="invalid-feedback">
                    {error.message}
                </div>
            }
        </div>
    );
}

export default Input;