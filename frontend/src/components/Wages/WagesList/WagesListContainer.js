import { connect } from 'react-redux';

import WagesList from './WagesList';

const mapStateToProps = ({ wagesList: { wagesList, loading, error } }) => {
    return {
        wagesList,
        loading,
        error
    };
};

export default connect(mapStateToProps)(WagesList);
