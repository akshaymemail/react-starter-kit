import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = lazy(() => import("./App"));

// create container where your app will be loaded
const container = document.getElementById("root");

// create root
const root = createRoot(container);

// render your app
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Suspense fallback={<p>...</p>}>
        <App />
      </Suspense>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
