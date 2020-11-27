import React from 'react';
import { PageHeadline } from '../../widgets/page-headline/page-headline';
import { FooterView } from '../../components/footer/footer-view';
import { Persona } from './persona/persona';
import { TextGradient } from './text-gardient-bg/text-gradient';
import { Skills } from './skills/skills';
import { NavPages, UIStore } from '../../state/state';

export const About = () => {
	UIStore.update(s => { s.activePage = NavPages.ABOUT_ME })
	return (
		<div>
			<PageHeadline headline={'About Me'} />
			<Persona />
			<TextGradient />
			<Skills />
			<FooterView />
		</div>
	);
};
