import { connect } from 'react-redux';

import WagesAdd from './WagesAdd';

const mapStateToProps = ({ wagesFilter: { PerformerId } }) => {
    return {
        PerformerId
    };
};

export default connect(mapStateToProps)(WagesAdd);
