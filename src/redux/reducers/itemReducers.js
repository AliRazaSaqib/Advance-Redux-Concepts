/** @format */

import { ADD_ITEM, DELETE_ITEM } from "../action/types";
const initialState = {
  itemsList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, itemsList: action.payload };

    case DELETE_ITEM:
      return { ...state, itemsList: action.payload };

    default:
      return state;
  }
}
