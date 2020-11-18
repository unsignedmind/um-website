import React from 'react';
import './work-page-styles.scss';
import { PageHeadlineView } from '../../widgets/page-headline/page-headline-view';
import { MediaTextView } from './image-text/media-text-view';
import { FooterView } from '../../components/footer/footer-view';

export const WorkPageView = () => {
	return (
		<>
			<PageHeadlineView />
			<MediaTextView showImage='left' />
			<MediaTextView showImage='right' />
			<MediaTextView showImage='left' />
			<FooterView />
		</>
	);
};
