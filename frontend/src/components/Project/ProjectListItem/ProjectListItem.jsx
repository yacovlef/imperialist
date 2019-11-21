import React from 'react';
import moment from 'moment';

// import ProjectEdit from '../ProjectEdit';
// import ProjectDelete from '../ProjectDelete';

import { projectStatusList } from '../../../config/data.json'

import './project_list_item.css';

const ProjectListItem = ({ projectItem }) => {
    const {
        id,
        name,
        status,
        createdAt
    } = projectItem;

    const renderStatus = projectStatusList.find(({ value }) => value === status);

    return (
        <div className="project_list_item card">
            <div>
                <div>#: {id}</div>
                <div>Наименование: {name}</div>
            </div>
            <div>
                <div>Статус: {renderStatus.label}</div>
                <div>Создан: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>
            </div>
            <div>
                <div>
                    {/* <ProjectEdit
                        project={projectItem}
                    /> */}
                </div>
                <div>
                    {/* <ProjectDelete
                        project={projectItem}
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default ProjectListItem;
