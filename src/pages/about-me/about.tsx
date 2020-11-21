import React from 'react';
import { PageHeadline } from '../../widgets/page-headline/page-headline';
import { FooterView } from '../../components/footer/footer-view';
import { Persona } from './personality/persona';
import { TextGradient } from './text-gardient-bg/text-gradient';
import { Skills } from './skills/skills';

export const About = () => {
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
