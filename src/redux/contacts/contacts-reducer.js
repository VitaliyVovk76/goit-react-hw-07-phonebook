import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  addContacts,
} from "./contacts-operations";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./contacts-actions";

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,

  [addContacts.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },

  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter((item) => item.id !== payload);
  },
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true, //когда идет запрос - включаем лоадер
  [addContactSuccess]: () => false, //получили запрос - отключаем
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});
