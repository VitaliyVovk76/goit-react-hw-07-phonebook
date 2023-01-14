import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,

  extraReducers(builder) {
    builder
      //fetch
      .addCase(fetchContacts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        // Add any fetched posts to the array
        state.items = state.items.concat(action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //add
      .addCase(addContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //delete
      .addCase(deleteContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.error = null;
        // const index = state.items.findIndex((e) => e.id === payload.id);
        // state.items.splice(index, 1);
        state.items = state.items.filter((item) => item.id !== payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
