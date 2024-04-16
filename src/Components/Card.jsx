import React, { useState } from 'react';
import { Carousel, Card, Col, Row } from 'react-bootstrap';
import './style.css';

function IndividualIntervalsExample() {
  const images = [
    {
      url: 'https://pk.sapphireonline.pk/cdn/shop/files/shop_by_category___rtw.jpg?v=1708598689&width=400',
      title: 'READY TO WEAR'
    },
    {
      url: 'https://pk.sapphireonline.pk/cdn/shop/files/sbc___man_2.jpg?v=1707978935&width=400',
      title: 'MAN'
    },
    {
      url: 'https://pk.sapphireonline.pk/cdn/shop/files/sbc___us_2.jpg?v=1707978898&width=400',
      title: 'UNSTITCHED'
    },
    {
      url: 'https://pk.sapphireonline.pk/cdn/shop/files/shop_by_category___west.jpg?v=1706779696&width=400',
      title: 'WEST'
    },
    {
      url: 'https://pk.sapphireonline.pk/cdn/shop/files/shop_by_category___beauty_2.jpg?v=1706779696&width=400',
      title: 'BEAUTY'
    },
    {
      url: 'https://pk.sapphireonline.pk/cdn/shop/files/modest_2fb3170b-888b-4f00-b6ca-de7779fcffca.jpg?v=1706779650&width=400',
      title: 'MODEST WEAR'
    },
    {
      url: 'https://pk.sapphireonline.pk/cdn/shop/files/accessories_23518f25-b9ef-41ae-a60b-7a05e8d4415c.jpg?v=1706779650&width=400',
      title: 'ACCESSORIES'
    },
    {
      url: 'https://pk.sapphireonline.pk/cdn/shop/files/shop_by_category___kids.jpg?v=1707817103&width=400',
      title: 'KIDS'
    }
  ];

  const numVisibleCards = 4;
  const numImages = images.length;

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index - 1 + numImages) % numImages);
  };

  const handleNext = () => {
    setIndex((index + 1) % numImages);
  };

  return (
    <div className="card-carousel-container">
      <h1 className="shop-by-category">SHOP BY CATEGORY</h1>
      <Carousel fade controls={false} interval={null} pause={false} className="card-carousel">
        <Carousel.Item>
          <Row xs={1} md={2} lg={4} className="g-4">
            {Array.from({ length: numVisibleCards }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={images[(index + idx) % numImages].url} />
                  <Card.Body>
                    <Card.Title>{images[(index + idx) % numImages].title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>

      {/* Arrow navigation */}
      <a className="carousel-control-prev" role="button" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" role="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default IndividualIntervalsExample;
