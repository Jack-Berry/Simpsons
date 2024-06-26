import { initialState } from "./initialState";
import { SET_DATA, SET_FAVS, FILTER_DATA, UPDATE_DATA } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA: {
      const copy = { ...state };
      copy.data = action.data;
      return copy;
    }

    case SET_FAVS: {
      let copy = { ...state };
      copy.favs = action.newFavourites;
      return copy;
    }
    case FILTER_DATA: {
      const copy = { ...state };
      copy.data = action.filtered;
      return copy;
    }
    case UPDATE_DATA: {
      const copy = { ...state };
      copy.data = action.dataCopy;
      console.log(copy.data);
      return copy;
    }

    default:
      return state;
  }
}
