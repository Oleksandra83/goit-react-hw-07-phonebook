import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filter/filter-slice";
import { getFilter } from "redux/filter/filter-selectors";

import { BsSearch } from 'react-icons/bs';
import { FilterDescr, LabelForm, LabelSpan, Input} from './Filter.styled';

export const Filter = () => {
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();
	const changeFilter = e => {
		dispatch(setFilter(e.target.value.toLowerCase().trim()));
	};
	return (
	<FilterDescr>
		<LabelForm>
			<BsSearch size="16" />
			<LabelSpan>Find contacts by name</LabelSpan>
		</LabelForm>
			<Input
				type="text"
				value={filter}
				onChange={changeFilter}
				placeholder="search..." />
	</FilterDescr>
);

};