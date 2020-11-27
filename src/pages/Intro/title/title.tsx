import React, { useLayoutEffect, useState } from 'react';
import './title.scss';
import { HeadlineStroke } from '../../../widgets/headline-stroke/headline-stroke';
import { useWindowSize } from '../../../utils/useWindowSize';

export const Title = () => {
	const windowSize = useWindowSize()
	const splitTitle = windowSize.width < 768 || windowSize.height < 311;
	const title: Array<string> = splitTitle ? ['Unsigned', 'mind++;'] : ['Unsignedmind++;'];

	return (
		<div className='title__title-wrapper'>
			<div className='title__accent-line title__accent-line--top-left-white title__accent-line--animation' />
			<div className='title__title'>
				<HeadlineStroke title={title} tilted={true} context='intro'/>
			</div>
			<div className='title__motto'>Positive Forward Thinking</div>
			<div className='title__accent-line title__accent-line--bottom-right-white title__accent-line--animation' />
		</div>
	);
};
