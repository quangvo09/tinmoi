import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from "./reducers";

let logger = createLogger({
  timestamps: true,
  duration: true
});

const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
  const store = createStore(rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}


export default makeStore;