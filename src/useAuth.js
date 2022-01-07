/** @format */

import { useState } from "react";

export default function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);
  console.log("working");
  function login() {
    setTimeout(() => {
      setIsAuth(true);
    }, 1000);
    console.log("loged In");
  }
  // function logout() {
  //   setTimeout(() => {
  //     setIsAuth(false);
  //   }, 1000);
  //   console.log("loged Out");
  // }
  return [isAuth, login];
}
