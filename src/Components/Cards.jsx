import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'; 
import './style2.css';

function IndividualIntervalsExample() {
  const images = [
    {
      url: 'https://cdn.shopify.com/s/files/1/1592/0041/files/more_to_explore_ab27a39c-6693-43ac-ac9f-5cbec78ec93f.jpg?v=1708585493',
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/1592/0041/files/DAILY.webp?v=1707982665',
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/1592/0041/files/more_to_explore.webp?v=1707995097',
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/1592/0041/files/west_spring_dresses.jpg?v=1706779995',
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/1592/0041/files/more_to_explore.jpg?v=1703072422',
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/1592/0041/files/fabric-more-to-explore.webp?v=1698053691',
    }
    
  ];

  const [startIndex, setStartIndex] = useState(0);
  const numVisibleCards = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((startIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [startIndex, images.length]);

  const goToNextCard = () => {
    setStartIndex((startIndex + 1) % images.length);
  };

  const goToPreviousCard = () => {
    setStartIndex((startIndex - 1 + images.length) % images.length);
  };

  return (
    <Container>
      <h1 className="category" >MORE TO EXPLORE</h1>
      <div className="card-carousel-container">
        <Row className="g-4">
          {[0, 1, 2].map((idx) => {
            const adjustedIndex = (startIndex + idx) % images.length;

            return (
              <Col key={idx}>
                <div className={`carousel-card ${idx === 1 ? 'middle' : 'side'}`}>
                  <Card>
                    <Card.Img variant="top" src={images[adjustedIndex].url} />
                    <Card.Body>
                      <Card.Title>{images[adjustedIndex].title}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
        {/* Arrow navigation */}
        <div className="arrow-navigation">
          <div className="arrow-left" onClick={goToPreviousCard}>
            <BsArrowLeft />
          </div>
          <div className="arrow-right" onClick={goToNextCard}>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default IndividualIntervalsExample;




