import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filte) => {
    console.log("contacts: ", contacts);
    const normalizedFilter = filte.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
