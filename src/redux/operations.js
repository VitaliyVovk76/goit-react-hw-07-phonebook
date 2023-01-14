import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllContacts,
  addNewContact,
  deleteContacts,
} from "../contacts-api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (thunkAPI) => {
    try {
      const response = await fetchAllContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await addNewContact(contact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const responce = await deleteContacts(contactId);
      return responce.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
