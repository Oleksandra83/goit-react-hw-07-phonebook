import styled from "styled-components";

export const FilterDescr = styled.label`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 8px 16px;
	max-width: 100%;
	width: 300px;
	color: #063a36;
	text-shadow: 0px 2px 2px white;
`;

export const LabelForm = styled.div`
	display: flex;
	gap: 8px;
	margin-left: 8px;
`;

export const LabelSpan = styled.span`
	color: #000;
`

export const Input = styled.input`
	padding: 16px;

	border: 0;
	outline: 0;
	border-radius: 8px;
	color: #063a36;
	background-color: transparent;
	text-shadow: 2px 2px 5px white;
	font-size: 14px;
	letter-spacing: 1.4px;
	box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
`;