import React from 'react';
import { css } from '@emotion/core';
import { Row, Col } from 'react-bootstrap';

const headerStyles = css({
	backgroundImage: 'linear-gradient(to bottom, #d9a7c7, #fffcdc)',
	WebkitBackgroundClip: 'text',
	backgroundClip: 'text',
	color: 'transparent',
	fontFamily: 'Roboto Condensed, sans-serif',
	fontWeight: 600,
	fontSize: '3.2rem'
});

const Header = () => (
	<Row className="align-items-start">
		<Col xs={12}>
			<header css={headerStyles}>
				<p className="text-center text-uppercase">
					Mapa stref czasowych
				</p>
			</header>
		</Col>
	</Row>
);

export default Header;
