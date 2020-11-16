import React from 'react';
import { HeaderView } from '../header/header-view';
import './page-template-styles.scss';

interface Props {
	darkModeHandler: () => void;
	children: any
}

export const PageTemplateView: React.FC<Props> = ({darkModeHandler,  children}) => {
	return (
		<>
			<div className='page'>
				<HeaderView darkModeHandler={darkModeHandler} />
				<div className='page__limit'>
					<div className='page__indentation'>
						{children}
					</div>
				</div>
			</div>
		</>
	);
};
