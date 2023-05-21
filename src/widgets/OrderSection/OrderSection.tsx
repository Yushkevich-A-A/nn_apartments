import React from 'react';
import { WidthWrapperPage } from 'shared/components/WidthWrapperPage';
import styles from './OrderSection.module.scss';
import { IApartmentModel } from 'shared/types';
import { TextH4 } from 'shared/components/TextH4';
import { TextH3 } from 'shared/components/TextH3';
import { TextUnderTitle } from 'shared/components/TextUnderTitle';
import { DetailedCharacteristic } from 'shared/components/DetailedCharacteristic';
import { ComfortsBlock } from 'widgets/ComfortsBlock';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { OrderForm } from 'widgets/OrderForm';

export const OrderSection = ({ apartment }: { apartment: IApartmentModel }) => {
	return (
		<div className={styles['order-section']}>
			<WidthWrapperPage>
				<div className={styles['order-section__wrapper']}>
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
						<div className={styles['order-section__block']}>
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
											}}
										>
											<Placemark defaultGeometry={[56.320228, 43.972919]} />
										</Map>
									</YMaps>
									{/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0f15c2b1a9460d60fff48b933cd958ce5fe8bcd16dfe4469a6f556da21b95467&amp;source=constructor" width="500" height="400" frameborder="0"></iframe> */}
								</div>
							</div>
						</div>
					</div>
					<OrderForm price={apartment.price} />
				</div>
			</WidthWrapperPage>
		</div>
	);
};
