/** @format */

import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "./types";

export const addItems = (productList) => {
  return (dispatch) => dispatch({ type: ADD_ITEM, payload: productList });
};

export const deleteItems = (productList) => {
  return (dispatch) => dispatch({ type: DELETE_ITEM, payload: productList });
};
