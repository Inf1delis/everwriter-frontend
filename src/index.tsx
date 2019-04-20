import * as React from "react";
import * as ReactDOM from "react-dom";

function Test(props:any) {
   return (<div>Hello, world!</div>)
}

ReactDOM.render(<Test compiler="TypeScript" framework="React" />,
                  document.getElementById('main'));
