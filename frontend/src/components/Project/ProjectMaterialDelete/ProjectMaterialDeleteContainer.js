import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProjectMaterialDelete from './ProjectMaterialDelete';

import { submitProjectMaterialDelete } from './project-material-delete-action';

const mapStateToProps = ({ projectMaterialDelete: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSubmit: submitProjectMaterialDelete
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMaterialDelete);
