import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import './index.css';

const target = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);

console.log('lalala');
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`)
        .catch(function(err) {
            console.error('Unable to register service worker.', err);
        });
}