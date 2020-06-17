import React from 'react';
import { css } from '@emotion/core';
import { Col, Card, Button } from 'react-bootstrap';

const cardStyles = css({
	border: '1px solid #495058',
	'.card-text': {
		fontSize: '1rem',
		padding: '.5rem',
		marginTop: '-.8rem'
	}
});

const cardBodyStyles = css({
	padding: '.3rem'
});

const TimeZone = ({ name, url, setZone, fetchTimeZone }) => {
	const continent = name.split('/')[0];

	return (
		<Col xs={6} sm={4} lg={2} className="mb-4">
			<Card bg="dark" css={cardStyles}>
				<Card.Img variant="top" src={`img/${continent}.png`}></Card.Img>
				<Card.Body css={cardBodyStyles}>
					<Card.Title className="text-center">{name}</Card.Title>
				</Card.Body>
				<Card.Text>Możesz sprawdzić czas dla tej strefy</Card.Text>
				<Button
					variant="light"
					onClick={() => {
						setZone(url);
						fetchTimeZone(
							`https://worldtimeapi.org/api/timezone/${url}`
						);
					}}
				>
					Sprawdź
				</Button>
			</Card>
		</Col>
	);
};

export default TimeZone;
