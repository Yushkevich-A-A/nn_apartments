import React from 'react';
import { LinkElement } from '../LinkElement';
import './style.scss';

export const PhoneElement: React.FC = () => {
  return (
    <LinkElement url='tel:+79009999999'>
        <span className='text_font-feature-setting'>
            +7-910-999-99-99 
        </span>
    </LinkElement>
  )
}
