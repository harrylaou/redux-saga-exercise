import {takeEvery} from 'redux-saga'
import {call, put, select} from 'redux-saga/effects'
import * as api from '../api'
import * as selectors from '../selectors'
import {RECEIVE_SESSION,receiveSession,START_SESSION,FETCH_BEERS,fetchingBeers,receiveBeers} from '../actions'

export function * helloSaga() {
    console.log('Hello Sagas!')
}

export function* startSession() {

    //api.startSession().then(receiveSession)
    const session = yield call(api.startSession)
    yield put(receiveSession(session))
}


export function* all() {
    yield takeEvery(START_SESSION,startSession)
    yield takeEvery(FETCH_BEERS,fetchBeers)
}

export function* fetchBeers() {
  if  ( yield select(selectors.isFetchingBeers)) {
    return
  }
  yield put(fetchingBeers(true))
  const beers = yield call(api.getBeers, selectors.id)
  yield put(receiveBeers(beers))
  yield put(fetchingBeers(false))
}
