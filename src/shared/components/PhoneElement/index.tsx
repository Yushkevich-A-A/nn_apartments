import React from 'react';
import { FooterContactLink } from '../FooterContactLink';

export const PhoneElement: React.FC = () => {
  return (
    <FooterContactLink url='tel:+79009999999'>
        <span className='text_font-feature-setting'>
            +7-910-999-99-99 
        </span>
    </FooterContactLink>
  )
}
