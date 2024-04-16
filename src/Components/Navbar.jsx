import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faClock, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

function BrandExample() {
  return (
    <>
      <Navbar className='mainheader' fixed='top'>
        <Container fluid>
          <Navbar.Brand href='#home'>
            <img 
              src='https://upload.wikimedia.org/wikipedia/commons/7/70/Sapphire_Logo.png'
              width='390px'
              height='50px'
              style={{ padding: '0 50px' }}
            />
          </Navbar.Brand>

        <Form className="searchbox">
            <Form.Control
              type="search"
              placeholder="FIND YOUR FAVOURITE"
              className="me-2"
              aria-label="Search"
              size='lg'
              style={{width:'650px'}}
            />
            <Button variant="outline-success" style={{width:'90px'}}>FIND</Button>
          </Form>
          <div className="icons-container">
      <FontAwesomeIcon icon={faShoppingCart} className="icon" />
    </div>
          </Container>
      </Navbar>
      <div style={{ paddingTop: '70px'} }>
      <hr className="separator" />
      <Navbar className='second-navbar' sticky='top'>
        <Container fluid className='pages' >
          <Nav>
            <div className="col-sm">
            <NavDropdown title="NEWIN" id="basic-nav-dropdown" className="mx-5">
              <NavDropdown.Item>
                <Container>
                  <Row>
                   <div className='col-sm'>
                    <Col>
                      <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/new_in_dropdown.jpg?v=1708598712&width=400" alt="Image" style={{ width: '300px', height: '500px' }} />
                    </Col>
                    </div>
                   <div className='col-sm'>
                    <Col>
                      <NavDropdown.Item href="#action/3.1">Unstitched</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Ready to wear</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Cosmetics</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Kids</NavDropdown.Item>
                    </Col>
                    </div>
                  </Row>
                </Container>
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <NavDropdown title="WOMAN" id="basic-nav-dropdown" className="mx-5"> 
              <NavDropdown.Item>
                <Container>
                  <Row>
                    <Col>
                      <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/woman_2_ee928e01-58a1-4a13-acf0-270cf99acde6.jpg?v=1707995827&width=400" alt="Image" style={{ width:'300px', height: '500px' }} />
                    </Col>
                    <Col>
                      <NavDropdown.Item href="#action/3.1">Lawn 24</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Printed</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Embrodiery</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Luxury</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MAN" id="basic-nav-dropdown" className="mx-5">
              <NavDropdown.Item>
                <Container>
                  <Row>
                    <Col>
                      <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/man_c83998fe-fd17-427d-8c82-82bf82321dc9.jpg?v=1707995853&width=400" alt="Image" style={{ width:'300px', height: '500px' }} />
                    </Col>
                    <Col>
                      <NavDropdown.Item href="#action/3.1">Waistcoats</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Outfits</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Kurtas</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Bottoms</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="KIDS" id="basic-nav-dropdown" className="mx-5">
              <NavDropdown.Item>
                <Container>
                  <Row>
                    <Col>
                      <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/kids_2.jpg?v=1707816528&width=400" alt="Image" style={{ width:'300px', height: '500px' }} />
                    </Col>
                    <Col>
                      <NavDropdown.Item href="#action/3.1">Mommy & Me</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Siblings Love</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Boys</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Girls</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BEAUTY" id="basic-nav-dropdown" className="mx-5">
              <NavDropdown.Item>
                <Container>
                  <Row>
                    <Col>
                      <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/beauty-1.webp?v=1698913349&width=400" alt="Image" style={{ width:'300px', height: '500px' }} />
                    </Col>
                    <Col>
                      <NavDropdown.Item href="#action/3.1">Fragrances</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Face</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Makeup tools</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Lips</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ACCESSORIES" id="basic-nav-dropdown" className="mx-5">
              <NavDropdown.Item>
                <Container>
                  <Row>
                    <Col>
                      <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/accessories_2.jpg?v=1704969070&width=400" alt="Image" style={{ width:'300px', height: '500px' }} />
                    </Col>
                    <Col>
                      <NavDropdown.Item href="#action/3.1">Women's Bags</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Wallets</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Flats</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Scarves</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HOME" id="basic-nav-dropdown" className="mx-5">
              <NavDropdown.Item>
                <Container>
                  <Row>
                    <Col>
                      <NavDropdown.Item href="#action/3.1">Bedsheets</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Towels</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Cushion covers</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Napkins</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
  );
}

export default BrandExample;
