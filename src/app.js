import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import IndexC,{Index} from './container/index';
import reducers from './container/reducers'
import  rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

const render =  (Component) => {
    ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Component />
        </Provider>
    </AppContainer>,
        document.getElementById('container')
)
};
render(IndexC);

if(module.hot) {
    module.hot.accept('./container/index', () => {
        render(Index)
    });
}


