import React from 'react';
import './mobile-menu-styles.scss';
import { Link } from 'react-router-dom';

interface Props {
	darkModeHandler: () => void;
}

export const MobileMenuView: React.FC<Props> = ({ darkModeHandler }) => {
	return (
		<div className='mobile-menu'>
			<input type='checkbox' className='mobile-menu__burger-trigger' />
			<div className='mobile-menu__burger mobile-menu__burger--x'>
				<span>X</span>
			</div>
			<div className='mobile-menu__burger mobile-menu__burger--s'>
				<span>///</span>
			</div>
			<div className='mobile-menu__wrapper'>
				<img src="images/intro-bg.jpg" alt="background" className='intro-page__full-size intro-page__bg-image intro-page__bg-image--no-delay' />
				<nav className='mobile-menu__menu-list'>
					<Link to='/'>
						<span>Start</span>
					</Link>
					<Link to='/my-work'>
						<span>My Work</span>
					</Link>
					<Link to='/about-me'>
						<span>About Me</span>
					</Link>
					<Link to='/contact'>
						<span>Contact</span>
					</Link>
					<div className='mobile-menu__menu-list-dark-mode'>
						<div className='mobile-menu__menu-list-dark-mode-label'>Light Switch</div>
						<button className='header__dark-mode-switch-button' onClick={() => {darkModeHandler()}} />
					</div>
				</nav>
			</div>
		</div>
	);
};
