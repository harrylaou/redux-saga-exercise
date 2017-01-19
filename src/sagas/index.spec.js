import { getBeers, startSession as apiStartSession } from '../api'
import { fetchingBeers, receiveSession, FETCHING_BEERS, RECEIVE_BEERS } from '../actions'
import { fetchBeers, startSession } from './'
import { isFetchingBeers, settings as settingsSelector } from '../selectors'
import { expect } from 'chai'

describe('#Saga: startSession', () => {
  it('should start a session', () => {
    const session = { session: 1 }
    const startSessionGenerator = startSession()

    const callApiStartSession = startSessionGenerator.next()
    expect(callApiStartSession.value.CALL.fn).to.be.deep.equal(apiStartSession)

    const putStartSession = startSessionGenerator.next(session)
    expect(putStartSession.value.PUT.action).to.be.deep.equal(receiveSession(session))
  })
})

describe('#Saga: fetchBeers', () => {
  it('should fetch beers if it is not already fetching', () => {

  })

  it('should NOT fetch beers if it is already fetching beers', () => {
    
  })
})
