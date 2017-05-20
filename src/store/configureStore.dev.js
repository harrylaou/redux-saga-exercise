import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'
import createSagaMiddleware from 'redux-saga'
import {helloSaga} from '../sagas'

// Tip: replace the thunk and promise middleware with the redux-saga middleware

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {

    const store = createStore(reducers,
         applyMiddleware(thunk,
              promise,
              sagaMiddleware,
               createLogger()
           )
       )

    return {
        ...store,
        runSaga : sagaMiddleware.run

    }
}

export default configureStore
