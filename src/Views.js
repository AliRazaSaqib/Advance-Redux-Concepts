/** @format */

import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import Checkout from "./components/Checkout";
import SignUp from "./components/SignUp";
import UseLogin from "./components/UseLogin";

import PageNotFound from "./components/PageNotFound";
import { useSelector } from "react-redux";

const Views = () => {
  // const [isAuth, login] = useAuth(false);
  // console.log("au", isAuth);
  const isLogedIn = useSelector((state) => state.auth.loggedIn == true);
  console.log("log", isLogedIn);

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
            {isLogedIn ? (
              <>
                <Route path="/mainComponent" element={<MainComponent />} />
                <Route path="/checkout" element={<Checkout />} />
              </>
            ) : null}
            <Route path="/:pageName" element={<PageNotFound />}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default Views;
