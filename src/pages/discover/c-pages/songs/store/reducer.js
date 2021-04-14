// import { Map } from "immutable";
import { produce } from "immer";
import * as actionTypes from "./constants";

const defaultState = {
  category: [],
  currentCategory: "全部",
  categorySongs: {}
}

const reducer =  produce((state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_CATEGORY:
      state.category = action.category;
      return state;
      // return state.set("category", action.category);
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      state.currentCategory = action.currentCategory;
      return state;
      // return state.set("currentCategory", action.currentCategory);
    case actionTypes.CHANGE_CATEGORY_SONGS:
      state.categorySongs = action.categorySongs;
      return state;
      // return state.set("categorySongs", action.categorySongs);
    default:
      return state;
  }
})

export default reducer;
