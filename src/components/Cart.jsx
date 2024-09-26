import React, { useState } from 'react'
import { ModalMenu } from './ModalMenu';
import Button from 'react-bootstrap/Button';
import './cart.css'


export const Cart = ({cart}) => {
  console.log('el cart en el componente', cart);

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  
  return (
    <div className='stickycart rounded-4'>
      <p className='fw-bold fs-3 yourcart'>Your cart ({totalItems})</p>
        {cart.map((e, index) => {
          return(
            <p key={index}><span className='fw-bold'>{e.name}</span> - {e.price} € (<span className='text-danger fw-bold'>x{e.quantity}</span>)</p>
          )
        })}
      <p>Order total: <span className='fs-4 fw-bold'>{totalPrice} €</span> </p>

      <Button className='rounded-5 botoncart' onClick={handleShow}>Confirm Order</Button>
      <ModalMenu cart={cart} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} totalPrice={totalPrice}/>
    </div>
  )
}
