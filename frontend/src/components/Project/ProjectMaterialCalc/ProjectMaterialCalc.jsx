import React from 'react';

import { formatPrice } from '../../../utils/lib';

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
            <div className="project-material-calc__common">
                <div>Товар: {formatPrice(material)}</div>
                <div>x 3: {formatPrice(cost)}</div>
                <div>C НДС: {formatPrice(withNds)}</div>
                <div>НДС: {formatPrice(nds)}</div>
                <div>Минус товар и НДС: {formatPrice(workCost)}</div>
            </div>
            <div className="project-material-calc__work">
                <div>Столяр: {formatPrice(carpenter)}</div>
                <div>Моляр: {formatPrice(painter)}</div>
                <div>Проект: {formatPrice(project)}</div>
                <div>Моржа: {formatPrice(margin)}</div>
            </div>
        </>
    );
};

export default ProjectMaterialCalc;
