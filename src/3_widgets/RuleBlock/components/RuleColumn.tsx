import React, { FC } from 'react';
import { TextH4 } from '6_shared/components/TextH4';

type PropsType = {
	item: RuleItem;
};
interface RuleItem {
	title: string;
	data: string[];
	mode: boolean;
}

// .information-block-section {
//     margin-top: 30px;
//     width: 300px;
// }

// .information-block-section_mode {
//     width: 280px;
// }

// .information-block-section__container {
//     margin-top: 20px;
// }

// .information-block-section__item {
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 120%;
// }

// .information-block-section__item:nth-child(n + 2) {
//     margin-top: 7px;
// }

// .information-block-section__item_mode:nth-child(n + 2) {
//     margin-top: 20px;
// }

// @media (max-width: 960px) {
//     .information-block-section__item {
//         font-size: 16px;
//     }
// }

// @media (max-width: 380px) {
//     .information-block-section__item {
//         font-size: 14px;
//     }
//     .information-block-section__item_mode:nth-child(n + 2) {
//         margin-top: 7px;
//     }
// }

export const RuleColumn: FC<PropsType> = ({ item }) => {
	return (
		<section
			className={`information-block-section${item.mode ? ' information-block-section_mode' : ''}`}
		>
			<TextH4 title={item.title} />
			<div className="information-block-section__container">
				<ul className="information-block-section__list">
					{item.data.map((rule) => {
						return (
							<li
								key={rule}
								className={`information-block-section__item text_font-feature-setting ${
									item.mode ? ' information-block-section__item_mode' : ''
								}`}
							>
								{rule}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};
