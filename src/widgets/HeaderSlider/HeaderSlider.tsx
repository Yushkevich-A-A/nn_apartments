import React from 'react';
import { Carousel } from 'react-bootstrap';
import data from './data.json';
import apart1 from './img/apart1.jpg';
import apart2 from './img/apart2.jpg';
import apart3 from './img/apart3.jpg';
import apart4 from './img/apart4.jpg';
import ICarouselData from 'shared/interfaces/ICarouselData';
import './style.scss';

export function HeaderSlider() {
  const arrImg = [ apart1, apart2, apart3, apart4 ];

  return (
    <Carousel 
      fade={true}
      controls={false}
      indicators={false}
      pause={false}
      >
        {
           data.map((item: ICarouselData, index: number) => <Carousel.Item key={item.id}>
              <div className="carousel_img" style={{backgroundImage:`url(${arrImg[index]})`}}/>
            </Carousel.Item>) 
        }

    </Carousel>
  );
}