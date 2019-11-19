import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchNomenclatureList } from './nomenclature-list-action';

import NomenclatureList from './NomenclatureList';

const mapStateToProps = ({ nomenclatureList: { nomenclatureList, loading, error } }) => {
    return {
        nomenclatureList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchNomenclatureList
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NomenclatureList);
