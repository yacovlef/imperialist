import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { submitProjectMaterialAddCreate } from './project-material-add-action';
import { fetchNomenclatureList } from '../../Nomenclature/NomenclatureList/nomenclature-list-action';

import ProjectMaterialAdd from './ProjectMaterialAdd';

const mapStateToProps = ({ nomenclatureList: { nomenclatureList }, projectMaterialAdd: { loading, error } }) => {
    return {
        nomenclatureList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchNomenclatureList,
        submitProjectMaterialAddCreate
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMaterialAdd);
