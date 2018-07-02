import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var doms = (
    <div>
        <App name="sethu"/>
        <App name="suresh"/>
    </div>
);
ReactDOM.render(doms, document.getElementById('root'));
registerServiceWorker();
