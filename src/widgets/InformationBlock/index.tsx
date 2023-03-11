import React from 'react';
import { TitleH2 } from 'shared/components/TitleH2';
import { WidthWrapperPage } from 'shared/components/WidthWrapperPage';
import './style.scss';

export const InformationBlock = () => {
  return (
    <WidthWrapperPage>
      <div className="information-block">
        <TitleH2 title="Важная информация"/>
      </div>
    </WidthWrapperPage>
  )
}
