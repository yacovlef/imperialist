import React from 'react';
import moment from 'moment';

import ProjectEdit from '../ProjectEdit';
import ProjectDelete from '../ProjectDelete';

import ProjectMaterialAdd from '../ProjectMaterialAdd';
import ProjectMaterialItem from '../ProjectMaterialItem'
import ProjectMaterialCalc from '../ProjectMaterialCalc'

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
            <div className="project_list_item__name">Наименование: {name}</div>
            <div className="project_list_item__status">Статус: {renderStatus.label}</div>
            <div className="project_list_item__created">Создан: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>

            <ProjectMaterialAdd ProjectId={id} />

            {(!!Materials.length)
                ?
                    <>
                        <div className="show">#</div>
                        <div className="show">Наименование</div>
                        <div className="show">Кол-во</div>
                        <div className="show">Ед. изм.</div>
                        <div className="show">Цена за ед.</div>
                        <div className="show">Цена итог.</div>
                        <div className="show"></div>

                        { Materials.map((material, index) => <ProjectMaterialItem material={material} index={index} key={index} />) }

                        <ProjectMaterialCalc materialList={Materials} />
                    </>
                :
                    <div className="project_list_item__not-nomenclature">Нет номенклатуры.</div>}

            <div><ProjectEdit project={projectItem} /></div>
            <div><ProjectDelete project={projectItem} /></div>
        </div>
    );
}

export default ProjectListItem;
