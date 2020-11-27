import React from 'react';
import './contact-card.scss'
import cubePattern from './cube-pattern.png'
import cubePatternDark from './cube-pattern-dark-mode.png'
import { UIStore } from '../../../state/state';

interface SocialLink {
	iconUrl: string;
	name: string;
	link: string;
}

export const ContactCard = () => {
	const darkMode = UIStore.useState(s => s.darkMode);
	const socials: Array<SocialLink> = [
		{
			iconUrl: 'images/icons/social/twitter.png',
			name: 'Twitter',
			link: '',
		},
		{
			iconUrl: 'images/icons/social/xing.png',
			name: 'XING',
			link: '',
		},
		{
			iconUrl: 'images/icons/social/github.png',
			name: 'Github',
			link: '',
		},
		{
			iconUrl: 'images/icons/social/stackoverflow.png',
			name: 'Stackoverflow',
			link: '',
		},
	];

	function repeatedBackground() {
		const backgroundImage: Array<any> = [];
		for(let i = 0; i <= 6; i++) {
			backgroundImage.push(<img src={darkMode ? cubePatternDark : cubePattern} className='contact-card__image' alt="card-background" />)
		}
		return backgroundImage;
	}



	return (
		<div className='contact-card__wrapper'>
			<div className='contact-card__img-wrapper'>
				{repeatedBackground() }
			</div>
			<div className='contact-card__container'>
				<div className="contact-card__headlines">
					<div className='contact-card__headlines--1st'>
						Niklas Schmidt
					</div>
					<div className='contact-card__headlines--2nd'>
						UnsignedMind
					</div>
					<div className='contact-card__headlines--3rd'>
						Frontend Developer
					</div>
				</div>
				<div className='contact-card__socials-wrapper'>
					{ socials.map((social) =>
						<div className="contact-card__social-box">
							<div className='contact-card__social-icon'>
								<img src={social.iconUrl} alt={social.name} />
							</div>
							<div className='contact-card__social-text'>
								<span className='contact-card__social-name'>{social.name}</span>
								<a className='contact-card__social-link'>To Profile</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
