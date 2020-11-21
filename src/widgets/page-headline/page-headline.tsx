import React from 'react';
import './page-headline.scss'

interface Props {
	headline: string
}

export const PageHeadline: React.FC<Props> = ({headline}) => {
	return (
		<div className='page-headline page__component-indentation'>
			<span className='page-headline__divider' />
			<div className='page-headline__text'>{ headline }</div>
			<span className='page-headline__divider' />
		</div>
	);
};
