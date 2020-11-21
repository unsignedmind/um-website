import React, { useLayoutEffect, useState } from 'react';
import './title-styles.scss';
import { HeadlineStrokeView } from '../../../widgets/headline-stroke/headline-stroke-view';
import { useWindowSize } from '../../../utils/useWindowSize';

export const TitleView = () => {
	const windowSize = useWindowSize()
	const isMobile = windowSize.width < 768 || windowSize.height < 311;
	const title: Array<string> = isMobile ? ['Unsigned', 'mind++;'] : ['Unsignedmind++;'];

	return (
		<div className='title__title-wrapper'>
			<div className='title__accent-line title__accent-line--top-left-white title__accent-line--animation' />
			<div className='title__title'>
				<HeadlineStrokeView title={title} tilted={true} context='intro'/>
			</div>
			<div className='title__motto'>Positive Forward Thinking</div>
			<div className='title__accent-line title__accent-line--bottom-right-white title__accent-line--animation' />
		</div>
	);
};
