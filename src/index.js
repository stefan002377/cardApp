import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './state';
import rootSaga from './state/saga';
import CardsApp from "./containers/CardsApp"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   rootReducer,
   applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
       <CardsApp />
    </Provider>
  );  
}

ReactDOM.render(<App />, document.getElementById('root'));
