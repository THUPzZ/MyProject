import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './reducers'
import App from './components/main';

const store = createStore(rootReducer)

const MyApp = () => (
    <Provider store={store} >
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  )

ReactDOM.render(<MyApp/>, document.getElementById('App'));
