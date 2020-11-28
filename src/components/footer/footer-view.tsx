import React from 'react';
import './footer-styles.scss';
import { Link } from 'react-router-dom';

export const FooterView = () => {
	return (
		<div className='footer'>
			&copy; unsginedmind 2020 - <Link to={'/imprint'}>Imprint</Link>
		</div>
	);
};
