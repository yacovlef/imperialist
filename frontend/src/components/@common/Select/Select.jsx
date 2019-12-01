import React, { Component } from 'react';

import './select.css';

class Select extends Component {
    initialState = {
        change: false
    }
    
    state = this.initialState;

    componentDidUpdate() {
        if (this.state.change && !this.props.value) {
            this.setState({...this.initialState});
        }
    }

    render() {
        const {
            label,
            placeholder,
            name,
            theme,
            value,
            optionList,
            handleChange,
            errorList
        } = this.props;

        let error = (errorList || []).find(error => error.field === name);

        const selectClassList = ['select'];
        const labelClassList = [];
        const optionClassList = [];

        if (placeholder && !this.state.change) {
            selectClassList.push('select__color-gray');
            optionClassList.push('select__color-black');
        }

        if (placeholder && this.state.change && value) {
            selectClassList.push('select__color-black');
        }

        switch(theme) {
            case 'light':
                selectClassList.push('select__light');

                break;
            default:
        }

        if (error) {
            selectClassList.push('select__error');
            labelClassList.push('select__label-error');
        }

        const onChange = (event) => {
            handleChange(event);

            this.setState({change: true});

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
                    onChange={onChange}
                    className={selectClassList.join(' ')}
                >
                    <option value="" className="select__placeholder">{placeholder && placeholder}</option>
                    <option value=""></option>
                    {optionList.map(({ value, label }, index) => <option className={optionClassList.join(' ')} key={index} value={value}>{label}</option>)}
                </select>

                {error &&
                    <div className="select__error-message">
                        {error.message}
                    </div>}
            </>
        );
    }
};

export default Select;
