import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://pk.sapphireonline.pk/cdn/shop/files/NEW-BANNER-1.png?v=1708694695&width=1500"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://pk.sapphireonline.pk/cdn/shop/files/Slider_Banner_2e7723a4-23a2-4ff5-bb44-4add510e63d1.jpg?v=1708426678&width=1400"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://pk.sapphireonline.pk/cdn/shop/files/Slider_Banner.webp?v=1708001818&width=1400"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
