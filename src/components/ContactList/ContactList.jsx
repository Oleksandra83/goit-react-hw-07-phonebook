import {useDispatch, useSelector} from "react-redux";

import { IoPersonRemove } from 'react-icons/io5'
import { List, ContactItem, ContactDelete, Item } from './ContactList.styled';

import { deleteContact } from "redux/contacts/contacts-slice";
import { getFilterContacts } from "redux/contacts/contacts-selectors";

export const ContactList = () => {
	const filterContacts = useSelector(getFilterContacts);
	const dispatch = useDispatch();
	const onDeleteContact = contactId => {
		dispatch(deleteContact(contactId));
	};
	return (
		<List>
			{filterContacts.map(({ name, number, id }) => {
				return (
					<ContactItem key={id}>
						<Item>{name}:</Item>
						<Item>{number}</Item>

						<ContactDelete type="button" onClick={() => onDeleteContact(id)}>
							< IoPersonRemove size="16" />
							Delete
						</ContactDelete>
					</ContactItem>
				);
			})}
		</List>
	);
};