import React from 'react';

const Button = (props) => {
    const {
        label,
        type
    } = props;

    return <button type={type} className="btn btn-block btn-outline-primary">{label}</button>
};

export default Button;