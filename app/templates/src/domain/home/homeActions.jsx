import * as types from './homeActionTypes'
import * as api from './homeApi'



function callAction (data) {
  return {
    type: types.ACTION_CALLED,
    data: data
  }
}

export const triggerAction = (param) => {
  return dispatch => {
    return api.apiCall(param)
      .then(data => {
        dispatch(callAction(data))
      })
  }
}
