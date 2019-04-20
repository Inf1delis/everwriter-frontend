import * as React from 'react';
import Header from "./header/Header";
import './App.less';
import RecordsList from "./content/RecordsList";
import {Record, IEmpty, PopUpState} from '../types'
import EditPopUp from "./popup/PopUp";
import EditCard from "./popup/EditCard";
import store from "../ReduxStore";
import {MyWebSocket} from "../WebSocket";


class App extends React.Component<IEmpty, PopUpState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pulledRecord: {},
            stateStatus: false,
            connectionStatus: false,
        } as PopUpState
        MyWebSocket.statusChCallBack = this.handleStatusChange.bind(this);
    }

    handleStatusChange(status:boolean){
        this.setState({connectionStatus: status});
    }

    render() {
        return (
            <div className='app_wrapper'>
                <Header status = {this.state.connectionStatus}/>
                <RecordsList itemClk={(rec: Record) => {
                    this.setState({
                        pulledRecord: rec,
                        stateStatus: true
                    })
                }}/>

                {this.state.stateStatus ? <EditPopUp
                    record={this.state.pulledRecord}
                    closeHdl={()=> this.setState({
                            pulledRecord: null,
                            stateStatus: false
                        })}
                    currentNameAction='EDIT'/> : <div/>}


            </div>);
    }
}

export default App;
