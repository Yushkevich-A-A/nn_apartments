import React from 'react';
import { WidthWrapperPage } from "shared/components/WidthWrapperPage";
import styles from './OrderSection.module.scss';
import { IApartmentModel } from 'shared/types'
import { TextH4 } from 'shared/components/TextH4';
import { TextH3 } from 'shared/components/TextH3';
import { TextUnderTitle } from 'shared/components/TextUnderTitle';
import { DetailedCharacteristic } from 'shared/components/DetailedCharacteristic';
import { ComfortsBlock } from 'widgets/ComfortsBlock';

export const OrderSection = ({ apartment }: {apartment: IApartmentModel}) => {
  return (
    <div className={styles["order-section"]}>
        <WidthWrapperPage>
            <div className={styles["order-section__wrapper"]}>
                <div className={styles["order-section__description_block"]}>
                    <div className={styles["order-section__block"]}>
                        <TextH4 title='Апартаменты'/>
                        <TextH3 title={apartment.name}/>
                        <TextUnderTitle textArray={apartment.shortCharacteristic}/>
                        <DetailedCharacteristic data={apartment.detailedCharacteristic}/>
                    </div>
                    <div className={styles["order-section__block"]}>
                        <TextH4 title='Удобства:'/>
                        <ComfortsBlock comforts={apartment.comfort}/>
                    </div>
                    <div className={styles["order-section__block"]}>
                        <TextH4 title='Расположение'/>
                        <TextUnderTitle textArray={apartment.location.desc}/>
                        <div className="">
                            здесь отрисовывается карта
                        </div>
                    </div>
                </div>
                <div className="order-section__order_block">
                    <div className="calculator">
                        <form >
                            <div className="price">{apartment.price}</div>
                            <div className="row-fields">
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <div className="row-fields">
                                <input type="text" />
                            </div>
                            <button>забронировать</button>
                        </form>
                    </div>
                    <div className="info">
                        бесплатная отмена втечение 48 часов
                    </div>
                </div>
            </div>
        </WidthWrapperPage>
    </div>
  )
}
