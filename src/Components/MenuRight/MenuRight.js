import { Box, Button, Card, CardContent, CardMedia, Grid, Input, Typography, } from '@material-ui/core'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

import Item from '../../common-components/coursel/Item'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import RemoveIcon from '@mui/icons-material/Remove';
import './Style.css'
import Subnav from '../../common-components/sub-navigator/Subnav';
import { connect, useDispatch } from 'react-redux';

function MenuRight() {
  const [itemCount, setItemCount] = React.useState(1);
  const [order, setOrder] = React.useState([]);  
  const dispatch=useDispatch()
  return (
    <div>
      <Subnav />

      <div className='menu__main'>
        <div className="menu__item_wrapper">
          <div>
            <h3>Paneer Biryani</h3>
            <p>
              A spiced mix of Paneer and rice, traditionally cooked over an open fire in a leather pot
              here
            </p>
            <Badge color="secondary" badgeContent={itemCount}>
            </Badge>
            <ButtonGroup>
              here
            <Button
                onClick={() => {
                  // setItemCount(Math.max(itemCount - 1, 0));
                  dispatch({type:"ADD_ITEM", payload:{itemId:"Paneer Tikka", quantity:1}})
                }}
              >
                <RemoveIcon fontSize="small" />

              </Button>
              <Button
                onClick={() => {
                  // setItemCount(Math.max(itemCount - 1, 0));
                  dispatch({type:"INCREMENT_ITEM_QUANTITY", payload:"Paneer Biryani"})
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
const mapStateToProps = state => ({
  items: state.items
});
export default connect(mapStateToProps)(MenuRight);
