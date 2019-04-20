import * as React from 'react';
import Header from "./header/Header";
import './App.less';
import RecordsList from "./content/RecordsList";
import {Record, IEmpty, PopUpState} from '../types'
import PopUp from "./content/pop_up/PopUp";
import Card from "./popup/Card";
import store from "../ReduxStore";


class App extends React.Component<IEmpty, PopUpState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pulledRecord: null,
            stateStatus: false
        } as PopUpState
    }

    render() {
        return (
            <div className='app_wrapper'>
                <Header/>
                <RecordsList itemClk={(rec: Record) => {
                    alert("Bitch");
                    this.setState({
                        pulledRecord: rec,
                        stateStatus: true
                    })
                }}/>
                {this.state.stateStatus ? <PopUp
                    record={this.state.pulledRecord}
                    closeHdl={()=>this.setState({
                        pulledRecord: null,
                        stateStatus: false
                    })}/> : <div/>}


                <RecordsList/>
                <Card record={store.getState().records[0]}/>

            </div>);
    }
}

export default App;
