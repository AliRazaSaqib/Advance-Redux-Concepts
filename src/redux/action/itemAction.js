/** @format */

import { DELETE_ITEM, ADD_ITEM } from "./types";

// This portion is just for add and delete items from the card
export const addItems = (productList) => {
  return (dispatch) => dispatch({ type: ADD_ITEM, payload: productList });
};

export const deleteItems = (productList) => {
  return (dispatch) => dispatch({ type: DELETE_ITEM, payload: productList });
};
