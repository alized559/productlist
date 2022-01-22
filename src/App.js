import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Dropdown, Carousel, Card, Button } from 'react-bootstrap';

function App() {
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

          <Col>
            <div className="sCol">
              <h1>Edvor</h1>
              <h5 className="prodH5">Products</h5>
            </div>
            <div>
              <p>Product Name</p>
              <hr className="hr1"/>
              <div className="list">
                <Carousel show={3.5} slide={3} swiping={true}>
                  
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
