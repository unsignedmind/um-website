import React from 'react';
import './headline-stroke-styles.scss'

interface Props {
	title: string;
	tilted: boolean;
	context: 'header' | 'intro'
}

export const HeadlineStrokeView: React.FC<Props> = ({ title, tilted = false, context }) => {
	return (
		<div>
			<div className='headline-stroke__text-positioning'>
				<span className={`headline-stroke__text headline-stroke__text--sizing-${context} headline-stroke__text--hidden `}>{title}</span>
				<span className={`headline-stroke__text headline-stroke__text--sizing-${context} headline-stroke__text--accent-${context} `}>{title}</span>
				<span className={`headline-stroke__text headline-stroke__text--sizing-${context} headline-stroke__text--primary-${context} `}>{title}</span>
			</div>
		</div>
	);
};
