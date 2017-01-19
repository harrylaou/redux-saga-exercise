import { takeEvery } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import * as api from '../api'

import {
  fetchingBeers, receiveBeers, receiveSession,
  FETCH_BEERS, START_SESSION
} from '../actions'
import {
  isFetchingBeers, settings as settingsSelector
} from '../selectors'

export function* fetchBeers () {
  const isFetching = yield select(isFetchingBeers)
  if (isFetching) {
    return
  }

  try {
    yield put(fetchingBeers(true))
    const settings = yield select(settingsSelector)
    const beers = yield call(api.getBeers, settings.session.id)
    yield put(receiveBeers(beers))
  } catch (error) {
    console.log(error)
  } finally {
    yield put(fetchingBeers(false))
  }
}

export function* startSession () {
  const session = yield call(api.startSession)
  yield put(receiveSession(session))
}

export default function* rootSage () {
  yield takeEvery(FETCH_BEERS, fetchBeers)
  yield takeEvery(START_SESSION, startSession)
}

