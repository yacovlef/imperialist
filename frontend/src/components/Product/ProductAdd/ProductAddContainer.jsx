import { connect } from 'react-redux';

import ProductAdd from './ProductAdd';

const mapStateToProps = ({ productFilter: { OrderId } }) => {
    return {
        OrderId
    };
};

export default connect(mapStateToProps)(ProductAdd);
