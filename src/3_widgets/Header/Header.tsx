import React, { FC } from 'react';
import styled from 'styled-components';
import Logo from '6_shared/components/Logo';
import { WidthWrapperPage } from '6_shared/components/WidthWrapperPage';
import { Phone } from '6_shared/components/MetaLinks/Phone/Phone';
import { ContentHeader, HeaderSlider } from './components';

const Container = styled.header`
	background: black;
	position: relative;
	z-index: 0;
`;

const TopInfornationContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1180px;
	margin: 0 auto;
	margin-bottom: 130px;
	justify-content: space-between;
	align-items: center;
`;

const ContentSlider = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -1;
	overflow: hidden;
`;

const ContentWrapper = styled.div`
	position: relative;
	padding: 35px 0 160px;

	@media (max-width: 960px) {
		padding-bottom: 150px;
	}

	@media (max-width: 640px) {
		padding-bottom: 50px;
		box-shadow: inset 10px 5px 5px black;
	}
`;

export const Header: FC = () => {
	return (
		<Container>
			<ContentSlider>
				<HeaderSlider />
			</ContentSlider>
			<ContentWrapper>
				<WidthWrapperPage>
					<TopInfornationContainer>
						<Logo />
						<Phone phone="+79107984696">+7 910 798-46-96</Phone>
					</TopInfornationContainer>
					<ContentHeader />
				</WidthWrapperPage>
			</ContentWrapper>
		</Container>
	);
};
