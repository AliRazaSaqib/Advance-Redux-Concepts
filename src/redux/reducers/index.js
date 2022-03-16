/** @format */

import { combineReducers } from "redux";
import authReducers from "./authReducers";
import itemReducers from "./itemReducers";

export default combineReducers({
  item: itemReducers,
  auth: authReducers,
});
