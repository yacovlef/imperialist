import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { submitProductMaterialAddCreate } from './product-material-add-action';
import { fetchNomenclatureList } from '../../Nomenclature/NomenclatureList/nomenclature-list-action';

import ProductMaterialAdd from './ProductMaterialAdd';

const mapStateToProps = ({ nomenclatureList: { nomenclatureList }, productMaterialAdd: { loading, error } }) => {
    return {
        nomenclatureList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchNomenclatureList,
        submitProductMaterialAddCreate
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductMaterialAdd);
