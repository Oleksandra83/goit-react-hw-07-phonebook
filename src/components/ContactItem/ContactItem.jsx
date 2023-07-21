import { useDispatch} from 'react-redux';
import {Tooltip } from '@chakra-ui/react';
import { deleteContact } from '../../redux/contacts/contactsOperations';

import { IoPersonRemove } from 'react-icons/io5';
import { Item, ContactDescr, ThumBtns, TelegramShareButton, TelegramIcon, Btn, } from './ContactItem.styled';

export const ContactItem = ({name, phone, id}) => {

	const dispatch = useDispatch();

	const onDeleteContact = contactId => {
		dispatch(deleteContact(contactId));
	};

	return (
		<Item>
			<ContactDescr>
				<span>{name}</span>
				<Tooltip label="Call" color="#024934" fontSize="12px">
					<span>
						<a href={'tel:' + phone}>{phone}</a>
					</span>
				</Tooltip>
				<ThumBtns>
					<Tooltip label="Call" color="#024934" fontSize="12px">
						<TelegramShareButton
							url={'tel:' + phone}
							title={'contact' + name}
							hashtag="#telnumber">
							<TelegramIcon size={30} round={true} />
						</TelegramShareButton>
					</Tooltip>
					<Tooltip label="Delete" color="#024934" fontSize="12px">
						<Btn type="button" onClick={() => onDeleteContact(id)}>
							<IoPersonRemove size="14" />
						</Btn>
					</Tooltip>
				</ThumBtns>
			</ContactDescr>
	</Item>
);
}