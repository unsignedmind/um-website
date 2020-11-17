import React, { useLayoutEffect, useState } from 'react';
import './title-styles.scss';
import { HeadlineStrokeView } from '../../../widgets/headline-stroke/headline-stroke-view';
import { useWindowSize } from '../../../utils/useWindowSize';

export const TitleView = () => {
	const windowSize = useWindowSize()
	const isMobile = windowSize.width < 768 || windowSize.height < 311;
	const title: Array<string> = isMobile ? ['Unsigned', 'mind++;'] : ['Unsignedmind++;'];

	return (
		<div className='unsigned-mind__title-wrapper'>
			<div className='unsigned-mind__accent-line unsigned-mind__accent-line--top-left-white unsigned-mind__accent-line--animation' />
			<div className='unsigned-mind__title'>
				<HeadlineStrokeView title={title} tilted={true} context='intro'/>
			</div>
			<div className='unsigned-mind__motto'>Positive Forward Thinking</div>
			<div className='unsigned-mind__accent-line unsigned-mind__accent-line--bottom-right-white unsigned-mind__accent-line--animation' />
		</div>
	);
};
