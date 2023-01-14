import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = "https://61bc6358d8542f00178246fc.mockapi.io";

export const fetchAllContacts = () => {
  return axios.get("/contacts").then((response) => response.data);
};

export const addNewContact = (contact) => {
  return axios.post("/contacts", contact).then(({ data }) => data);
};

export const deleteContacts = (contactId) => {
  return axios.delete(`/contacts/${contactId}`);
};

export const updateContact = (contactId, update) => {
  return axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
};
