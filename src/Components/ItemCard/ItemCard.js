import React from 'react'
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

const ItemCard = ({ dish }) => {
    const [itemCount, setItemCount] = React.useState(1);
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    return (

        <div className="menu__item_wrapper">
            <div>
                <h3>{dish.itemId}</h3>
                <p>
                    {dish.itemDescription}
                </p>
                <Badge color="secondary" badgeContent={itemCount}>
                </Badge>
                <ButtonGroup>
                    {items.find(item => item.itemId === dish.itemId)?.quantity >= 1 ?
                        <>
                            <Button disabled={items.find(item => item.itemId === dish.itemId)?.quantity < 1}
                                onClick={() => {
                                    if (items.find(item => item.itemId === dish.itemId)?.quantity == 1) {
                                        dispatch({ type: "REMOVE_ITEM", payload: dish.itemId })
                                    }
                                    else {
                                        dispatch({ type: "DECREMENT_ITEM_QUANTITY", payload: { itemId: dish.itemId } })
                                    }
                                }}
                            >
                                <RemoveIcon fontSize="small" />

                            </Button>
                            <label
                                className='input-quanity'
                            >
                                {items.find(item => item.itemId === dish.itemId)?.quantity}
                            </label>
                            <Button
                                onClick={() => {
                                    dispatch({ type: "INCREMENT_ITEM_QUANTITY", payload: { itemId: dish.itemId } })
                                }}
                            >
                                <AddIcon fontSize="small" />
                            </Button>
                        </> :
                        <Button
                            onClick={() => {

                                dispatch({ type: "ADD_ITEM", payload: { itemId: dish.itemId, quantity: 1 } })
                            }}
                        >
                            Add

                        </Button>
                    }
                </ButtonGroup>
            </div>
            <img src='https://thebellyrulesthemind.net/wp-content/uploads/2020/02/instant-pot-paneer-biryani-720x540.png' />
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.items
});
export default connect(mapStateToProps)(ItemCard);
