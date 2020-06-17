import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Global, css } from '@emotion/core';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Clock from './Clock';
import TimeZones from './TimeZones';
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

const mainContainerStyles = css({ minHeight: '100vh' });

const containerStyles = css({ minHeight: '80vh' });

const App = () => {
	const [zone, setZone] = useState('Europe/Warsaw');
	const [time, setTime] = useState(0);
	const [loaded, setLoaded] = useState(false);

	const fetchTimeZone = async url => {
		const {
			data: { datetime }
		} = await axios.get(url);

		if (datetime) {
			setTime(datetime);
			setLoaded(true);
		}
	};

	useEffect(() => {
		const url = 'https://worldtimeapi.org/api/timezone/Europe/Warsaw';
		fetchTimeZone(url);
	}, []);

	return (
		<>
			<Global styles={globalStyles} />
			<div
				className="d-flex align-items-center"
				css={mainContainerStyles}
			>
				<Container fluid="md" css={containerStyles}>
					<Header />
					<Clock zone={zone} time={time} loaded={loaded} />
					<TimeZones
						setZone={setZone}
						fetchTimeZone={fetchTimeZone}
					/>
				</Container>
			</div>
		</>
	);
};

export default App;
