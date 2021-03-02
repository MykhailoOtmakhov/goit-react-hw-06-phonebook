import { v4 as uuidv4 } from 'uuid'
import { createAction } from '@reduxjs/toolkit'

const addContact = createAction('contacts/Add', (name,number,message) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
        message
    }
}));

const removeContact = createAction('contacts/Remove')

const changeFilter = createAction('contacts/ChangeFilter');

export default { addContact, removeContact, changeFilter }