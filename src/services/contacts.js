import { Contact } from "../db/models/contact.js";

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};
