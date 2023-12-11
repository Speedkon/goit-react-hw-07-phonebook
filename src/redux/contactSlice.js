import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            prepare(values) {
                return {
                    payload: {
                        id: nanoid(),
                        name: values.name,
                        number: values.number,
                    }
                }
            },
            reducer(state, action) {
                state.push(action.payload);
            }
        },
        deleteContact: (state, action) => {
            return state = state.filter(contact => contact.id !== action.payload)
        }
    }
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;