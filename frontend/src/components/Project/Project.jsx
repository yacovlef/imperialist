import React from 'react';

import ProjectList from './ProjectList';
import ProjectAdd from './ProjectAdd';
import ProjectFilter from './ProjectFilter';

import './project.css';

const Project = () => {
    return (
        <>
            <div className="project__control card card__control">
                <ProjectAdd />
                <ProjectFilter />
            </div>
            <ProjectList />
        </>
    );
}

export default Project;
