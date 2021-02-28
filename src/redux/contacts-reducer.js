import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import actions from './contacts-actions'

const items = createReducer([], {
    [actions.addContact]: (state,{ payload }) => [...state, payload],
    [actions.removeContact]: (state,{ payload }) => state.filter(({id})=>id !== payload)
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload, 
    [actions.removeContact]: _ => '',
})

export default combineReducers({
    items,
    filter
})
