import React from 'react';
import './style.scss';

interface ILinkElement {
  url: string,
  children: React.ReactNode
}

export const LinkElement: React.FC<ILinkElement> = (props: ILinkElement ) => {
  const { url } = props;
  return (
    <a href={url} className='link-element'>
      {
        props.children
      }
    </a>
  )
}
