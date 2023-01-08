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

const ItemCard = () =>{
    const [itemCount, setItemCount] = React.useState(1);
    return (
    
        <div className="menu__item_wrapper">
            <div>
                <h3>Paneer Biryani</h3>
                <p>
                    A spiced mix of Paneer and rice, traditionally cooked over an open fire in a leather pot
                </p>
                <Badge color="secondary" badgeContent={itemCount}>
                </Badge>
                <ButtonGroup>
                    <Button
                        onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}
                    >
                        <RemoveIcon fontSize="small" />
    
                    </Button>
                    <Input
                        className='input-quanity'
                        value={itemCount}
                    />
                    <Button
                        onClick={() => {
                            setItemCount(itemCount + 1);
                        }}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
    
                </ButtonGroup>
            </div>
            <img src='https://thebellyrulesthemind.net/wp-content/uploads/2020/02/instant-pot-paneer-biryani-720x540.png' />
        </div>
        // </div>
    )
} 

export default ItemCard;