/** @format */

import "./App.css";

import { Provider } from "react-redux";
import store, { persistor } from "./store";
import Views from "./Views";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  // const [spin, setSpin] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSpin(false);
  //   }, 3000);
  // }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* {spin ? <Loader /> : <MainComponent />} */}

          {/* {spin ? (
          <Loader />
        ) : (
          <Router>
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/mainComponent" exact element={<MainComponent />} />
              <Route path="/checkout" exact element={<Checkout />} />
            </Routes>
          </Router>
        )} */}
          <Views />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
