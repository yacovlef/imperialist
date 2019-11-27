import React from 'react';
import moment from 'moment';

import ProjectEdit from '../ProjectEdit';
import ProjectDelete from '../ProjectDelete';

import ProjectMaterialAdd from '../ProjectMaterialAdd';
import ProjectMaterialItem from '../ProjectMaterialItem'

import { projectStatusList } from '../../../config/data.json'

import './project_list_item.css';

const ProjectListItem = ({ projectItem }) => {
    const {
        id,
        name,
        status,
        createdAt,
        Materials
    } = projectItem;
    
    const renderStatus = projectStatusList.find(({ value }) => value === status);

    return (
        <div className="project_list_item card">
            <div className="project_list_item__info">
                <div>Наименование: {name}</div>
                <div>Статус: {renderStatus.label}</div>
                <div>Создан: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>
            </div>

            <ProjectMaterialAdd ProjectId={id} />

            {(!!Materials.length) &&
                <div>
                    <div className="project_list_item__material_header">
                        <div>#</div>
                        <div>Наименование</div>
                        <div>Кол-во</div>
                        <div>Ед. изм.</div>
                        <div>Цена за ед.</div>
                        <div>Цена итог.</div>
                        <div></div>
                    </div>

                    <div className="project_list_item__material_item">
                        { Materials.map((material, index) => <ProjectMaterialItem material={material} index={index} key={index} />) }
                    </div>
                </div>
            }

            <div className="project_list_item__action">
                <div>
                    <ProjectEdit
                        project={projectItem}
                    />
                </div>
                <div>
                    <ProjectDelete
                        project={projectItem}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectListItem;
