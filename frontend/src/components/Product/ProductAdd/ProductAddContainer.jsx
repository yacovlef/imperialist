import { connect } from 'react-redux';

import ProductAdd from './ProductAdd';

const mapStateToProps = ({ productFilter: { ProjectId } }) => {
    return {
        ProjectId
    };
};

export default connect(mapStateToProps)(ProductAdd);
