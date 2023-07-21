import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { toastifyOptions } from 'untils/toastifyOptions';
import { Loader } from "components/Loader/Loader";
import { fetchContacts } from "redux/contacts/contactsOperations";
import {
	selectContacts,
	selectError,
	selectFilteredContacts,
	selectFilter,
	selectIsLoading,
} from '../../redux/selectors';
import { List, Info } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem'

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
	
	return (
		<>
		{isLoading && contacts?.length === 0 && <Loader />}
		{error && !isLoading && <div>Ooops, error ... </div>}
		{!filteredContacts?.length && !error && !isLoading && (
			<Info>Contacts not found</Info>
		)}
		{!error && !isLoading && filteredContacts?.length > 0 && (
			<List>
			{filteredContacts?.map(({ name, phone, id }) => {
				return (
					<Fragment key={id}>
						<ContactItem
							name={name}
							phone={phone}
							id={id}
						/>
					</Fragment>
				);
			})}
			</List>
		)}
		</>
	);
};