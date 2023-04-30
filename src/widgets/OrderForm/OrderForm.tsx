import React from 'react';
import styles from './OrderForm.module.scss';
import { GreenButton } from 'shared/components/GreenButton';
import { InputComponent } from 'shared/components/InputComponent';

export const OrderForm = ({ price }) => {
	return (
		<div className={styles['order-section__order_block']}>
			<div className={styles['calculator-block']}>
				<form>
					<div className={styles['price-block']}>
						<span className={styles['price']}>от {price}₽</span>/сутки
					</div>
					<div className={styles['form-to-block']}>
						<InputComponent
							onChange={function (payload: React.ChangeEvent<HTMLInputElement>): void {
								console.log(payload);
							}}
							value={'13.02.2023'}
							name={'Прибытие'}
							label={'Прибытие'}
						/>
						<InputComponent
							onChange={function (payload: React.ChangeEvent<HTMLInputElement>): void {
								console.log(payload);
							}}
							value={'16.02.2023'}
							name={'Выезд'}
							label={'Выезд'}
						/>
					</div>
					<div className="row-fields">
						<input type="text" />
					</div>
					<GreenButton title="забронировать" handleClick={() => console.log('click')} />
				</form>
			</div>
			<div className={styles['info']}>бесплатная отмена втечение 48 часов</div>
		</div>
	);
};
