import React, { useState, useEffect } from 'react';
import { IApartmentModel } from 'shared/types';
import { useApartmentStore } from "store/useApartmentStore";
import './style.scss'

export default function Appartment(){
    const [ apartment, setApartment ] = useState<IApartmentModel | null>( null );
    const { getApartment, selectedAppartment } = useApartmentStore();

    useEffect(() => {
        if (selectedAppartment === null) {
            return;
        }
        setApartment(getApartment(selectedAppartment));
    }, [selectedAppartment])


    return(
        <>
        {!!apartment && <div className="apartaments-text">
            <p className="apartaments-text__head">{apartment.title}</p>
            <p className="apartaments-text__adress">{apartment.address}</p>
            <div className="apartaments-text__about">
                {apartment.description}
            </div>
        </div>}
        </>
    )
}