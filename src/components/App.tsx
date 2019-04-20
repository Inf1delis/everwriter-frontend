import * as React from 'react';
import Header from "./header/Header";
import './App.less';
import RecordsList from "./content/RecordsList";
import Card from "./popup/Card";
import store from "../ReduxStore";


class App extends React.Component {

    render() {
        return (
            <div className='app_wrapper' >
                <Header/>
                <RecordsList/>
                <Card record={store.getState().records[0]}/>
            </div>);
    }
}

export default App;
