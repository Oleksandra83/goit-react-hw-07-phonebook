import { useDispatch} from 'react-redux';
import { Formik } from 'formik';
import { schema} from 'shared/schemaYup';
import 'yup-phone';
import { addContact } from '../../redux/contacts/contactsOperations';

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

const initialValues = { name: '', phone: '' };

export const ContactForm = () => {
	const dispatch = useDispatch();

	const onAddContact = data => {
		dispatch(addContact(data));
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
						name="phone"
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