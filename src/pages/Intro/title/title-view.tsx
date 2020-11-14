import React from 'react';
import './title-styles.scss';

export const TitleView = () => {
	const title = 'Unsignedmind++;';

	return (
		<div className='unsigned-mind__title-wrapper'>
			<div className='unsigned-mind__accent-line unsigned-mind__accent-line--top-left-white unsigned-mind__accent-line--animation' />
			<div className='unsigned-mind__title'>
				<div className='unsigned-mind__logo-wrapper'>
					<div className='unsigned-mind__logo-positioning'>
						<span className='unsigned-mind__logo unsigned-mind__logo--hidden'>{ title }</span>
						<span className='unsigned-mind__logo unsigned-mind__logo--accent'>{ title }</span>
						<span className='unsigned-mind__logo unsigned-mind__logo--primary'>{ title }</span>
					</div>
				</div>
			</div>
			<div className='unsigned-mind__motto'>Positive Forward Thinking</div>
			<div className='unsigned-mind__accent-line unsigned-mind__accent-line--bottom-right-white unsigned-mind__accent-line--animation' />
		</div>
	);
};
