import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactsList";
import Filter from "./components/Filter/Filter";
import Title from "./components/Title";
import Button from "./components/Button";
import Section from "./components/Section";
import Modal from "./components/Modal";
import { getModal } from "./redux/selectors";
import { toggleModal } from "./redux/modalSlice";
import s from "./App.module.css";

function App() {
  const showModall = useSelector(getModal);
  const disputch = useDispatch();
  return (
    <Container>
      <Section>
        <Title text="Phonebook" type="first" />
        <Button
          type="button"
          onClick={() => disputch(toggleModal(showModall))}
          text="Create contact"
          id="create"
        />
        {showModall && (
          <Modal>
            <ContactForm />
          </Modal>
        )}

        <Title text="Find contacts by name" type="second" />
        <Filter />
        <Title text="Contacts" type="second" />
        <ContactList />
      </Section>
      {/* <ToastContainer autoClose={3000} /> */}
    </Container>
  );
}

export default App;
