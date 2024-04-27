import { generateId } from '../utils/generateId';
import {pool} from './client'
import type { InterestedPerson } from './types';

export const registerInterest = async (email: string) => {
  const client = await pool.connect();

  const insertablePerson: InterestedPerson = {
    email,
    id: generateId()
  }

  client.query('INSERT INTO interested_person (id, email) VALUES ($1, $2)', [insertablePerson.id, insertablePerson.email])
}