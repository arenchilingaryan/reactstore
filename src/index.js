import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/app'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import {BrowserRouter} from 'react-router-dom'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(),
    );

  const store = createStore(
    rootReducer, 
    enhancer
  )

  const app = 
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
</BrowserRouter>

ReactDOM.render(app, document.getElementById('root'))