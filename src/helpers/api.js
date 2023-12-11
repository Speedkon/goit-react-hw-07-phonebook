import axios from 'axios';

axios.defaults.baseURL = "https://65772f13197926adf62d96db.mockapi.io/";

export async function fetchContacts() {
    const response = await axios("/contacts");
    return response.data;
};

export async function addContact(newContact) {
    const response = await axios.post("/contacts", newContact);
    return response.data;
};

export async function deleteContact(id) {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
};