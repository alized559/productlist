import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, Card, Button } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';
import productImage from './images/car.jpg';
import Axios from "axios";

function App() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const [products, setProducts] = useState([]);
  const productName = [];

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://assessment-edvora.herokuapp.com/"
    );

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  for (var i = 0; i < products.length; i++) {
    if(productName.indexOf(products[i].product_name) < 0) {
      productName[i] = products[i].product_name;
    }
  }

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
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                              
                <Dropdown>
                  <Dropdown.Toggle id="drpBtn">
                    <span className="drpText">State</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle id="drpBtn">
                    <span className="drpText">City</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
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
                {
                  productName.map(name => {
                    return (
                      <div>
                        <p>{name}</p>
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
                            {
                              products.map(product => {
                                if (product.product_name == name) {
                                  return(
                                    <div className="listCard">
                                      <Row>
                                        <Col sm={5}>
                                          <img src={product.image} alt="product_image"/>
                                        </Col>

                                        <Col sm={7}>
                                          <p>{product.product_name}<br/><span className="span">{product.brand_name}</span><br/>$ {product.price}</p>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col>
                                          <p className="span1">{product.address.city}</p>
                                        </Col>
                                        <Col sm={7}>
                                          <p className="span1">{product.date}</p>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col>
                                          <p className="span">{product.discription}</p>
                                        </Col>
                                      </Row>
                                    </div>
                                  )
                                }
                              })
                            }
                          </ItemsCarousel>
                        </div>
                        <br/>
                      </div>
                    )
                  })
                }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
