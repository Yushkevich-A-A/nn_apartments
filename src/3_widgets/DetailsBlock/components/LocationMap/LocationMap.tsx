import React, { FC } from 'react';
import { TextH4, TextUnderTitle } from '6_shared/components';
import { IApartmentModel } from '6_shared/types';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import styled from 'styled-components';

type PropsType = {
	apartment: IApartmentModel;
};

const MapWrapper = styled.div`
	margin-top: 30px;

	@media (max-width: 960px) {
		margin: 20px 0 70px;
		position: relative;
		height: 480px;
	}

	@media (max-width: 640px) {
		margin: 20px 0;
	}
`;

const MapBlock = styled.div`
	border-radius: 15px;
	overflow: hidden;

	@media (max-width: 960px) {
		border-radius: 0;
	}
`;

const YaMap = styled(Map)`
	width: 100%;
	height: 450px;

	@media (max-width: 960px) {
		height: 480px;
	}
`;

export const LocationMap: FC<PropsType> = ({ apartment }) => {
	return (
		<>
			<TextH4 title="Расположение" />
			{!!apartment.location && <TextUnderTitle textArray={apartment.location.desc} />}
			<MapWrapper>
				<MapBlock>
					<YMaps>
						<YaMap
							defaultState={{
								center: [56.320228, 43.972919],
								zoom: 15,
								controls: ['zoomControl'],
							}}
							modules={['control.ZoomControl']}
							instanceRef={(ref) => {
								ref && ref.behaviors.disable('scrollZoom');
								ref && ref.behaviors.disable('drag');
							}}
						>
							<Placemark defaultGeometry={[56.320228, 43.972919]} />
						</YaMap>
					</YMaps>
				</MapBlock>
			</MapWrapper>
		</>
	);
};
