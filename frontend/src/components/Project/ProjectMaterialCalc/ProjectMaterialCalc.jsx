import React from 'react';

import './project-material-calc.css';

const ProjectMaterialCalc = ({ materialList }) => {

    const material = materialList.reduce((value, item) => value + item.price, 0);

    const cost = material * 3;

    const withNds = cost * 20 / 120 + cost;

    const nds = cost * 20 / 120;

    const workCost = withNds - material - nds;

    const carpenter = workCost * 0.2;

    const painter = workCost * 0.1;

    const project = workCost * 0.01;

    const margin = workCost - carpenter - painter;

    return (
        <>
            <div className="project-material-calc__material">Товар: {material}</div>
            <div className="project-material-calc__cost">x 3: {cost}</div>
            <div className="project-material-calc__with_nds">C НДС: {withNds}</div>
            <div className="project-material-calc__nds">НДС: {nds}</div>
            <div className="project-material-calc__work_cost">Минус товар и НДС: {workCost}</div>
            <div className="project-material-calc__carpenter">Столяр: {carpenter}</div>
            <div className="project-material-calc__painter">Моляр: {painter}</div>
            <div className="project-material-calc__project">Проект: {project}</div>
            <div className="project-material-calc__margin">Моржа: {margin}</div>
        </>
    );
};

export default ProjectMaterialCalc;
