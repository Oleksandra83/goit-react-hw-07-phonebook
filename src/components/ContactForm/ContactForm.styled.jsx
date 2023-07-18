import styled from "styled-components";
import {Form as FormikForm, Field, ErrorMessage as FormikError } from "formik";


export const Form = styled(FormikForm)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	margin-bottom: 16px;
	padding: 8px;
	max-width: 100%;
	width: 600px;
`;

export const FormField = styled.label`
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-width: 100%;
	width: 500px;
	text-shadow: 2px 2px 5px white;
	color: #063a36;
`;

export const LabelForm = styled.div`
	display: flex;
	gap: 8px;
	margin-left: 8px;
`;

export const LabelSpan = styled.span`
	color: #000;
`

export const FieldInput = styled(Field)`
	padding: 8px 16px;
	max-width: 100%;
	border: 0;
	outline: 0;
	border-radius: 8px;
	color: #063a36;
	font-size: 12px;
	letter-spacing: 1.4px;
	background-color: #effaf3;
	text-shadow: 2px 2px 5px white;
	box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
`;

export const ErrorMessage = styled(FormikError)`
	padding: 16px;
	max-width: 600px;
	font-style: italic;
	color: #e30303;
	border-radius: 8px;
	background-color: transparent;
	backdrop-filter: blur(10.5px);
	text-shadow: 2px 2px 5px white;
	`;

export const FormButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	padding: 8px 16px;
	max-width: 100%;
	border: none;
	outline: none;
	border-radius: 8px;
	box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
	transition: all 0.2s ease-in-out;
	background-color: #77ab8a;
	color: #fff;
	cursor: pointer;

	:hover,
	:focus {
		background-color: #b1dfc1;
		color: #063a36;
		box-shadow: inset -1px -1px 1px #fff, inset 1px 1px 1px #8e9aaf;

		svg {
			fill: #063a36;
			stroke: #063a36; 
		}
		:active {
			background-color: #9beb5a;
			color: #063a36;
			box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
			svg {
				fill: #063a36;
				stroke: #063a36; 
			}
		}
	}
`;