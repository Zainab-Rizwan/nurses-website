import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "App";
import authReducer from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { ConnectedRouter } from "connected-react-router";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/lib/integration/react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
// import "./Assets/Scss/globalStyleSheet.scss";
// // import "react-pro-sidebar/dist/css/styles.css";
// // import reportWebVitals from "./reportWebVitals";
// // import Notification from './helpers/Notifications';

// import { store, persistor, history } from "./Store";

// const app = (
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <PersistGate persistor={persistor}>
//         {/* <Notification /> */}
//         <App />
//       </PersistGate>
//     </ConnectedRouter>
//   </Provider>
// );

// ReactDOM.render(app, document.getElementById("root"));