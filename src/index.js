import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <PersistGate persistor={persistor}> */}
          {/* <UserProvider> */}
          {/* <CategoryProvider> */}
          {/* <CartProvider> */}
          <App />
          {/* </CartProvider> */}
          {/* </CategoryProvider> */}
          {/* </UserProvider> */}
        {/* </PersistGate> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
