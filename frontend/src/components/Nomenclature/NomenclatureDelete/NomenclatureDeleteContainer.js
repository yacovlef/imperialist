import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NomenclatureDelete from './NomenclatureDelete';

import { submitNomenclatureDelete } from './nomenclature-delete-action';

const mapStateToProps = ({ nomenclatureDelete: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSubmit: submitNomenclatureDelete
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NomenclatureDelete);
