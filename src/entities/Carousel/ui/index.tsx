import Carousel from 'react-bootstrap/Carousel';
import data from './data';
import ICarouselData from 'shared/interfaces/ICarouselData';

function CarouselFadeExample() {
  return (
    <Carousel fade>
        {
           data.map((item: ICarouselData) => <Carousel.Item key={item.id}>
                <img
                className="d-block w-100"
                src={item.img}
                alt={item.description}
                />
            </Carousel.Item>) 
        }

    </Carousel>
  );
}

export default CarouselFadeExample;