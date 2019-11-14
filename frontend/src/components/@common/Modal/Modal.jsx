import React from 'react';
import { Link } from 'react-router-dom';

import './modal.css';

import close from './close.svg';

const Modal = ({ children, title, onClose }) => {
    return (
        <div className="modal__overlay">
            <div className="modal">
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
