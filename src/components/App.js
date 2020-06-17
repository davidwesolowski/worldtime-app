import React from 'react';
import { Global, css } from '@emotion/core';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const globalStyles = css({
	'*, *::after, *::before': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box'
	},
	body: {
		backgroundColor: '#121212',
		color: '#fff',
		fontSize: '62.5%',
		fontFamily: 'Oswald, sans-serif',
		fontWeight: 400
	}
});

const App = () => {

	return (
		<>
			<Global styles={globalStyles} />
			<div
				className="d-flex align-items-center"
				css={mainContainerStyles}
			>
				<Container fluid="md">
					Hello World
				</Container>
			</div>
		</>
	);
};

export default App;
