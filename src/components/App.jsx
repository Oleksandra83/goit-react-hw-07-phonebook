import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import {Filter} from './Filter/Filter';

export const App = () => {
	return (
		<>
			<Layout>
				<Section title="Phonebook">
					<ContactForm />
						<Title title="Contacts" />
						<Filter />
						<ContactList />
				</Section>
				<ToastContainer />
			</Layout>
			<GlobalStyle />
		</>
  );
};
