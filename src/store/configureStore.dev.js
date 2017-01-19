import createLogger from 'redux-logger'
// import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const configureStore = () => {
  // const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    applyMiddleware(
      // sagaMiddleware,
      thunk,
      promise,
      createLogger()
    )
  )

  return {
    ...store
    // runSaga: sagaMiddleware.run
  }
}

export default configureStore
