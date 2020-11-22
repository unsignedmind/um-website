import React from 'react';
import './work-page.scss';
import { PageHeadline } from '../../widgets/page-headline/page-headline';
import { MediaText } from './image-text/media-text';
import { FooterView } from '../../components/footer/footer-view';

export const WorkPage = () => {

	const articles = [
		{
			headline: 'Brand & Design & Development',
			text: [
				'Logo in 3D und SVG',
			],
		},
		{
			headline: 'Figma Designs',
			text: [],
		},
		{
			headline: 'Experience eCommerce',
			text: [],
		},
	];

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
