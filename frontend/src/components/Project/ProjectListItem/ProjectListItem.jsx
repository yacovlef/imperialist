import React from 'react';
import moment from 'moment';

import ProjectEdit from '../ProjectEdit';
import ProjectDelete from '../ProjectDelete';

import { projectStatusList } from '../../../config/data.json'

import './project_list_item.css';

const ProjectListItem = ({ projectItem }) => {
    const {
        name,
        status,
        createdAt
    } = projectItem;
    
    const renderStatus = projectStatusList.find(({ value }) => value === status);

    return (
        <div className="card">
            <div className="project_list_item__info">
                <div>Наименование: {name}</div>
                <div>Статус: {renderStatus.label}</div>
                <div>Создан: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>
            </div>

            <div className="project_list_item__action">
                <div className="control__column">
                    <ProjectEdit
                        project={projectItem}
                    />
                </div>
                <div className="control__column">
                    <ProjectDelete
                        project={projectItem}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectListItem;
