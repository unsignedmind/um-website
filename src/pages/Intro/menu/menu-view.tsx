import React from 'react';
import './menu-styles.scss';

export const MenuView = () => {
	return (
		<div className='menu__wrapper'>
			<ul className='menu__list'>
				<li className='menu__item'>
					<span className='menu__item-name'>My Work</span>
					<span className='menu__item-icon' />
				</li>
				<li className='menu__item'>
					<span className='menu__item-name'>About Me</span>
					<span className='menu__item-icon' />
				</li>
				<li className='menu__item'>
					<span className='menu__item-name'>Contact</span>
					<span className='menu__item-icon' />
				</li>
			</ul>
		</div>
	);
};
