/** @format */

import React from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  console.log("not working");
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth)
          // return <navigate to={{ path: "/", state: { from: props.location } }} />;
          return navigate("/mainComponent");
      }}
    />
  );
};

export default ProtectedRoute;
