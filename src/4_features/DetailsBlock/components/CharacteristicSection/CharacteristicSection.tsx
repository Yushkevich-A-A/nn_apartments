import React, { FC } from 'react';
import { TextH3, TextH4, TextUnderTitle } from '6_shared/components';
import { ApartmentCharacteristic } from '../ApartmentCharacteristic';
import { IApartmentModel } from '6_shared/types';

type PropsType = {
	apartment: IApartmentModel;
};

export const CharacteristicSection: FC<PropsType> = ({ apartment }) => {
	return (
		<>
			<TextH4 title="Апартаменты" />
			<TextH3 title={apartment.name} />
			<TextUnderTitle textArray={apartment.shortCharacteristic} />
			<ApartmentCharacteristic data={apartment.detailedCharacteristic} />
		</>
	);
};
