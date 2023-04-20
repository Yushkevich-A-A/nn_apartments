import React from 'react';
import './style.scss';

export const WidthWrapperPage: React.FC<React.PropsWithChildren> = (props) => {
	return <div className="page-wrapper_width">{props.children}</div>;
};
