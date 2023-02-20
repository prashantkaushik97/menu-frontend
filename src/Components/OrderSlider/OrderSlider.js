import { Button } from "@material-ui/core";
import ReactSwipeButton from "react-swipe-button";
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const success = () => {
  console.log("weell");
};
const placeOrder =(i)=>{
    console.log(i)

}

export default function OrderSlider() {
    const items = useSelector(state => state.items)
    const dispatch = useDispatch()
useEffect(() => {

}, [items])

  return (

    <div>
<Button onClick={(e)=>{placeOrder(items); dispatch({ type: "EMPTY_CART"})}}>Order</Button>
    </div>
    //   <div style={{ width: "200px" }}>
    //     <ReactSwipeButton on text="Add to cart" color="#f00" onSuccess={success} />
    //   </div>
  );
}
