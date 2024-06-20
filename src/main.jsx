import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css';

import { Provider } from 'react-redux'
import store from './redux/store.js'

import { getCharacters } from './slices/characterSlice.js'
import { getLanguage } from './slices/languageSlice.js'

store.dispatch(getCharacters());
store.dispatch(getLanguage());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
