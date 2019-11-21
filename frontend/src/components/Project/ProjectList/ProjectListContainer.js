import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchProjectList } from './project-list-action';

import ProjectList from './ProjectList';

const mapStateToProps = ({ projectList: { projectList, loading, error } }) => {
    return {
        projectList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchProjectList
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
