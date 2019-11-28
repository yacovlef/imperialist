import React from 'react';
import moment from 'moment';

import ProjectEdit from '../ProjectEdit';
import ProjectDelete from '../ProjectDelete';

import ProjectMaterialAdd from '../ProjectMaterialAdd';
import ProjectMaterialItem from '../ProjectMaterialItem'
import ProjectMaterialCalc from '../ProjectMaterialCalc'

import { projectStatusList } from '../../../config/data.json'

import './project-list-item.css';

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
        <div className="project-list-item card">
            <div className="project-list-item__info">
                <div>Наименование: {name}</div>
                <div>Статус: {renderStatus.label}</div>
                <div>Создан: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>
            </div>

            <ProjectMaterialAdd ProjectId={id} />

            {(!!Materials.length)
                ?
                    <>
                        <div className="project-material-item">
                            <div className="show">#</div>
                            <div className="show">Наименование</div>
                            <div className="show">Кол-во</div>
                            <div className="show">Ед. изм.</div>
                            <div className="show">Цена за ед.</div>
                            <div className="show">Цена итог.</div>
                            <div className="show"></div>

                            { Materials.map((material, index) => <ProjectMaterialItem material={material} index={index} key={index} />) }

                        </div>
                        <ProjectMaterialCalc materialList={Materials} />
                    </>
                :
                    <div className="project-list-item__not-nomenclature">Нет номенклатуры.</div>}
            <div className="project-list-item__action">
                <div><ProjectEdit project={projectItem} /></div>
                <div><ProjectDelete project={projectItem} /></div>
            </div>
        </div>
    );
}

export default ProjectListItem;
