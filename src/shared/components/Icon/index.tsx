import React from 'react';
import './style.scss';

export const Icon: React.FC<{url: string}> = ({url}) => {
  return (
    <div className='element-icon' style={{backgroundImage: `url(${url})`}}></div>
  )
}
