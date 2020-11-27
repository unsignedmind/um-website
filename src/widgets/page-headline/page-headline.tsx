import React from 'react';
import './page-headline.scss'
import { isMobile } from '../../utils/layout';
import { useWindowSize } from '../../utils/useWindowSize';

interface Props {
	headline: string
}

export const PageHeadline: React.FC<Props> = ({headline}) => {

	const { width } = useWindowSize();

	return isMobile(width) ? (
		<div className='page-headline'>
			<span className='page-headline__divider' />
			<div className='page-headline__text'>{ headline }</div>
			<span className='page-headline__divider' />
		</div>
	) : <></>;
};
