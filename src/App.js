/** @format */

import "./App.css";

import { Provider } from "react-redux";
import store, { persistor } from "./store";
import Views from "./Views";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Views />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
