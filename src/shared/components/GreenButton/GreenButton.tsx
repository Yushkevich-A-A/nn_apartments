import React from 'react';
import styles from './GreenButton.module.scss';

interface IProps {
    title: string;
    handleClick: () => void;
}

export const GreenButton = ({ title, handleClick }: IProps) => {
  return (
    <div className={styles['green-button']} onClick={handleClick}>{title}</div>
  )
}
