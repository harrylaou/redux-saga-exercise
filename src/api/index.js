// @flow
import 'whatwg-fetch'
import Promise from 'es6-promise'
import { API_BASE_URL, BEER_LIMIT_PER_PAGE } from '../config'

Promise.polyfill()

const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Request-Method': 'POST',
  'Content-Type': 'application/json'
}

export const startSession = () => (
  fetch(`${API_BASE_URL}/sessions`, {
    method: 'POST',
    headers: defaultHeaders,
    mode: 'cors',
    body: JSON.stringify({ locale: 'en' })
  })
  .then(response => response.json())
  .then(session => session)
)

export const getBeers = (session:string) => (
  fetch(`${API_BASE_URL}/sessions/${session}/next-products?limit=${BEER_LIMIT_PER_PAGE}`, {
    method: 'GET',
    headers: defaultHeaders,
    mode: 'cors'
  }).then(response => (
    response.json()
  ))
  .then(beers => beers)
)
