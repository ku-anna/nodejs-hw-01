import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, null, 2);

    await fs.writeFile(PATH_DB, jsonData, 'utf-8');
    console.log('Contact was saved successfully!');
  } catch (error) {
    console.error('Failed to save the contact:', error);
    throw new Error('An error occurred while saving the contact');
  }
};
