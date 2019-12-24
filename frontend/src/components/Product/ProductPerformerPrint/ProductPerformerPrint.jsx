import React, {Component} from 'react';

import Button from '../../@common/Button';

class ProductPerformerPrint extends Component {

    render() {
        return (
            <>
                <Button
                    label="Печать"
                    type="button"
                    size="small"
                    theme="light"
                />
            </>
        );
    }
}

export default ProductPerformerPrint;
