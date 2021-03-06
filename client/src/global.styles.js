import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
	font-family: 'Open Sans Condensed', sans-serif;
	padding: 20px 0 0 0;

		@media screen and (max-width: 800px) {
			padding: 10px 0 0 0;
        }
	}
	a {
		text-decoration: none;
		color: black;
	}
	* {
		box-sizing: border-box;
	}

	ShopPage {
		font-family: 'Open Sans Condensed', sans-serif;
		padding: 220px 0 0 0;

		}
`;