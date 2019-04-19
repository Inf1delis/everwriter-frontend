import * as React from 'react';
import Header from "./header/Header";
import WorkSpace from "./content/WorkSpace";
import './App.less';

class App extends React.Component {

    render() {
        return (
            <div className='app_wrapper' >
                <Header/>
                <WorkSpace/>
            </div>);
    }
}

export default App;
