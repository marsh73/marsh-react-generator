import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from './homeActionTypes'
import * as actions from './homeActions'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('tweetListActions', () => {

  afterEach(() => {
    nock.cleanAll()
  })

  describe('test', function() {



  });

})
