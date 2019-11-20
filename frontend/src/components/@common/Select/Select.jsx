import React from 'react';

import './select.css';

const Select = (props) => {
    const {
        label,
        name,
        value,
        optionList,
        handleChange,
        errorList
    } = props;

    let error = (errorList || []).find(error => error.field === name);

    const selectClassList = ['select'];
    const labelClassList = [];

    if (error) {
        selectClassList.push('select__error');
        labelClassList.push('select__label_error');
    }

    return (
        <>
            <label className={labelClassList.join(' ')} htmlFor={name}>{label}</label>

            <select
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className={selectClassList.join(' ')}
            >
                <option></option>
                {optionList.map(({ value, label }, index) => <option key={index} value={value}>{label}</option>)}
            </select>

            {error &&
                <div className="select__error_message">
                    {error.message}
                </div>
            }
        </>
    );
};

export default Select;