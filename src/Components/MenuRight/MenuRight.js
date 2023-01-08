import { Box, Button, Card, CardContent, CardMedia, Grid, Input, Typography, } from '@material-ui/core'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

import Item from '../../common-components/coursel/Item'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import RemoveIcon from '@mui/icons-material/Remove';
import './Style.css'
function MenuRight() {
  const [itemCount, setItemCount] = React.useState(1);

  return (
    <div>
      <div className='submenu__wrapper'>
        <div className='menu__card'><div class="menu__card_image"> <img src="https://www.thespruceeats.com/thmb/jSsI2w8FkyTDrJhQkYJ5d0HS2uE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/green-salad-recipe-ensalada-verde-3083556-hero-01-256ac7f4162b45e5a1f82a5234a0708c.jpg" /> </div>
          <div class="menu__card_title title-white">
            <p>Card Title</p>
          </div>
        </div>
        <div className='menu__card'><div class="menu__card_image"> <img src="https://www.thespruceeats.com/thmb/jSsI2w8FkyTDrJhQkYJ5d0HS2uE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/green-salad-recipe-ensalada-verde-3083556-hero-01-256ac7f4162b45e5a1f82a5234a0708c.jpg" /> </div>
          <div class="menu__card_title title-white">
            <p>Card Title</p>
          </div>
        </div>
      </div>
      <div className='menu__main'>
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

            </ButtonGroup>          </div>
          <img src='https://thebellyrulesthemind.net/wp-content/uploads/2020/02/instant-pot-paneer-biryani-720x540.png' />
        </div>
        <div className="menu__item_wrapper">
          <div>
            <h3>Paneer Biryani</h3>
            <p>
              A spiced mix of Paneer and rice, traditionally cooked over an open fire in a leather pot
            </p>
            <Button>uk</Button>
          </div>
          <img src='https://thebellyrulesthemind.net/wp-content/uploads/2020/02/instant-pot-paneer-biryani-720x540.png' />
        </div>
        <div className="menu__item_wrapper">
          <div>
            <h3>Paneer Biryani</h3>
            <p>
              A spiced mix of Paneer and rice, traditionally cooked over an open fire in a leather pot
            </p>
            <Button>uk</Button>
          </div>
          <img src='https://thebellyrulesthemind.net/wp-content/uploads/2020/02/instant-pot-paneer-biryani-720x540.png' />
        </div>
        <div className="menu__item_wrapper">
          <div>
            <h3>Paneer Biryani</h3>
            <p>
              A spiced mix of Paneer and rice, traditionally cooked over an open fire in a leather pot
            </p>
            <div>

            </div>
          </div>
          <img src='https://thebellyrulesthemind.net/wp-content/uploads/2020/02/instant-pot-paneer-biryani-720x540.png' />
        </div>
      </div>
    </div>
  )
}

export default MenuRight