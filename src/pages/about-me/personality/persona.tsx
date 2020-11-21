import React from 'react';
import './persona.scss'

export const Persona = () => {
	return (
		<div className='grid-x grid-margin-x'>
			<div className='cell small-4 persona__headlines persona__headlines--left'>
				<span>Photographer</span>
				<span>DJ</span>
				<span>Frontend</span>
				<span>Designer</span>
				<span>Full Stack</span>
			</div>
			<div className='cell small-4 persona__image-wrapper'>
				<img className='persona__image' src="images/um-dev.jpg" alt="image of developer" />
			</div>
			<div className='cell small-4 persona__headlines persona__headlines--right'>
				<span>Meta Enthusiasts</span>
				<span>Writer</span>
				<span>Developer</span>
				<span>Gamer</span>
			</div>
		</div>
	);
};
