import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProjectForm from './ProjectForm';

const mapStateToProps = ({ projectForm: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch, { onSubmit }) => {
    return bindActionCreators({
        onSubmit
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
