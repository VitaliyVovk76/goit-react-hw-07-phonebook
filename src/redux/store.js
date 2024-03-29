import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
import filterReducer from "./filterSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    modal: modalReducer,
  },
});

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// import contactsReducer from "./contacts/contacts-reducer";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//     logger,
//   ],
//   devTools: process.env.NODE_ENV === "development",
// });

// // const persistor = persistStore(store);

// export default store;
