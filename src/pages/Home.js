import React from 'react'
import Navbar from '../common-components/navbar/Navbar'
import Offers from '../common-components/coursel/Offers'
import Category from '../common-components/Category'

function Home() {
  return (
    <div>
        <div style={{paddingTop:"50px"}}>
          <h3 style={{paddingLeft:"80px"}}>Promos</h3>
        <Offers/>
        </div>
        <div style={{paddingTop:"50px"}}>
          <h3 style={{paddingLeft:"80px"}}>What would you like to order?</h3>
        <Category/>
        </div>
        <div style={{paddingTop:"50px"}}>
          <h3 style={{paddingLeft:"80px"}}>Offers</h3>
        <Offers/>
        </div>
       
    </div>
  )
}

export default Home