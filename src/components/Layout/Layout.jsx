import PropTypes from 'prop-types';
import { Container, MainContainer } from './Layout.styled';

export const Layout = ({ children }) => {
	return (
		<Container>
			<MainContainer>{children}</MainContainer>
		</Container>
	);
};

Layout.propTypes = {
	children: PropTypes.any.isRequired,
};