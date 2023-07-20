import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { toastifyOptions } from 'untils/toastifyOptions';

import * as api from 'api/apiContacts';

export const fetchContacts = createAsyncThunk(
	'contacts/fethAll',
	async (_, thunkAPI) => {
		try {
			const { data } = await api.getAllContacts();
			return data;
		} catch ({ response }) {
			return thunkAPI.rejectWithValue(
				`Ooops! Wrong... Try again or update browser`
			);
		}
	}
);

const isDublicate = (contacts, { name, phone }) => {
	const normalizName = name.toLowerCase().trim();
	const normalizPhone = phone.trim();
	const dublicate = contacts.some(
		contact =>
			contact.name.toLowerCase().trim() === normalizName ||
			contact.phone.trim() === normalizPhone
	);
	return dublicate;
};

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (data, { rejectWithValue }) => {
		try {
			const { data: result } = await api.addContact(data);
			toast.success('Add contact', {
				position: 'bottom-right',
			});
			return result;
		} catch ({ response }) {
			return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
		}
	},
	{
		condition: (data, { getState }) => {
			const {
				contacts: { items },
			} = getState();
			
			if (isDublicate(items, data)) {
				toast.error(`This contact is already in contacts`, toastifyOptions);
				return false;
			}
		},
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (id, { rejectWithValue }) => {
		try {
			await api.deleteContact(id);
			toast.success('Contact delete', {
				position: 'bottom-right',
			});
			return id;
		} catch ({ response }) {
			return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
		}
	}
);

export const changeContact = createAsyncThunk(
	'contacts/editContact',
	async (data, { rejectWithValue }) => {
		try {
			const { data: result } = await api.editContact(data);
			toast.success('Contact update', {
				position: 'bottom-right',
			});
			return result;
		} catch ({ response }) {
			return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
		}
	}
);