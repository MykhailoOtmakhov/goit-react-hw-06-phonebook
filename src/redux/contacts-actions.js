// import types from './contacts-types'
import { v4 as uuidv4 } from 'uuid'
import { createAction } from '@reduxjs/toolkit'

// const addContact = (name,number) => ({
//     type: types.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     }
// })
const addContact = createAction('contacts/Add', (name,number) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
    }
}));

const removeContact = createAction('contacts/Remove');
// const removeContact = contactId => ({
//     type: types.REMOVE,
//     payload: contactId,
// })

const changeFilter = createAction('contacts/ChangeFilter');
// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
//   })

export default { addContact, removeContact, changeFilter }