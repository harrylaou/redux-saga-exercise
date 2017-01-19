import { createStore } from 'redux'
import reducers from '../reducers'

const configureStore = () => {
  const store = createStore(
    reducers
  )

  store.dispatch = sinon.spy(store.dispatch)
  return store
}

export default configureStore
