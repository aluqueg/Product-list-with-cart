import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import { CardMenus } from './components/CardMenus';
import data from '/data.json'
import { Cart } from './components/Cart';
import { useState } from 'react';



function App() {
  const [cart, setCart] = useState([])
  
  console.log('para ver el cart', cart);    

  return (
    <Container fluid>
     <Row>
      <Col className='d-flex justify-content-center align-items-center flex-wrap g-5'>      
        {data.map((e, index) => {
          return(
            <CardMenus key={index} data={e} cart={cart} setCart={setCart} />
          )
        })}
      </Col>
      <Col xs={5} className='g-5'>
      <Cart cart={cart} data={data} setCart={setCart} sticky />
      </Col>
     </Row>
    </Container>
  )
}

export default App
