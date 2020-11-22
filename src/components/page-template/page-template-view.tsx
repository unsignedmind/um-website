import React from 'react';
import { HeaderView } from '../header/header-view';
import './page-template-styles.scss';
import { MobileMenuView } from '../mobile-menu/mobile-menu-view';

interface Props {
	children: any
}

export const PageTemplateView: React.FC<Props> = ({children}) => {
	return (
		<>
			<div className='page'>
				<MobileMenuView />
				<HeaderView />
				<div className='page__limit'>
					<div className='page__indentation'>
						{children}
					</div>
				</div>
			</div>
		</>
	);
};
