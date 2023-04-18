import React from 'react';
import styles from './OrderForm.module.scss';

export const OrderForm = ({ price }) => {
  return (
    <div className={styles["order-section__order_block"]}>
      <div className="calculator">
          <form >
            <div className="price">{price}</div>
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
  )
}
