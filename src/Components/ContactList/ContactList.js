import React from 'react';

const ContactList = ({ contactList }) => {
  return (
    <ul>
      {contactList.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
