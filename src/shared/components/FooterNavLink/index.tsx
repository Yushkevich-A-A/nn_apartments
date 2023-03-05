import React from 'react';
import './style.scss';

export const FooterNavLink: React.FC<{url?: string, value: string}> = ({url, value}) => {
  return (
    <div className='footer__nav-link'>{value}</div>
  )
}
