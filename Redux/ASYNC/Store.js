import {createStore,applyMiddleware} from 'redux';
import NewsReducer from './NewsReducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(NewsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

