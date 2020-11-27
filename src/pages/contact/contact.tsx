import React from 'react';
import { PageHeadline } from '../../widgets/page-headline/page-headline';
import { FooterView } from '../../components/footer/footer-view';
import { NavPages, UIStore } from '../../state/state';
import { ContactCard } from './contact-card/contact-card';

const Contact = () => {
	UIStore.update(s => { s.activePage = NavPages.CONTACT })
	return (
		<div>
			<PageHeadline headline='Contact' />
			<ContactCard />
			<FooterView />
		</div>
	);
};

export default Contact;
