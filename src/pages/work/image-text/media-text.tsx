import React from 'react';
import './media-text.scss';

interface Props {
	showImage: 'left' | 'right';
}

export const MediaText: React.FC<Props> = ({showImage}) => {
	const itemOrder = {
		image: showImage === 'left' ? 1 : 2,
		text: showImage === 'left' ? 2 : 1,
	}

	return (
		<div className='grid-x grid-margin-x media-text__wrapper page__component-indentation'>
			<div className={`cell large-6 large-order-${itemOrder.image} media-text__media`}>
				<img src="https://via.placeholder.com/630x354/ccc/000" alt="work-post-1" />
			</div>
			<div className={`cell large-6 large-order-${itemOrder.text} media-text__text`}>
				<h2 className="media-text__text-headline">
					ProShop
				</h2>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius turpis feugiat in aliquet. Morbi nisl, nullam amet aliquam. Quis faucibus et curabitur ultricies eget adipiscing eu, enim pellentesque. Sem ipsum non tellus ultricies risus fames. Nulla elementum eu ut venenatis, velit nullam duis facilisis amet. Nibh ac ultrices aliquam dui at et eu massa diam. Eu, consectetur nisi gravida ut quis. Suspendisse consectetur volutpat odio aliquam nam nulla. Lorem gravida egestas orci faucibus laoreet integer nunc. Enim, libero, tincidunt elit urna, nibh diam massa. Urna morbi at faucibus enim. Mauris id suspendisse nunc amet. Lorem sed nec ac fames. Facilisis odio quam posuere pretium, mi maecenas vitae egestas augue.
				</span>
			</div>
		</div>
	);
};
