import React, { useEffect } from "react";
import shortid from "shortid";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/operations";
import { getVisibleContacts, getContacts } from "../../redux/selectors";
import s from "./ContactsList.module.css";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const contactStatus = useSelector((state) => state.contacts.status);
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => dispatch(deleteContact(contactId));

  //   useEffect(() => {
  //     if (contactStatus === "idle") {
  //       dispatch(fetchContacts());
  //     }
  //   }, [dispatch, contactStatus]);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contactsWrapper}>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <span>{name}: </span>
              <span>{number}</span>
              <button
                className={s.contactButton}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
