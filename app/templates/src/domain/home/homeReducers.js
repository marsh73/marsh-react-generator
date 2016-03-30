import * as types from './homeActionTypes.js';
import { List, Map } from 'immutable';

const initialState = {
  title: 'home'
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION_CALLED:
      return Object.assign({}, state, {
        this: action.data.this,
        that: action.data.that
      })

    default:
      return state;
  }
}
