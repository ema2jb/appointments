import React from "react";

export const ContactPicker = ({handleContactChange, contacts }) => {
  return (
    <select name='Conatct' onChange={handleContactChange}>
      <option value={""} key={-1} selected="selected">
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact.name} key={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
