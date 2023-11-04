import React from 'react';
import styles from './ApartmentCharacteristic.module.scss';

interface ICharacteristic {
	name: string;
	data: string | number;
}

interface IProps {
	data: ICharacteristic[];
}

export const ApartmentCharacteristic: React.FC<IProps> = ({ data }) => {
	return (
		<div className={styles['detailed-characteristic']}>
			{data.map((charact: ICharacteristic) => (
				<div className={styles['characteristic-row']} key={charact.data}>
					<div className={styles['characteristic-key']}>{charact.name}</div>
					<div className={styles['characteristic-line']}></div>
					<div className={styles['characteristic-data']}>
						{charact.data}
						{charact.name.toLocaleLowerCase() === 'общая площадь' ? (
							<span className={styles['square']}> m</span>
						) : (
							''
						)}
					</div>
				</div>
			))}
		</div>
	);
};
