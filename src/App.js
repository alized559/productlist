import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, Card, Button } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';
import productImage from './images/car.jpg';
import Axios from "axios";

const selectedProduct = [];

function App() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 60;
  const [products, setProducts] = useState([]);
  const productName = [];
  const state = [];
  const city = [];
  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductState, setSelectedProductState] = useState("");
  const [selectedProductCity, setSelectedProductCity] = useState("");

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

    if (state.indexOf(products[i].address.state) < 0) {
      state[i] = products[i].address.state;
    }

    if (city.indexOf(products[i].address.city) < 0) {
      city[i] = products[i].address.city;
    }
  }

  const select = (e) => {
    selectedProduct.length = 0;
    setSelectedProductName(e);
    for (var i = 0; i < products.length; i++) {
      if (products[i].product_name == selectedProductName) {
        selectedProduct[i] = products[i];
      }
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
                <Dropdown onSelect={select} value={selectedProductName}>
                  <Dropdown.Toggle id="drpBtn">
                    <span className="drpText">Products</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu >
                    {productName.map(name => {
                      return (
                        <Dropdown.Item eventKey={name}>{name}</Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                              
                <Dropdown>
                  <Dropdown.Toggle id="drpBtn">
                    <span className="drpText">State</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {state.map(name => {
                      return (
                        <Dropdown.Item href="#">{name}</Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle id="drpBtn">
                    <span className="drpText">City</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {city.map(name => {
                      return (
                        <Dropdown.Item href="#">{name}</Dropdown.Item>
                      );
                    })}
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
                selectedProduct.length != 0
                ?
                singleProduct()
                :
                product()
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

  function singleProduct() {
    return (
      <div>
        <p>{selectedProductName}</p>
        <hr className="hr1"/>
        <div className="list">
          <ItemsCarousel
            className="myCarousel"
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
          selectedProduct.map(product => {
            return (
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
                    <p className="span1">{product.address.state}, {product.address.city}</p>
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
          })
        }
        </ItemsCarousel>
      </div>
      </div>
    )
  }

  function product() {
    return (
      productName.map(name => {
        return (
          <div>
            <p>{name}</p>
            <hr className="hr1"/>
            <div className="list">
              <ItemsCarousel
                className="myCarousel"
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
                              <p className="span1">{product.address.state}, {product.address.city}</p>
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
    )
  }
}

export default App;
