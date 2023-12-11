import { createSlice } from '@reduxjs/toolkit';
import { addNewContact, deleteContacts, getContacts } from './operations';

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {items: [],
                isLoading: false,
                error: null},
    extraReducers: (builder) => {
        builder 
        .addCase(getContacts.pending, (state) => {
            state.isLoading = true;
            })
        .addCase(getContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(getContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

        .addCase(deleteContacts.fulfilled, (state, action) => {
            const contactId = action.payload.id;
            state.items = state.items.filter(contact => contact.id !== contactId);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(deleteContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

        .addCase(addNewContact.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addNewContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items.push(action.payload);
            state.error = null;
        })
        .addCase(addNewContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});
export const contactReducer = contactSlice.reducer;