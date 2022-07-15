import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { createGlobalStyle } from 'styled-components'
import App from "./App";

const store = configureStore();
const persistor = persistStore(store);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #202020;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
