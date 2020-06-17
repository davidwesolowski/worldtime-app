import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import { Row, Col, Spinner } from 'react-bootstrap';
import AnalogClock from 'react-clock';
import { css } from '@emotion/core';
import 'moment/locale/pl';

const analogClockStyles = css({
	'.react-clock__face': {
		backgroundColor: '#fff'
	}
});

const zoneObject = {
	'Europe/Warsaw': 'Europa/Warszawa',
	'America/New_York': 'Ameryka/Nowy Jork',
	'Asia/Tokyo': 'Azja/Tokio',
	'Australia/Sydney': 'Australia/Sydney',
	'Africa/Cairo': 'Afryka/Kair'
};

const Clock = ({ zone, time, loaded }) => {
	const [tick, setTick] = useState(time);
	const analogTime = new Date(
		new Date(tick).toLocaleString('en-US', {
			timeZone: zone
		})
	);

	useEffect(() => {
		let id;
		if (time) {
			setTick(() => time);
			id = setInterval(() => {
				setTick(prev => moment(prev).add(1, 's'));
			}, 1000);
		}
		return () => clearInterval(id);
	}, [time]);

	return (
		<Row className="mb-4">
			<Col>
				<div className="text-center">
					<h3>Czas dla strefy: {zoneObject[zone]}</h3>
					{loaded ? (
						<>
							<div className="d-flex justify-content-center align-items-center mb-2">
								<AnalogClock
									value={new Date(analogTime)}
									css={analogClockStyles}
								/>
							</div>
							<h2>{moment(tick).tz(zone).format('HH:mm:ss')}</h2>
							<h4>
								{moment(tick)
									.tz(zone)
									.format('dddd D MMMM YYYY')}
							</h4>
						</>
					) : (
						<div className="d-flex justify-content-center align-items-center">
							<Spinner animation="grow" variant="light" />
						</div>
					)}
				</div>
			</Col>
		</Row>
	);
};

export default Clock;
