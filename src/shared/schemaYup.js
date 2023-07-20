import * as yup from 'yup';
import 'yup-phone';

export const schema = yup.object().shape({
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