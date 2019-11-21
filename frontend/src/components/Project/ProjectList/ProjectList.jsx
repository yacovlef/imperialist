import React, { Component } from 'react';

import Info from '../../@common/Info';
import ProjectListItem from '../ProjectListItem';

class ProjectList extends Component {
    componentDidMount() {
        this.props.fetchProjectList(1);
    }

    render() {
        const { projectList, error } = this.props;

        if (error) {
            return <Info
                type='error'
            />;
        }

        return projectList.map(
            (projectItem) => {
                return <ProjectListItem
                    key={projectItem.id}
                    orderItem={projectItem}
                />
            }
        )
    }
}

export default ProjectList;
