import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { toastifyOptions } from 'untils/toastifyOptions';
import { fetchContacts } from "redux/contacts/contactsOperations";
import {
	selectContacts,
	selectError,
	selectFilteredContacts,
	selectFilter,
	selectIsLoading,
 } from '../../redux/selectors';
import { IoPersonRemove } from 'react-icons/io5'
import { List, ContactItem, ContactDelete, Item } from './ContactList.styled';

import { deleteContact } from '../../redux/contacts/contactsOperations';

export const ContactList = () => {
	const contacts = useSelector(selectContacts);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const filter = useSelector(selectFilter);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const result = useSelector(selectFilteredContacts);

	const getFilterContacts = data => {
		if (filter.toLowerCase() && !data.length) {
			toast.warn(`No contacts matching your request`, toastifyOptions);
		}
		return data;
	};

	const filteredContacts = getFilterContacts(result);
	
	const onDeleteContact = contactId => {
		dispatch(deleteContact(contactId));
	};
	return (
		<>
		{isLoading && contacts?.length === 0 && <div>Loading ... </div>}
		{error && !isLoading && <div>Ooops, error ... </div>}
		{!filteredContacts?.length && !error && !isLoading && (
			<span>Contacts not found</span>
		)}
		{!error && !isLoading && filteredContacts?.length > 0 && (
			<List>
			{filteredContacts?.map(({ name, phone, id }) => {
				return (
					<ContactItem key={id}>
						<Item>{name}:</Item>
						<Item>{phone}</Item>

						<ContactDelete type="button" onClick={() => onDeleteContact(id)}>
							< IoPersonRemove size="16" />
							Delete
						</ContactDelete>
					</ContactItem>
				);
			})}
			</List>
		)}
		</>
	);
};