import { createStore, applyMiddleware } from 'redux';
import { reducer } from './src/reducers/index';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { watchLoadData } from './src/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchLoadData);
