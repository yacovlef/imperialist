import React, { Component } from 'react';

import Info from '../../@common/Info';
import NomenclatureListItem from '../NomenclatureListItem';

class NomenclatureList extends Component {
    componentDidMount() {
        this.props.fetchNomenclatureList();
    }

    render() {
        const { nomenclatureList, error } = this.props;

        if (error) {
            return <Info
                type='error'
            />;
        }

        return nomenclatureList.map(
            (nomenclatureItem) => {
                return <NomenclatureListItem
                    key={nomenclatureItem.id}
                    nomenclatureItem={nomenclatureItem}
                />
            }
        )
    }
}

export default NomenclatureList;
