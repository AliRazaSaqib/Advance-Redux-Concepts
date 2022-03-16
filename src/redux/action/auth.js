/** @format */

import { AUTHENTICATED, NOT_AUTHENTICATED } from "./types";

export const authSignUp = (signUpInfo) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATED, payload: signUpInfo });
  };
};

export const authLogout = () => {
  return (dispatch) => {
    dispatch({ type: NOT_AUTHENTICATED });
  };
};
