import { connect } from 'react-redux';

import ProjectAdd from './ProjectAdd';

const mapStateToProps = ({ projectFilter: { OrderId } }) => {
    return {
        OrderId
    };
};

export default connect(mapStateToProps)(ProjectAdd);
