import { ComfortsBlock } from '3_widgets/ComfortsBlock';
import { DetailedCharacteristic } from '6_shared/components/DetailedCharacteristic';
import { TextH3 } from '6_shared/components/TextH3';
import { TextH4 } from '6_shared/components/TextH4';
import { TextUnderTitle } from '6_shared/components/TextUnderTitle';
import React from 'react';

export const DescriptionDetailsBlock = () => {
	return (
		<div className={styles['order-section__description_block']}>
			<div className={styles['order-section__block']}>
				<TextH4 title="Апартаменты" />
				<TextH3 title={apartment.name} />
				<TextUnderTitle textArray={apartment.shortCharacteristic} />
				<DetailedCharacteristic data={apartment.detailedCharacteristic} />
			</div>
			<div className={styles['order-section__block']}>
				<TextH4 title="Удобства:" />
				<ComfortsBlock comforts={apartment.comfort} />
			</div>

			{/* TODO: переместить блок карты  в отдельный section */}
			{/* <div className={styles['order-section__block']}>
				<TextH4 title="Расположение" />
				{!!apartment.location && <TextUnderTitle textArray={apartment.location.desc} />}
				<div className={styles['map_block_wrapper']}>
					<div className={styles['map_block']}>
						<YMaps>
							<Map
								className={styles['ya-map']}
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
							</Map>
						</YMaps>
						// <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0f15c2b1a9460d60fff48b933cd958ce5fe8bcd16dfe4469a6f556da21b95467&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
					</div>
				</div> 
			</div> */}
		</div>
	);
};
