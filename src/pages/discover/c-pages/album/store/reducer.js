// import { Map } from 'immutable';
import { produce } from 'immer';

import * as actionTypes from './constants';

const defaultState = {
  hotAlbums: [],
  topAlbums: [],
  topTotal: 0
}

const reducer = produce((state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUMS:
      state.hotAlbums = action.hotAlbums;
      return state;
      // return state.set("hotAlbums", action.hotAlbums);
    case actionTypes.CHANGE_TOP_ALBUMS:
      state.topAlbums = action.topAlbums;
      return state;
      // return state.set("topAlbums", action.topAlbums);
    case actionTypes.CHANGE_TOP_TOTAL:
      state.topTotal = action.total;
      return state;
      // return state.set("topTotal", action.total);
    default:
      return state;
  }
})

export default reducer;
