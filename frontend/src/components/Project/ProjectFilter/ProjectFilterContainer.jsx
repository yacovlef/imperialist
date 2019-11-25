
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProjectFilter from './ProjectFilter';

import { setProjectFilter } from './project-filter-action';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setProjectFilter
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(ProjectFilter);
