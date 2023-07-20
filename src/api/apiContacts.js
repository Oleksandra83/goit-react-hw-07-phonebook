import axios from 'axios';

const contactsInstance = axios.create({
	baseURL: 'https://64b93bc879b7c9def6c0c911.mockapi.io/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const addContact = data => {
	return contactsInstance.post('/', data);
};

export const deleteContact = id => {
	return contactsInstance.delete(`/${id}`);
};

export const editContact = data => {
	return contactsInstance.put(`/${data.id}`, {
		name: data.name,
		phone: data.phone,
	});
};