import React from 'react';
import cn from 'classnames';
import styles from './ComfortsBlock.module.scss';
import security from './assert/key.svg';
import park from './assert/park.svg';
import towel from './assert/towel.svg';
import tv from './assert/tv.svg';
import furniture from './assert/wash.svg';
import wifi from './assert/wifi.svg';
import { css } from '@emotion/css';

interface IProps {
	type: string;
	description: string;
}

export const ComfortsBlock = ({ comforts }: { comforts: IProps[] }) => {
	const handleIcons = (type: string) => {
		switch (type) {
			case 'wi-fi':
				return wifi;
			case 'parking':
				return park;
			case 'TV':
				return tv;
			case 'appliances':
				return furniture;
			case 'linens':
				return towel;
			case 'key':
				return security;
			default:
				return null;
		}
	};

	return (
		<div className={styles['comforts-list']}>
			{comforts.map((item: IProps) => (
				<div className={styles['comfort-item']}>
					<div
						className={styles['comfort-item_icon']}
						style={{ backgroundImage: `url(${handleIcons(item.type)})` }}
					></div>
					<div className={styles['comfort-item_desc']}>{item.description}</div>
				</div>
			))}
		</div>
	);
};
