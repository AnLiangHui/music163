import { produce } from "immer";
// import { Map } from "immutable";
import * as actionTypes from './constants';

const defaultState = {
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},
  settleSings: [],
}


const reducer = produce((state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      state.topBanners = action.banners;
      return state;
      // return state.set("topBanners", action.banners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      state.hotRecommends = action.recommends;
      return state;
      // return state.set("hotRecommends", action.recommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      state.newAlbum = action.newAlbum;
      return state;
      // return state.set("newAlbum", action.newAlbum);
    case actionTypes.CHANGE_UP_LIST:
      state.topUpList = action.topUpList;
      return state;
      // return state.set("topUpList", action.topUpList);
    case actionTypes.CHANGE_NEW_LIST:
      state.topNewList = action.topNewList;
      return state;
      // return state.set("topNewList", action.topNewList);
    case actionTypes.CHANGE_ORIGIN_LIST:
      state.topOriginList = action.topOriginList;
      return state;
      // return state.set("topOriginList", action.topOriginList);
    case actionTypes.CHANGE_SETTLE_SONGER:
      state.settleSings = action.settleSings;
      return state;
      // return state.set("settleSings", action.settleSings)
    default:
      return state;
  }
});

export default reducer
