import React from 'react'
import { TitleH3 } from 'shared/components/TitleH3';
import { IRuleItem } from 'shared/interfaces/IRuleItem';
import './style.scss';

export const InformationBlockSection = ({item }: {item: IRuleItem}) => {
  return (
    <section className={`information-block-section${item.mode ? ' information-block-section_mode': ''}`}>
        <TitleH3 title={item.title}/>
        <div className="information-block-section__container">
          <ul className="information-block-section__list">
            {
              item.data.map( rule => {
                return <li key={rule} 
                        className={`information-block-section__item text_font-feature-setting ${item.mode
                          ? ' information-block-section__item_mode'
                          : ''}`}>
                  {rule}
                </li>
              } )
            }
          </ul>
        </div>
    </section>
  )
}
