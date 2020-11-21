import React from 'react';
import './persona.scss'

export const Persona = () => {
	return (
		<div>
			<div className="persona__card">
				<div className='persona__image-wrapper'>
					<img className='persona__image' src="images/um-dev.jpg" alt="image of developer" />
				</div>
				<div className="persona__interests-wrapper">
					<div className='persona__headline-group persona__headline-group--primary'>
						Frontend <br/> Developer
					</div>
					<div className='persona__headline-group persona__headline-group--secondary persona__headline-group--evenly'>
						<span>Designer</span>
						<span>Photographer</span>
					</div>
					<div className='persona__headline-group persona__headline-group--secondary persona__headline-group--evenly
					'>
						<span>FullStack</span>
						<span>MetaEnthusiasts</span>
					</div>
					<div className='persona__headline-group persona__headline-group--secondary persona__headline-group--evenly'>
						<span>Writer</span>
						<span>DJ</span>
						<span>Gamer</span>
					</div>
				</div>
			</div>
		</div>
	);
};

/*
<span>Photographer</span>
				<span>DJ</span>
				<span>Frontend</span>
				<span>Designer</span>
				<span>Full Stack</span>
				<span>Meta Enthusiasts</span>
				<span>Writer</span>
				<span>Developer</span>
				<span>Gamer</span>
* */