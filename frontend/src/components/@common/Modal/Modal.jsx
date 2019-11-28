import React from 'react';
import { Link } from 'react-router-dom';

import './modal.css';

import close from './close.svg';

const Modal = (props) => {
    const {
        children,
        title,
        size,
        onClose
    } = props;

    const modalClassList = ['modal'];

    switch(size) {
        case 'small':
            modalClassList.push('modal__small');
            
            break;
        default:
    }

    return (
        <div className="modal__overlay">
            <div className={modalClassList.join(' ')}>
                <div className="modal__header">
                    {title}
                    <Link onClick={onClose} to="#">
                        <img src={close} alt="close" />
                    </Link>
                </div>
                <div className="modal__body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
