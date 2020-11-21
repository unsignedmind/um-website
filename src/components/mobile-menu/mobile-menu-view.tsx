import React from 'react';
import './mobile-menu-styles.scss';
import { Link } from 'react-router-dom';
import { UIStore } from '../../state/state';

interface Props {
	darkModeHandler: () => void;
}

export const MobileMenuView: React.FC<Props> = ({ darkModeHandler }) => {
	const showMenu = UIStore.useState(s => s.showMenu);

	const changeMenuState = function(state: any) {
		state.showMenu = !state.showMenu;
	}

	return (
		<div className='mobile-menu' style={{ animation: showMenu ? '' : 'hideMenu 0s linear 0.8s forwards' }} >
			<input type='checkbox' className='mobile-menu__burger-trigger' aria-label='mobile-menu' onClick={function(){UIStore.update(changeMenuState)}}/>
			<div className='mobile-menu__burger mobile-menu__burger--x'>
				<span>X</span>
			</div>
			<div className='mobile-menu__burger mobile-menu__burger--s'>
				<span>{'///'}</span>
			</div>
			<div className='mobile-menu__wrapper'>
				<img src={"images/intro-bg.jpg"} alt="background" className='mobile-menu__bg-image' />
				<nav className='mobile-menu__menu-list' role='navigation'>
					<Link to='/'>Start</Link>
					<Link to='/my-work'>My Work</Link>
					<Link to='/about-me'>About Me</Link>
					<Link to='/contact'>Contact</Link>
					<div className='mobile-menu__menu-list-dark-mode'>
						<button className='mobile-menu__dark-mode-trigger-button' onClick={() => {darkModeHandler()}}>
							<div className='mobile-menu__menu-list-dark-mode-label'>Color Mode</div>
							<div className='dark-mode-indicator'/>
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
};
