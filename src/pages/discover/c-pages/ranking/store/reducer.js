// import { Map } from "immutable";
import { produce } from "immer";
import * as actionTypes from './constants';

const defaultState = {
  topList: [],
  currentIndex: 0,
  playList: {}
}

const reducer = produce((state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      state.topList = action.topList;
      return state;
      // return state.set("topList", action.topList);
    case actionTypes.CHANGE_CURRENT_INDEX:
      state.currentIndex = action.currentIndex;
      return state;
      // return state.set("currentIndex", action.currentIndex);
    case actionTypes.CHANGE_PLAY_LIST:
      state.playList = action.playList;
      return state;
      // return state.set("playList", action.playList);
    default:
      return state;
  }
})

export default reducer;
