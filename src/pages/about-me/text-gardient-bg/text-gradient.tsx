import React from 'react';
import './text-gradient.scss'

export const TextGradient = () => {
	return (
		<div className='text-gradient__wrapper'>
			<h2 className='text-gradient__headline'>
				<span className='text-gradient__headline-dollar'>$</span> whoami
			</h2>
			<p>My Name is Niklas. I'm a frontend developer who mainly focuses on Angular.</p>

			<p>How did I come to web development? It all started in the 4th grade when my older brother showed me how to create a website for my Flash animations using Adobe Dreamweaver. From then it went on. First I learned HTML and CSS. Later in middle school I started to create some projects with PHP. The biggest ones were a film critic website and a tournament bracket solution.</p>

			<p>During my apprenticeship at school I came into contact with C++, C# and Java. I taught myself angular over the three years and wrote the project for my final exam of the apprenticeship in it. The application replaced the planning table for a department in the machine factory and simplified the management of the order statuses and the distribution of order to the machines.</p>

			<p>One year later I started at a new company which offers end-to-end ecommerce solutions for large companies. I learned about angular in an ecommerce context. When I joined the projects prototype development just started. So I had the opportunity to be part of it from start to beyond go live. Along this journey I gained experience in working with large teams and technologies I had not used until that point. I learned how to setup a proper SASS styling structure and the advantages of GraphQL with Apollo as Endpoint for the SPA. Recently I have gained skills in React. With this I also wrote this website.</p>
		</div>
	);
};
