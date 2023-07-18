import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastifyOptions } from 'untils/toastifyOptions';
import { addContact } from "redux/contacts/contacts-slice";
import { getContacts } from "redux/contacts/contacts-selectors";
import { BsPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import {IoMdPersonAdd} from 'react-icons/io'
import {
	Form,
	FormField,
	FieldInput,
	ErrorMessage,
	FormButton,
	LabelForm,
	LabelSpan,
} from './ContactForm.styled';

const schema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.matches(
			/^[A-Za-z\u0080-\uFFFF ']+$/,
			'Name may only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
	).required(),
	number: yup
		.string()
		.phone(
			'UA',
			true,
			'Phone number must be a valid phone number for region UA, digits and can contain spaces, dashes, parentheses and can start with +'
	).required(),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
	const contacts = useSelector(getContacts);
	const dispatch = useDispatch();
	const isDublicate = ({ name, number }) => {
		const normalizName = name.toLowerCase().trim();
		const normalizNumber = number.trim();
		const dublicate = contacts.find(
			contact =>
				contact.name.toLowerCase().trim() === normalizName ||
				contact.number.trim() === normalizNumber
		);
		return Boolean(dublicate);
	};

	const onAddContact = ({ name, number }) => {
		if (isDublicate({ name, number })) {
			return toast.error(`This contact is already in contacts`,
				toastifyOptions
			);
		}
		dispatch(addContact({ name, number }));
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, { resetForm }) => {
				onAddContact({ ...values });
				resetForm();
			}}
			validationSchema={schema}
		>
			<Form autoComplete="off">
				<FormField>
					<LabelForm>
						< BsPersonFill />
						<LabelSpan>Name</LabelSpan>
					</LabelForm>
					<FieldInput
						type="text"
						name="name"
						placeholder="Your name" />
					<ErrorMessage name="name" component="span"/>
				</FormField>
				<FormField>
					<LabelForm>
						< BsFillTelephoneFill />
						<LabelSpan>Number</LabelSpan>
					</LabelForm>
					<FieldInput
						type="tel"
						name="number"
						placeholder="+38(096)000-00-00" />
					<ErrorMessage name="number" component="span" />
				</FormField>
				<FormButton type="sumbmit">
					<IoMdPersonAdd size="16" />
					Add contact
				</FormButton>
			</Form>
		</Formik>
	);
};