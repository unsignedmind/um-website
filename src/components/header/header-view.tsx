import React from 'react';
import { HeadlineStrokeView } from '../../widgets/headline-stroke/headline-stroke-view';
import './header-styles.scss';
import { Link } from 'react-router-dom';

interface Props {
	darkModeHandler: () => void;
}

export const HeaderView: React.FC<Props> = ({ darkModeHandler }) => {
	return (
		<div className='header'>
			<div className='header__container'>
				<div className='header__main'>
					<div className='header__brand'>
						<HeadlineStrokeView title={['UM++;']} tilted={false} context='header' />
					</div>
					<nav className='header__nav'>
						<Link to='/'>
							<span className='header__nav-item'>Start</span>
						</Link>
						<Link to='/work'>
							<span className='header__nav-item'>My Work</span>
						</Link>
						<Link to='/about-me'>
							<span className='header__nav-item'>About Me</span>
						</Link>
						<Link to='/contact'>
							<span className='header__nav-item'>Contact</span>
						</Link>
					</nav>
				</div>
				<div className='header__dark-mode-switch'>
					<span className='header__dark-mode-switch-label'>Light Switch</span>
					<button className='header__dark-mode-switch-button' onClick={() => {darkModeHandler()}} />
				</div>
			</div>
		</div>
	);
};
