import React, {Component} from 'react';
import ReactToPrint from 'react-to-print';

import Button from '../../@common/Button';

import { formatPrice } from '../../../utils/lib';

import { roleList } from '../../../config/data.json';

import env from '../../../config/env.json';

import './product-performer-print.css';

class Print extends Component {
    render() {
        const {
            product: {
                name,
                image
            },
            performer: {
                User: {
                    lastName,
                    firstName
                },
                role
            },
            paidOut
            
        } = this.props;

        const { protocol, hostname } = window.location;

        const renderRole = roleList.find(({ value }) => value === role);

        return (
            <div className="product-performer-print">
            <h1>{name}</h1>
                {image && <img className="product-performer-print__img" src={`${protocol}//${hostname}:${env.axios.port}/product/${image}`} alt=""/>}
                <p>{`${lastName} ${firstName} (${renderRole.label}) - ${formatPrice(paidOut)}`}</p>
            </div>
        );
    }
}

class ProductPerformerPrint extends Component {
    render() {
        const renderButton = <Button
                label="Печать"
                type="button"
                size="small"
                theme="light" />;

        return (
            <div>
                <ReactToPrint
                    trigger={() => renderButton}
                    content={() => this.componentRef} />
                <div className='product-performer-print__print'>
                    <Print {...this.props} ref={el => (this.componentRef = el)} />
                </div>
            </div>
        );
    }
}

export default ProductPerformerPrint;
