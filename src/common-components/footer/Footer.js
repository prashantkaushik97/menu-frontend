import React, { useState } from 'react'
import OrderBar from '../../Components/OrderBar/OrderBar';
import OrderButton from '../../Components/OrderButton/OrderButton';
import OrderSlider from '../../Components/OrderSlider/OrderSlider';
import "./Style.css"
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { useSelector } from 'react-redux';

export default function Footer() {
  const [options, setoptions] = useState({menu:true, orders:false, payment:false})
  const location = useLocation();
  const items = useSelector(state => state.items)

  return <>
    <footer className="footer">
      {location.pathname == '/menu'  && Object.keys(items).length > 0 && <OrderSlider />}
      <div className='footer__lower'>
        <div onClick={()=>setoptions({menu:true, orders:false, payment:false})} className={`${options.menu ? "option__clicked" : "option__unclicked"}`} >
          <div>
          <MenuBookOutlinedIcon fontSize='large' htmlColor={`${options.menu ? "orange" : "black"}`} />
          </div>
          <div style={{marginTop:'30px', marginLeft:'-39px'}}>
            Menu
          </div>
        </div>
        <div onClick={()=>setoptions({menu:false, orders:true, payment:false})} className={`${options.orders ? "option__clicked" : "option__unclicked"}`} >
          <div>
          <DinnerDiningOutlinedIcon fontSize='large' htmlColor={`${options.orders ? "orange" : "black"}`}  />

          </div>
          <div style={{marginTop:'30px', marginLeft:'-45px', paddingBottom:'50px'}}>
            Orders
          </div>
        </div>
        <div onClick={()=>setoptions({menu:false, orders:false, payment:true})} className={`${options.payment ? "option__clicked" : "option__unclicked"}`} >
        <div>
          <ReceiptLongOutlinedIcon fontSize='large' htmlColor={`${options.payment ? "orange" : "black"}`}  />

          </div>
          <div style={{marginTop:'30px', marginLeft:'-30px'}}>
            Bill
          </div>        </div>

      </div>
    </footer>
  </>
}