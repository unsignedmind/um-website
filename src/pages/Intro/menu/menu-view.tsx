import React from 'react';
import { Link } from 'react-router-dom';
import './menu-styles.scss';

export const MenuView = () => {
	return (
		<div className='menu__wrapper'>
			<ul className='menu__list'>
				<Link to='/my-work'>
					<li className='menu__item'>
						<span className='menu__item-name a'>My Work</span>
						<span className='menu__item-icon' />
					</li>
				</Link>
				<Link to='/about-me'>
					<li className='menu__item'>
						<span className='menu__item-name a'>About Me</span>
						<span className='menu__item-icon' />
					</li>
				</Link>
				<Link to='/contact'>
					<li className='menu__item'>
						<span className='menu__item-name a'>Contact</span>
						<span className='menu__item-icon' />
					</li>
				</Link>
			</ul>
		</div>
	);
};
