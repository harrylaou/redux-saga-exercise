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
    /*
    const fetchBeersGenerator = fetchBeers()

    const selectIsFetching = fetchBeersGenerator.next()
    expect(selectIsFetching.value.SELECT.selector).to.be.equal(isFetchingBeers)

    const putFetchingBeers = fetchBeersGenerator.next(false)
    expect(putFetchingBeers.value.PUT.action).to.be.deep.equal(fetchingBeers(true))

    const settings = {
      session: {
        id: 1
      }
    }
    const selectSettings = fetchBeersGenerator.next(true)
    expect(selectSettings.value.SELECT.selector).to.be.equal(settingsSelector)

    const callApiGetBeers = fetchBeersGenerator.next(settings)
    expect(callApiGetBeers.value.CALL.fn).to.be.deep.equal(getBeers)
    expect(callApiGetBeers.value.CALL.args).to.be.deep.equal([settings.session.id])

    const beers = []
    let action = fetchBeersGenerator.next(beers)
    expect(action.value.PUT.action).to.be.deep.equal({ type: RECEIVE_BEERS, beers })

    action = fetchBeersGenerator.next()
    expect(action.value.PUT.action).to.be.deep.equal({ type: FETCHING_BEERS, isFetching: false })
    */
  })

  it('should NOT fetch beers if it is already fetching beers', () => {
    /*
    const fetchBeersGenerator = fetchBeers()
    const selectIsFetching = fetchBeersGenerator.next()
    expect(selectIsFetching.value.SELECT.selector).to.be.equal(isFetchingBeers)

    const yieldedOutput = fetchBeersGenerator.next(true)
    expect(yieldedOutput.done).to.be.equal(true)
    */
  })
})
