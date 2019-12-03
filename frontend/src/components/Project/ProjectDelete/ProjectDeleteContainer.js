import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProjectDelete from './ProjectDelete';

import { submitProjectDelete } from './project-delete-action';

const mapStateToProps = ({ projectDelete: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSubmit: submitProjectDelete
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDelete);
