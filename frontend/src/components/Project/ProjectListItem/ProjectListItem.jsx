import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import ProjectEdit from '../ProjectEdit';
import ProjectDelete from '../ProjectDelete';

import { projectStatusList } from '../../../config/data.json'

import './project-list-item.css';

const ProjectListItem = ({ projectItem }) => {
    const {
        id,
        title,
        status,
        createdAt
    } = projectItem;

    const {label: statusLabel, color: statusColor} = projectStatusList.find(({ value }) => value === status);

    const statusStyle = { backgroundColor: statusColor };

    return (
        <div className="project-list-item card">
            <div className="project-list-item__col">
                <div>#: {id}</div>
                <div>Название: <Link to={`/products/${id}`}>{title}</Link></div>
            </div>

            <div className="project-list-item__col">
                <div>Статус: <span style={statusStyle} className="status">{statusLabel}</span></div>
                <div>Создан: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>
            </div>

            <div className="project-list-item__col">
                <div><ProjectEdit project={projectItem} /></div>
                <div><ProjectDelete project={projectItem}/></div>
            </div>
        </div>
    );
}

export default ProjectListItem;
