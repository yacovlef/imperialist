import React, { Component } from 'react';

import Info from '../../@common/Info';
import WagesListItem from '../WagesListItem';

class WagesList extends Component {
    render() {
        const { wagesList, error } = this.props;
        
        if (error) {
            return <Info
                type='error'
            />;
        }

        if (!wagesList.length) {
            return <Info
                message='Зарплат не найдено.'
            />;
        }
        
        return wagesList.map(
            (wagesItem) => {
                return <WagesListItem
                    key={wagesItem.id}
                    wagesItem={wagesItem}
                />
            }
        )
    }
}

export default WagesList;
