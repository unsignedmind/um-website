import React from 'react';
import './headline-stroke.scss'

interface Props {
	title: Array<string>;
	tilted: boolean;
	context: 'header' | 'intro'
}

export const HeadlineStroke: React.FC<Props> = ({ title, tilted = false, context }) => {

	const titleTemplate = (hidden: boolean = false): any => {
		const temp: Array<any> = [];

		title.forEach(function (row, index) {
			temp.push(
				<p className={`headline-stroke__text-row ${ hidden ? 'headline-stroke__text-row--hidden' : '' }`} key={index}>{row}</p>
			)
		})

		return temp;
	}

	/*
	const titleWithLineBreaks: Array<string> = [];

		if(title.length > 1 ) {
			title.forEach((row, index) => {
				if (index !== 1) {
					return (  )
				} else {
					return row
				}
			})
		} else {
			titleWithLineBreaks.push(title[0]);
		}
	* */

	return (
		<div>
			<div className='headline-stroke__text-positioning'>
				<span className={`headline-stroke__text headline-stroke__text--sizing-${context} headline-stroke__text-row--hidden `}>
					{ titleTemplate(true) }
				</span>
				<span className={`headline-stroke__text headline-stroke__text--sizing-${context} headline-stroke__text--accent-${context} `}>
					{ titleTemplate() }
				</span>
				<span className={`headline-stroke__text headline-stroke__text--sizing-${context} headline-stroke__text--primary-${context} `}>
					{ titleTemplate() }
				</span>
			</div>
		</div>
	);
};
