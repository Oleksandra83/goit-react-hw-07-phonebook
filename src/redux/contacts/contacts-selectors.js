import { toast } from 'react-toastify';
import { toastifyOptions } from 'untils/toastifyOptions';

export const getContacts = store => store.contacts;

export const getFilterContacts = store => {
	const {filter, contacts} = store;
	if (!filter) {
		return contacts;
	}
	const normalizFilter = filter.toLowerCase();
	const filterContacts = contacts.filter(
		({ name, number }) =>
			name.toLowerCase().trim().includes(normalizFilter) ||
			number.trim().includes(normalizFilter)
	);
	if (normalizFilter && !filterContacts.length) {
		toast.warn(`No contacts matching your request`, toastifyOptions);
	}
	return filterContacts;
};