import React from 'react';

import './select.css';

const Select = (props) => {
    const {
        label,
        name,
        theme,
        value,
        optionList,
        handleChange,
        errorList
    } = props;

    let error = (errorList || []).find(error => error.field === name);

    const selectClassList = ['select'];
    const labelClassList = [];

    switch(theme) {
        case 'light':
            selectClassList.push('select__light');

            break;
        default:
    }

    if (error) {
        selectClassList.push('select__error');
        labelClassList.push('select__label_error');
    }

    return (
        <>
            {label &&
                <>
                    <label className={labelClassList.join(' ')} htmlFor={name}>{label}</label><br/>
                </>}

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
                </div>}
        </>
    );
};

export default Select;