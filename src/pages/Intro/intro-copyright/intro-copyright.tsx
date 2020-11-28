import React from 'react';
import './intro-copyright.scss';
import { Link } from 'react-router-dom';

export const IntroCopyright = () => {
	return (
		<div className='intro-copyright'>
			&copy; Unsignedmind 2020 -
			<Link to={'/imprint'}> Imprint</Link>
		</div>
	);
};
