import React from 'react';
import { PageHeadlineView } from '../../widgets/page-headline/page-headline-view';
import { FooterView } from '../../components/footer/footer-view';

export const AboutView = () => {
	return (
		<div>
			<PageHeadlineView headline={'About Me'} />
			About View
			<FooterView />
		</div>
	);
};
