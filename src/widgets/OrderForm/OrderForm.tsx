import React from 'react';
import styles from './OrderForm.module.scss';
import { GreenButton } from 'shared/components/GreenButton';
import { InputComponent } from 'shared/components/InputComponent';
import { SelectComponent } from 'shared/components/SelectComponent';
import { SelectDate } from 'features/SelectDate';

export const OrderForm = ({ price }) => {
	return (
		<div className={styles['order-section__order_block']}>
			<div className={styles['calculator-block']}>
				<form>
					<div className={styles['price-block']}>
						<span className={styles['price']}>от {price}₽</span>/сутки
					</div>
					<div className={styles['form-to-block']}>
						<SelectDate />
						<div className="form_select">
							<SelectComponent label="Для кого" value="1 гость" capacity={4} />
						</div>
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
