import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NomenclatureForm from './NomenclatureForm';

const mapStateToProps = ({ nomenclatureForm: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch, { onSubmit }) => {
    return bindActionCreators({
        onSubmit
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NomenclatureForm);
