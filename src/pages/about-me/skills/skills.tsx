import React from 'react';
import './skills.scss';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';

export const Skills = () => {
	return (
	<Splide
		options={
			{
				type : 'slide',
				start: 1,
				focus: 'center',
				autoWidth: true,
			}
		}
	>
		<SplideSlide>
			<div className='skills__gradient-box'>
				<h2 className='skills__headline'>In Shape</h2>
				<div className="skills__tech">
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/react.png" alt="react" />
						</div>
						<span>React</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/graphql.png" alt="graphql" />
						</div>
						<span>GraphQL</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/nodejs.png" alt="nodejs" />
						</div>
						<span>NodeJs</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/mongodb.png" alt="mongodb" />
						</div>
						<span>MongoDB</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/figma.png" alt="figma" />
						</div>
						<span>Figma</span>
					</div>
				</div>
			</div>
		</SplideSlide>
		<SplideSlide>
			<div className='skills__gradient-box skills__gradient-box--bordered'>
				<h2 className='skills__headline'>Daily Use</h2>
				<div className="skills__tech">
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/angular.png" alt="angular" />
						</div>
						<span>Angular</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/html.png" alt="angular" />
						</div>
						<span>HTML</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/js.png" alt="angular" />
							<img src="images/icons/tech/ts.png" alt="angular" />
						</div>
						<span>JavaScript<br/>TypeScript</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/css.png" alt="angular" />
							<img src="images/icons/tech/sass.png" alt="angular" />
						</div>
						<span>CSS<br/>SASS</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/git.png" alt="angular" />
						</div>
						<span>Git</span>
					</div>
				</div>
			</div>
		</SplideSlide>
		<SplideSlide>
			<div className='skills__gradient-box'>
				<h2 className='skills__headline'>Used</h2>
				<div className="skills__tech">
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/java.png" alt="react" />
						</div>
						<span>Java</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/c-sharp.png" alt="graphql" />
						</div>
						<span>C#</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/sql.png" alt="nodejs" />
						</div>
						<span>SQL</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/c++.png" alt="mongodb" />
						</div>
						<span>C++</span>
					</div>
					<div className="skills__tech-group">
						<div className="skills__tech-group-icons">
							<img src="images/icons/tech/php.png" alt="figma" />
						</div>
						<span>PHP</span>
					</div>
				</div>
			</div>
		</SplideSlide>
	</Splide>
	);
};
