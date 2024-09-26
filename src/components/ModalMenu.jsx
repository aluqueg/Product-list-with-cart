import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalMenu.css'

export const ModalMenu = ({cart, show, setShow, handleClose, handleShow, totalPrice}) => {


  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>✔ Order Confirmed</Modal.Title>          
        </Modal.Header>
        <p>we hope you enjoy your food!</p>
        <div className='bg-light'>
        <Modal.Body>{cart.map((e , index) => {
          return(
            <>
              <p key={index}><span className='fw-bold'>{e.name}</span> (<span className='text-danger fw-bold'>x{e.quantity}</span>)</p>
              <p className='fw-bold'>{e.price} €</p>
            </>
          )
        })}</Modal.Body>
        <p>Order total: <span className='fs-4 fw-bold'>{totalPrice} €</span></p>
        </div>
        <Modal.Footer className='justify-content-center'>
          <Button className='rounded-5 colorbotonmodal' onClick={handleClose}>
            Start New Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
