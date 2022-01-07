/** @format */

import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import Checkout from "./components/Checkout";
import SignUp from "./components/SignUp";
import UseLogin from "./components/UseLogin";

import useAuth from "./useAuth";
import PageNotFound from "./components/PageNotFound";

const Views = () => {
  const [isAuth, login] = useAuth(false);
  console.log("au", isAuth);

  // for loading spinner
  const [spin, setSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 3000);
  }, []);

  return (
    <div>
      {spin ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            {/* Routes before Login */}
            <Route path="/" exact element={<UseLogin />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Routes after Login */}
            {isAuth ? (
              <>
                <Route path="/mainComponent" element={<MainComponent />} />
                <Route path="/checkout" element={<Checkout />} />
              </>
            ) : (
              login()
            )}
            <Route path="/:pageName" element={<PageNotFound />}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default Views;
