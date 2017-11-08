import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux'
import createStore from './config/StoreConfig'
const { store } = createStore()

const Root = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
