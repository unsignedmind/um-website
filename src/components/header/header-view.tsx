import React from 'react';
import { HeadlineStrokeView } from '../../widgets/headline-stroke/headline-stroke-view';
import './header-styles.scss';
import { Link } from 'react-router-dom';

interface Props {
	darkModeHandler: () => void;
}

export const HeaderView: React.FC<Props> = ({ darkModeHandler }) => {
	return (
		<>
			<div className='header'>
				<div className='header__container'>
					<div className='header__main'>
						<div className='header__brand'>
							<HeadlineStrokeView title={['UnsignedMind++;']} tilted={false} context='header' />
						</div>
						<div className='header__brand-explain-line'>Positive Forward Thinking</div>
						<nav className='header__nav'>
							<Link to='/' className='header__nav-item'>Start</Link>
							<Link to='/my-work' className='header__nav-item'>My Work</Link>
							<Link to='/about-me' className='header__nav-item'>About Me</Link>
							<Link to='/contact' className='header__nav-item'>Contact</Link>
						</nav>

					</div>
					<button className='header__dark-mode-button' onClick={() => {darkModeHandler()}}>
						Light Mode
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
