import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Container, Row, Col, Dropdown, Card, Button } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';
import productImage from './images/car.jpg';

function App() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <div className="body">
      <Container fluid>
        <Row>
          <Col sm={2}>
            <div className="filters">
              <div className="filters-box">
                <p>Filters</p>
                <hr/>
                <Dropdown>
                  <Dropdown.Toggle id="drpBtn">
                    <span className="drpText">Products</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                              
                <Dropdown>
                  <Dropdown.Toggle id="drpBtn">
                    <span className="drpText">State</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle id="drpBtn">
                    <span className="drpText">City</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <br/>
              </div>
            </div>
          </Col>

          <Col sm={10}>
            <div className="sCol">
              <h1>Edvora</h1>
              <h5 className="prodH5">Products</h5>
            </div>
            <div>
              <p>Product Name</p>
              <hr className="hr1"/>
              <div className="list">
                <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={20}
                leftChevron={<button className="ind">{'<'}</button>}
                rightChevron={<button className="ind1">{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                <div className="listCard">
                  <img src={productImage} alt="product_image"/>
                </div>
                <div className="listCard">
                  First card
                </div>
                <div className="listCard">
                  First card
                </div>
                <div className="listCard">
                  First card
                </div>
                <div className="listCard">
                  First card
                </div>
              </ItemsCarousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
