import React, { FC } from 'react';
import styled from 'styled-components';
import Logo from '6_shared/components/Logo';
import './Header.scss';
import { WidthWrapperPage } from '6_shared/components/WidthWrapperPage';
import { Phone } from '6_shared/components/MetaLinks/Phone/Phone';
import { ContentHeader, HeaderSlider } from './components';

const Container = styled.header``;

export const Header: FC = () => {
	return (
		<header className={'header'}>
			<div className={'slider_wrapper'}>
				<HeaderSlider />
			</div>
			<div className={'header_wrapper'}>
				<WidthWrapperPage>
					<div className={'header_container'}>
						<Logo />
						<Phone phone="+79107984696">+7 910 798-46-96</Phone>
					</div>
					<ContentHeader />
				</WidthWrapperPage>
			</div>
		</header>
	);
};
