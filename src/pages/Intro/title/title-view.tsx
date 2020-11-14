import React from 'react';
import './title-styles.scss';
import { HeadlineStrokeView } from '../../../widgets/headline-stroke/headline-stroke-view';

export const TitleView = () => {
	const title = 'Unsignedmind++;';

	return (
		<div className='unsigned-mind__title-wrapper'>
			<div className='unsigned-mind__accent-line unsigned-mind__accent-line--top-left-white unsigned-mind__accent-line--animation' />
			<div className='unsigned-mind__title'>
				<HeadlineStrokeView title='Unsignedmind++;' tilted={true} context='intro'/>
			</div>
			<div className='unsigned-mind__motto'>Positive Forward Thinking</div>
			<div className='unsigned-mind__accent-line unsigned-mind__accent-line--bottom-right-white unsigned-mind__accent-line--animation' />
		</div>
	);
};
