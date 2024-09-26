import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Cart } from './Cart';
import './cardMenus.css'


export const CardMenus = ({data, cart, setCart}) => {
  const [count, setCount] = useState(0)

  const addToCart = (product) => {
    setCart((cart) => { 
      const existingProduct = cart.find(item => item.name === product.name)
      if(existingProduct) {
        return cart.map(item => item.name === product.name ?
          {...item, quantity: item.quantity + 1}
          : item
        )
      }else{
        return [...cart, {...product, quantity: 1}]        
      }
    })
    setCount(count + 1)
  }

  console.log('para ver si guarda algo en el carro',cart);

  const updateQuantity = (product) => {
    setCart((cart) =>
       cart.map((item) => 
        item.name === product.name ? {...item, quantity: item.quantity - 1 } : item) 
        .filter((item) => item.quantity > 0)     
    )    
    setCount(count > 0 ? count - 1 : 0)
  }  

  const removeFromCart = (product) => {
    setCart((cart) => cart.filter((item) => item.name !== product.name))
    setCount(0)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image.desktop} />
      <Card.Body>
      <Card.Text>
          {data.category}
        </Card.Text>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.price} €
        </Card.Text>
        <div className='div-botones d-flex justify-content-around align-items-center rounded-5'>
          <span onClick={()=>updateQuantity(data)}>🔽</span>
          <span>{count}</span>
          <span onClick={()=>addToCart(data)}>🔼</span> 
          <span onClick={()=>removeFromCart(data)}>❌</span>         
        </div>
      </Card.Body>
    </Card>
  )
}
