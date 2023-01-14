import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/operations";
import { getVisibleContacts } from "../../redux/selectors";
import s from "./ContactsList.module.css";
import Button from "../Button";

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
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li className={s.item} key={id}>
              <p>
                {name}: {number}
              </p>
              <Button
                text="Delete"
                id="delete"
                type="button"
                onClick={() => onDeleteContact(id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
