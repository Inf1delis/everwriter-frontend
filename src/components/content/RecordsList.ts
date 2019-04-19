import {connect} from "react-redux";
import RecordsListView from "./RecordsListView";


const mapStateToProps = (state:any) => {
    return {
        records : state.records
    }
};

const RecordsList = connect(
    mapStateToProps
)(RecordsListView);

export default RecordsList