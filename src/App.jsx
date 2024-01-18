import Router from "./router/Router";
import { BrowserRouter as AppRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./i18n";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <AppRouter>
    <Router />
    <ToastContainer />
  </AppRouter>
);

export default App;
