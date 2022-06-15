import React from 'react';
import  ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './slider/App';
import  reducer from './slider/reducer';

ReactDOM.render(
    <Provider store={createStore(reducer)}>

        <App />
    </Provider>,
    document.querySelector('#root'));