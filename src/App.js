import logo from './logo.svg';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './pages/Menu';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Navbar from './common-components/navbar/Navbar';
import OrderSlider from './Components/OrderSlider/OrderSlider';
import Footer from './common-components/footer/Footer';
import Orders from './pages/Orders';

// import Routes from './routes';

function App() {
  return (
    <>
    <Navbar/>

    <Router>
        <Routes>
          
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/orders" element={<Orders/>}/>
         
        </Routes>
    </Router>

    {/* // <Router>
    //     <Routes/>

    // </Router> */}
</>
  );
}

export default App;
