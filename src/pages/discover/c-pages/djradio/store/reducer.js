// import { Map } from "immutable";
import { produce } from 'immer';
import * as actionTypes from './constants';

const defaultState = {
  categories: [],
  currentId: 0,
  recommends: [],
  radios: []
}

const reducer = produce((state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_RADIO_CATEGORY:
      state.categories = action.categories;
      return state;
      // return state.set("categories", action.categories);
    case actionTypes.CHANGE_CURRENT_ID:
      state.currentId = action.currentId;
      return state;
      // return state.set("currentId", action.currentId);
    case actionTypes.CHANGE_RECOMMENDS:
      state.recommends = action.recommends;
      return state;
      // return state.set("recommends", action.recommends);
    case actionTypes.CHANGE_RADIOS:
      state.radios = action.radios;
      return state;
      // return state.set("radios", action.radios);
    default: 
      return state;
  }
})

export default reducer;
