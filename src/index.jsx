import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore.dev'
import App from './components/App'
import {all} from './sagas'
const store = configureStore()

// Tip: you have to uncomment the next line and make it work by doing something else...
// store.runSaga(rootSaga)
//
//
store.runSaga(all)
ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
