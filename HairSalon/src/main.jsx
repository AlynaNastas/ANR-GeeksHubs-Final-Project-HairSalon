import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from "./MainApp";
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import store from "./application/store";

const persistore = persistStore(store)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
