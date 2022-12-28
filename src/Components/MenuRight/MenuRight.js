import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Item from '../../common-components/coursel/Item'
import './Style.css'
function MenuRight() {
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
            <h3>Title</h3>
            <p>
              description
            </p>
            <Button>uk</Button>
          </div>
          <div>
            hi
          </div>

        </div>
        <div className="menu__item_wrapper">
          <div>
            <h3>Title</h3>
            <p>
              description
            </p>
            <Button>uk</Button>
          </div>
          <div>
            hi
          </div>

        </div>
      </div>
    </div>
  )
}

export default MenuRight