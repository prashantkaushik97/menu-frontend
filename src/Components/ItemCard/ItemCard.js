import React, { useState } from 'react'
import "./Style.css"
import { Box, Button, Card, CardContent, CardMedia, Grid, Input, Typography, } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';

import Item from '../../common-components/coursel/Item'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import RemoveIcon from '@mui/icons-material/Remove';
import './Style.css'
import Subnav from '../../common-components/sub-navigator/Subnav';
import { connect, useDispatch, useSelector } from 'react-redux';
import OrderOptionsModal from '../../common-components/modals/OrderOptionsModal';

const ItemCard = ({ dish }) => {
    const [itemCount, setItemCount] = React.useState(1);
    const [optionsOpen, setoptionsOpen] = useState(false)
    const [currentDish, setcurrentDish] = useState()
    const [inCart, setinCart] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)

    return (
        <>
        {console.log(dish)}
        <OrderOptionsModal inCart={inCart} currentDish={currentDish} optionsOpen={optionsOpen} setinCart={setinCart} setoptionsOpen={setoptionsOpen}/>
            <div className="menu__item_wrapper">
                <div>
                    <div style={{ display: 'flex' }}>
                        <legend style={{ padding: '8px' }}>{dish.itemName}</legend>
                        <h3 style={{ padding: '10px', fontStyle: 'italic' }}>{dish.price}</h3>
                        {dish.vegan && <img style={{ maxWidth: '40px', maxHeight: '40px' }} src='https://www.pngitem.com/pimgs/m/160-1609305_vegan-logo-png-vegan-or-vegetarian-symbol-transparent.png' />
                        }

                    </div>
                    <p style={{ maxWidth: '250px' }}>
                        {dish.description}
                    </p>
                    <div className='card__footer'>
                        <ButtonGroup >
                            {items.find(item => item._id === dish._id)?.quantity >= 1 ?
                                <>
                                    <Button disabled={items.find(item => item._id === dish._id)?.quantity < 1}
                                        onClick={() => {
                                            if (items.find(item => item._id === dish._id)?.quantity == 1) {
                                                dispatch({ type: "REMOVE_ITEM", payload: dish._id })
                                            }
                                            else {
                                                dispatch({ type: "DECREMENT_ITEM_QUANTITY", payload: { _id: dish._id } })
                                            }
                                        }}
                                    >
                                        <RemoveIcon fontSize="small" />
                                        
                                    </Button>
                                    <label
                                        className='input-quanity'
                                    >
                                        {items.find(item => item._id === dish._id)?.quantity}
                                    </label>
                                    
                                    <Button
                                    onClick={() => {
                                        if(dish?.options.length>0){
                                            setcurrentDish(dish)
                                            setinCart(true)
                                            setoptionsOpen(true)
                                        }
                                        else{
                                            dispatch({ type: "INCREMENT_ITEM_QUANTITY", payload: { _id: dish._id } })
                                        }
                                    }}
                                        
                                    >
                                        <AddIcon fontSize="small" />
                                    </Button>
                                </> :
                                <Button
                                    onClick={() => {
                                        if(dish?.options.length>0){
                                            setcurrentDish(dish)
                                            setoptionsOpen(true)
                                        }
                                        else{
                                        dispatch({ type: "ADD_ITEM", payload: { _id: dish._id, quantity: 1 } })
                                        }
                                    }}
                                >
                                    Add

                                </Button>
                            }
                        </ButtonGroup>
                        <Button onClick={()=>{setoptionsOpen(true)}}>HERE</Button>
                    </div>
                </div>
                <div className='card__right'>
                    <img src='https://thebellyrulesthemind.net/wp-content/uploads/2020/02/instant-pot-paneer-biryani-720x540.png' />
                    <div className='card__nutrition'>
                        {dish.nutrition.calories} kcal{", "}
                        {dish.nutrition.protein}g protein

                    </div>
                </div>

            </div>
        </>
    )
}

const mapStateToProps = state => ({
    items: state.items
});
export default connect(mapStateToProps)(ItemCard);
