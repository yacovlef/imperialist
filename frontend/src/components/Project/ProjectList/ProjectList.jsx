import React, { Component } from 'react';

import Info from '../../@common/Info';
import ProjectListItem from '../ProjectListItem';

class ProjectList extends Component {
    render() {
        const { projectList, error } = this.props;
        
        if (error) {
            return <Info
                type='error'
            />;
        }

        if (!projectList.length) {
            return <Info
                message='Проектов не найдено.'
            />;
        }
        
        return projectList.map(
            (projectItem) => {
                return <ProjectListItem
                    key={projectItem.id}
                    projectItem={projectItem}
                />
            }
        )
    }
}

export default ProjectList;
