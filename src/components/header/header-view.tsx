import React from 'react';
import { HeadlineStroke } from '../../widgets/headline-stroke/headline-stroke';
import './header-styles.scss';
import { Link } from 'react-router-dom';
import { NavPages, UIStore } from '../../state/state';

export const HeaderView: React.FC = () => {
	const darkMode = UIStore.useState(s => s.darkMode)
	const activePage = UIStore.useState(s => s.activePage)

	function isActive(page: NavPages) {
		return page === activePage ? 'header__nav-item--active' : '';
	}

	return (
		<>
			<div className='header'>
				<div className='header__container'>
					<div className='header__main'>
						<div className='header__brand'>
							<HeadlineStroke title={['UnsignedMind++;']} tilted={false} context='header' />
						</div>
						<div className='header__brand-explain-line'>Positive Forward Thinking</div>
						<nav className='header__nav'>
							<Link to='/' className={`header__nav-item ${isActive(NavPages.INTRO)}`}>Start</Link>
							<Link to='/about-me' className={`header__nav-item ${isActive(NavPages.ABOUT_ME)}`}>About Me</Link>
							<Link to='/my-work' className={`header__nav-item ${isActive(NavPages.MY_WORK)}`}>My Work</Link>
							<Link to='/contact' className={`header__nav-item ${isActive(NavPages.CONTACT)}`}>Contact</Link>
						</nav>

					</div>
					<button className='header__dark-mode-button' onClick={() => {UIStore.update(s => {s.darkMode = !s.darkMode})}}>
						{
							!darkMode
							? <img src={"images/icons/dark-mode.svg"} alt="dark-mode" />
							: <img src={"images/icons/light-mode.svg"} alt="light-mode" />
						}
					</button>
				</div>
			</div>
		</>

	);
};

/*
<div className='header__dark-mode-switch'>
	<span className='header__dark-mode-switch-label'>Light Switch</span>
	<button className='header__dark-mode-switch-button' onClick={() => {darkModeHandler()}} />
</div>
* */
