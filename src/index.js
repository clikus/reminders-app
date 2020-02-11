import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

const engine = new Styletron();

function Index(){
    return (
        <StyletronProvider value={engine}>
            <App />
        </StyletronProvider>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));