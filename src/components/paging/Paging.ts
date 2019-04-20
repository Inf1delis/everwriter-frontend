import {connect} from "react-redux";
import {PagingView} from "./PagingView";


const mapStateToProps = (state:any) => {
    return {
        currentPage : state.currentPage,
        lastPage: state.lastPage
    }
};

const Paging = connect(
    mapStateToProps
)(PagingView);

export default Paging