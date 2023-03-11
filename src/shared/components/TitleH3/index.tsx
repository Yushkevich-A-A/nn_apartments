import React from 'react';
import './style.scss';

export const TitleH3 = ({title}: {title: string}) => {
  return (
    <h3 className='block-title-h3'>
        { title }
    </h3>
  )
}
