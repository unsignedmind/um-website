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

			<p>During my apprenticeship at school I came into contact with C++, C# and Java. I taught myself angular over the three years and wrote the project for my final exam of the apprenticeship in it. The application replaced the planning table for a department in the machine factory.</p>

			<p>One year later a company picked me up, which offers end-to-end ecommerce solutions for large companies. I moved to a new city and began to live on my own. In this new company I learned angular from professionals, teamwork with Git, GraphQL, Sass and how big projects work. My JS experience came entirely from Angular so I also took some Javascript courses :D. 5Head :D.</p>
		</div>
	);
};
