import React, { useState, useEffect } from 'react';
import { IApartmentModel } from 'shared/types';
import { useApartmentStore } from "store/useApartmentStore";
import './style.scss'

export default function Appartment(){
    const [ apartment, setApartment ] = useState<IApartmentModel | null>( null );
    const { getApartment, selectedAppartment } = useApartmentStore();

    useEffect(() => {
        debugger
        if (selectedAppartment === null) {
            return;
        }
        const data = getApartment(selectedAppartment)
        setApartment(data);
    }, [selectedAppartment])


    return(
        <>
        {!!apartment && <div className="apartment">
                <div className="apartaments-text">
                    <p className="apartaments-text__head">{apartment.title}</p>
                    <p className="apartaments-text__adress">{apartment.address}</p>
                    <div className="apartaments-text__about">
                        {apartment.description}
                    </div>
                </div>
                <div className="apartment-order__section">
                    <div className="apartment-order__description">
                        <div className="apartment-order__description_title">
                            <div className="">Апартаменты</div>
                            <div className="">{apartment.name}</div>
                            {
                                apartment.shortCharacteristic.map(
                                    (item) => <span key={item}>{item}</span>
                                )
                            }
                            <div className="detailed-characteristic">
                            {
                                apartment.detailedCharacteristic.map(
                                    (charact) => <div key={charact.data}>{charact.data}   {charact.data}</div>
                                )
                            }
                            </div>
                        </div>
                        <div className="apartment__comfort">
                            <div className="">Удобства</div>
                            <div className="">
                                {
                                    apartment.comfort.map((item) => <div key={item.type}>{item.type} {item.description}</div>)
                                }
                            </div>
                        </div>
                        <div className="apartment__map">
                            <div className="">Расположение</div>
                            <div className="">
                                {
                                    apartment.location.desc.map((item) => <div key={item}>{item}</div>)
                                }
                            </div>
                            <div className="">
                                здесь отрисовывается карта
                            </div>
                        </div>
                    </div>
                    <div className="apartment-order_calculate">
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
            </div>
        }
        </>
    )
}