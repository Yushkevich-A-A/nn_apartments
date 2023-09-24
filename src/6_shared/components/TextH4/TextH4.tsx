import React from 'react';
import styles from './TextH4.module.scss';

export const TextH4 = ({ title }: { title: string }) => {
	return <h4 className={styles['text-label__h4']}>{title}</h4>;
};
