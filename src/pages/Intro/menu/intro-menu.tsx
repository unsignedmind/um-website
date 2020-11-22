import React from 'react';
import { Link } from 'react-router-dom';
import './intro-menu.scss';

export const IntroMenu = () => {
	return (
		<div className='intro-menu__wrapper'>
			<ul className='intro-menu__list'>
				<Link to='/about-me'>
					<li className='intro-menu__item'>
						<span className='intro-menu__item-name a'>About Me</span>
						<span className='intro-menu__item-icon' />
					</li>
				</Link>
				<Link to='/my-work'>
					<li className='intro-menu__item'>
						<span className='intro-menu__item-name a'>My Work</span>
						<span className='intro-menu__item-icon' />
					</li>
				</Link>
				<Link to='/contact'>
					<li className='intro-menu__item'>
						<span className='intro-menu__item-name a'>Contact</span>
						<span className='intro-menu__item-icon' />
					</li>
				</Link>
			</ul>
		</div>
	);
};
