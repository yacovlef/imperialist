import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WagesDelete from './WagesDelete';

import { submitWagesDelete } from './wages-delete-action';

const mapStateToProps = ({ wagesDelete: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSubmit: submitWagesDelete
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WagesDelete);
