import React from 'react';
import './work-page.scss';
import { PageHeadline } from '../../widgets/page-headline/page-headline';
import { MediaText } from './image-text/media-text';
import { FooterView } from '../../components/footer/footer-view';

export const WorkPage = () => {

	return (
		<>
			<PageHeadline headline={'My Work'} />
			<MediaText showImage='left' />
			<MediaText showImage='right' />
			<MediaText showImage='left' />
			<FooterView />
		</>
	);
};
