import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;
export const selectFilter = ({ filter }) => filter;
export const selectContacts = ({ contacts }) =>
	[...contacts.items].sort((a, b) => a.name.localeCompare(b.name));

export const selectFilteredContacts = createSelector(
	[selectContacts, selectFilter],
	(contacts, filter) => {
		if (!filter) {
			return contacts;
		}
		const normalizFilter = filter.toLowerCase();
		const filteredContacts = contacts.filter(
			({ name, phone }) =>
				name.toLowerCase().trim().includes(normalizFilter) ||
				phone.trim().includes(normalizFilter)
		);
		return filteredContacts;
	}
);