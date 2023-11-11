import React from 'react';
import { TextH2 } from '6_shared/components/TextH2';
import { WidthWrapperPage } from '6_shared/components/WidthWrapperPage/WidthWrapperPage';
import { IRuleItem } from '6_shared/interfaces/IRuleItem';
import { RuleColumn } from './RuleColumn';
import data from './data.json';
import styled from 'styled-components';

const Container = styled.div`
	padding: 70px 0;
	@media (max-width: 960px) {
		padding: 50px 0;
	}
`;
const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media (max-width: 380px) {
		display: block;
	}
`;

export const RuleBlock = () => {
	return (
		<WidthWrapperPage>
			<Container>
				<TextH2 title="Важная информация" />
				<Content>
					{data.map((item: IRuleItem) => (
						<RuleColumn key={item.title} item={item} />
					))}
				</Content>
			</Container>
		</WidthWrapperPage>
	);
};
