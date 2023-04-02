import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import { Card } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

const OrderOptionsModal = ({inCart , currentDish, optionsOpen, setinCart, setoptionsOpen}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch()

  return (
      
      <Modal
        open={optionsOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: 'auto'
        }}
      >
        <Card style={{background:'white',width:'100%', borderRadius:"20px"}}>
          <h2 id="modal-title">Modal Title</h2>
          <p id="modal-description">Modal Description</p>
          {console.log(currentDish)}
          {inCart?<Button onClick={()=>{dispatch({ type: "INCREMENT_ITEM_QUANTITY", payload: { _id: currentDish._id } });setinCart(false)}}>Add to Order</Button>:<Button onClick={()=>dispatch({ type: "ADD_ITEM", payload: { _id: currentDish._id, quantity: 1 } })}>Add to Order</Button>}
          

        

          
          
          <Button onClick={()=>setoptionsOpen(false)}>Close Modal</Button>

        </Card>
      </Modal>
  );
};

export default OrderOptionsModal;
