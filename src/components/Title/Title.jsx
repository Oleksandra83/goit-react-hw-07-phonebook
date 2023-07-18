import PropTypes from 'prop-types';
import { MainTitle } from "./Title.styled";

export const Title = ({ title }) => {
	return <MainTitle>{title}</MainTitle>;
};

Title.propType = {
	title: PropTypes.string.isRequired,
};
