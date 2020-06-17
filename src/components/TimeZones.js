import React from 'react';
import { Row } from 'react-bootstrap';
import TimeZone from './TimeZone';

const TimeZones = ({ setZone, fetchTimeZone }) => (
	<Row className="justify-content-md-center">
		<TimeZone
			name="Europa/Warszawa"
			url="Europe/Warsaw"
			setZone={setZone}
			fetchTimeZone={fetchTimeZone}
		/>
		<TimeZone
			name="Ameryka/Nowy Jork"
			url="America/New_York"
			setZone={setZone}
			fetchTimeZone={fetchTimeZone}
		/>
		<TimeZone
			name="Azja/Tokio"
			url="Asia/Tokyo"
			setZone={setZone}
			fetchTimeZone={fetchTimeZone}
		/>
		<TimeZone
			name="Australia/Sydney"
			url="Australia/Sydney"
			setZone={setZone}
			fetchTimeZone={fetchTimeZone}
		/>
		<TimeZone
			name="Afryka/Kair"
			url="Africa/Cairo"
			setZone={setZone}
			fetchTimeZone={fetchTimeZone}
		/>
	</Row>
);

export default TimeZones;
