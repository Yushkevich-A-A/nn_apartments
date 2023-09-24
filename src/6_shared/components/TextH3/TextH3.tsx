import React from 'react';
import styles from './TextH3.module.scss';

export const TextH3 = ({ title }: { title: string }) => {
	return <h3 className={styles['text-label__h3']}>{title}</h3>;
};
