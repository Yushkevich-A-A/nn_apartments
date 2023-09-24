import React, { useEffect } from 'react';
import styles from './ModalWindow.module.scss';
interface IProps {
	handleClose: () => void;
}

export const ModalWindow: React.FC<React.PropsWithChildren<IProps>> = ({
	handleClose,
	children,
}) => {
	useEffect(() => {
		const handlePreventScroll = (e: any) => {
			e.preventDefault();
		};
		window.addEventListener('wheel', handlePreventScroll, { passive: false });
		return () => {
			window.removeEventListener('wheel', handlePreventScroll);
		};
	}, []);
	return (
		<div className={styles['modal']} onClick={(): void => handleClose()}>
			<div className={styles['modal_content']} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
