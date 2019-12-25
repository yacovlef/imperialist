import { connect } from 'react-redux';

import WagesInfo from './WagesInfo';

const mapStateToProps = ({ wagesList: { wagesList } }) => {
    return {
        wagesList
    };
};

export default connect(mapStateToProps)(WagesInfo);
