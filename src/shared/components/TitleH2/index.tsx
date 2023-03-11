import React from 'react';
import './style.scss';

export const TitleH2 = ({ title }: { title: string }) => {
  return (
    <h2 className="block-title-h2">
      {title}
    </h2>
  )
}
