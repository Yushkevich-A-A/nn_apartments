import React, { FC } from 'react';
import { ApartmentCharacteristic } from '../ApartmentCharacteristic';
import { TextH3 } from '6_shared/components/TextH3';
import { TextH4 } from '6_shared/components/TextH4';
import { TextUnderTitle } from '6_shared/components/TextUnderTitle';
import styled from 'styled-components';
import { IApartmentModel } from '6_shared/types';
import { LocationMap } from '../LocationMap';
import { CharacteristicSection } from '../CharacteristicSection';
import { SectionOfBlock } from '../SectionOfBlock';
import { ComfortSection } from '../ComfortSection';

type PropsType = {
	apartment: IApartmentModel;
};

const Container = styled.div`
	max-width: 50%;

	@media (max-width: 1200px) {
		max-width: 470px;
		width: 470px;
	}

	@media (max-width: 960px) {
		max-width: 100%;
		width: 100%;
	}
`;

export const DescriptionDetailsBlock: FC<PropsType> = ({ apartment }) => {
	return (
		<Container>
			<SectionOfBlock>
				<CharacteristicSection apartment={apartment} />
			</SectionOfBlock>
			<SectionOfBlock>
				<ComfortSection comforts={apartment.comfort} />
			</SectionOfBlock>
			{/* TODO: переместить блок карты  в отдельный section */}
			<SectionOfBlock>
				<LocationMap apartment={apartment} />
			</SectionOfBlock>
		</Container>
	);
};
