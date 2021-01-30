/** Libraries */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

/** Reducers */
import rootReducer from './root-reducer';

/** Sagas */
import { fetchCollectionStart } from './shop/shop.saga';

/** If we want to use thunk */
//const middlewares = [thunk];

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionStart);

export const persistor = persistStore(store);
