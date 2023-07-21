import styled from 'styled-components';
import {
	TelegramIcon as Icon,
	TelegramShareButton as Button,
} from 'react-share';

export const Item = styled.li`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 8px;
	color: #000;
	text-shadow: 2px 2px 5px white;
	font-size: 14px;

	span {
		margin: 0 auto;
		text-align: center;
		color: #063a36;
		font-style: italic;
		font-size: 16px;
	}
`;

export const ContactDescr = styled.div`
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	align-items: center;
	gap: 8px;
	padding: 4px;
	width: 100%;
	height: auto;
`;

export const ThumBtns = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
`;

export const TelegramShareButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Btn = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 50%;
	box-shadow: #8c8d8d 6px 6px 4px 0px;
	transition: all 0.2s ease-in-out;
	background-color: #77ab8a;
	color: #fff;
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: #b1dfc1;
		color: #063a36;
		box-shadow: inset -1px -1px 1px #fff, inset 1px 1px 1px #8e9aaf;

		svg {
			fill: #063a36;
			stroke: #063a36; 
		}
		:active {
			color: #063a36;
			box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
			svg {
				fill: #063a36;
				stroke: #063a36; 
			}
		}
	}
`;

export const TelegramIcon = styled(Icon)`
	border-radius: 50%;
	box-shadow: #8c8d8d 6px 6px 4px 0px;
	transition: all 0.2s ease-in-out;
	background-color: #77ab8a;

		&:hover,
		&:focus {
			background-color: #b1dfc1;
		color: #063a36;
		box-shadow: inset -1px -1px 1px #fff, inset 1px 1px 1px #8e9aaf;

		svg {
			fill: #063a36;
			stroke: #063a36; 
		}
		:active {
			color: #063a36;
			box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
			svg {
				fill: #063a36;
				stroke: #063a36; 
				}
			}
		}
`;