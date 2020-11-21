import React from 'react';
import './mobile-menu-styles.scss';
import { Link } from 'react-router-dom';

interface Props {
	darkModeHandler: () => void;
}

export const MobileMenuView: React.FC<Props> = ({ darkModeHandler }) => {
	return (
		<div className='mobile-menu'>
			<input type='checkbox' className='mobile-menu__burger-trigger' aria-label='mobile-menu'/>
			<div className='mobile-menu__burger mobile-menu__burger--x'>
				<span>X</span>
			</div>
			<div className='mobile-menu__burger mobile-menu__burger--s'>
				<span>///</span>
			</div>
			<div className='mobile-menu__wrapper'>
				<img src="images/intro-bg.jpg" alt="background" className='mobile-menu__bg-image' />
				<nav className='mobile-menu__menu-list' role='navigation'>
					<Link to='/'>Start</Link>
					<Link to='/my-work'>My Work</Link>
					<Link to='/about-me'>About Me</Link>
					<Link to='/contact'>Contact</Link>
					<div className='mobile-menu__menu-list-dark-mode'>
						<div className='mobile-menu__menu-list-dark-mode-label'>Light Switch</div>
						<button className='mobile-menu__dark-mode-switch-button' onClick={() => {darkModeHandler()}} />
					</div>
				</nav>
			</div>
		</div>
	);
};
