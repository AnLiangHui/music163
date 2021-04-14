// import { Map } from 'immutable';
import { produce } from 'immer';

import * as actionTypes from './constants';

const defaultState = {
  currentArea: 7,
  currentType: {
    name: "推荐歌手",
    type: 1
  },
  artistList: []
};

const reducer = produce((state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_AREA:
      state.currentArea = action.currentArea;
      return state;
      // return state.set("currentArea", action.currentArea);
    case actionTypes.CHANGE_CURRENT_TYPE:
      state.currentType = action.currentType;
      return state;
      // return state.set("currentType", action.currentType);
    case actionTypes.CHANGE_ARTIST_LIST:
      state.artistList = action.artistList;
      return state;
      // return state.set("artistList", action.artistList);
    default:
      return state;
  }
})

export default reducer;
