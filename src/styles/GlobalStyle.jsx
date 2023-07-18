import {createGlobalStyle} from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
}

body {
  margin: 0 auto;
	width: 100%;
	min-height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

	background-color: #deffff;
	background: #deffff url(https://damion.club/uploads/posts/2022-09/1664117584_1-damion-club-p-fon-dlya-bukhgaltera-oboi-1.jpg) 0 0 / cover no-repeat;
	background-attachment: fixed;

	letter-spacing: 0.02em;
	font-size: 0.85rem;
	letter-spacing: 0.07em;
	line-height: 1.85;

	overflow-x: hidden;
	transition: 2000ms;
}

	body::-webkit-scrollbar {
    appearance: none;
    background: #dee2ff;
    width: 6px;
    height: 5px;
}

  body::-webkit-scrollbar-corner {
    height: 0;
    }

  body::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
    }

  body::-webkit-scrollbar-thumb {
    background-color: #dee2ff;
    border-radius: 25px;
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* скидання властивостей */
a {
  text-decoration: none;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100;
}
`;