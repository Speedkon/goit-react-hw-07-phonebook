import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "../helpers/api";

export const getContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, {rejectWithValue}) => {

        try {
            const contacts = await fetchContacts();
            return contacts;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const addNewContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, {rejectWithValue}) => {

        try {
            const response = await addContact(newContact);
            return response;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContact",
    async (id, {rejectWithValue}) => {

        try {
            const deleted = await deleteContact(id);
            return deleted;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)