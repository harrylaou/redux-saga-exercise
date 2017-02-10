// @flow
import 'whatwg-fetch'
import Promise from 'es6-promise'
import { API_BASE_URL } from '../config'

Promise.polyfill()

const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Request-Method': 'POST',
  'Content-Type': 'application/json'
}

export const startSession = () => (
  fetch(`${API_BASE_URL}/public/session.json`, {
    method: 'GET',
    headers: defaultHeaders,
  })
  .then(response => response.json())
  .then(session => session)
)

export const getBeers = (session:string) => (
  fetch(`${API_BASE_URL}/public/beers.json`, {
    method: 'GET',
    headers: defaultHeaders,
  }).then(response => (
    response.json()
  ))
  .then(beers => beers)
)
