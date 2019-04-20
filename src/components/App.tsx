import * as React from 'react';
import Header from "./header/Header";
import './App.less';
import RecordsList from "./content/RecordsList";

class App extends React.Component {

    render() {
        return (
            <div className='app_wrapper' >
                <Header/>
                <RecordsList/>
            </div>);
    }
}

export default App;
