import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App} from "./router";
import Reducer from "./reduxstore";

const store = createStore(Reducer);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

