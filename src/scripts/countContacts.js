import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 'an error occurred while counting the contacts';
  }
};

console.log(await countContacts());
