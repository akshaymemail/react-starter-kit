import React, { Suspense as AppLoading, useState } from "react";
import Navigation from "@navigation";
import { Provider } from "react-redux";
import { store, persistor } from "@redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as AppRouter } from "react-router-dom";
import Fallback from "@components/Fallback";
import { ConfigProvider as AppTheme } from "antd";
import themes from "@themes";

// file imports
import "./i18n";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppLoading fallback={<Fallback />}>
          <AppRouter>
            <AppTheme>
              <Navigation />
            </AppTheme>
          </AppRouter>
        </AppLoading>
      </PersistGate>
    </Provider>
  );
}

export default App;
