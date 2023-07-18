import PropTypes from 'prop-types';
import {Title} from '../Title/Title'
import { SectionWrap} from "./Section.styled";

export const Section = ({ title, children }) => {
	return (
		<SectionWrap>
			<Title title={title} />
			{children}
		</SectionWrap>
	);
};

Section.propType = {
	title: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
};