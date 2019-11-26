import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProjectFilter from './ProjectFilter';

import { fetchProjectList } from '../ProjectList/project-list-action';

import { setProjectFilter, projectFilterReset } from './project-filter-action';
import { projectListReset } from '../ProjectList/project-list-action';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        projectListReset,
        setProjectFilter,
        projectFilterReset,
        fetchProjectList
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(ProjectFilter);
