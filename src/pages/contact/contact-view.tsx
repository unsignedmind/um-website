import React from 'react';
import { PageHeadlineView } from '../../widgets/page-headline/page-headline-view';
import { FooterView } from '../../components/footer/footer-view';

const ContactView = () => {
	return (
		<div>
			<PageHeadlineView headline='Contact' />
			Contact View
			<FooterView />
		</div>
	);
};

export default ContactView;
