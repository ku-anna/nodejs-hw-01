import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.pop();
    await writeContacts(contacts);
  } catch (error) {
    console.error('Error removing the last contact:', error);
  }
};

removeLastContact();
