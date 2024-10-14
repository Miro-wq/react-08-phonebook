import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import { deleteContact } from '../redux/contactSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={() => handleDelete(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
