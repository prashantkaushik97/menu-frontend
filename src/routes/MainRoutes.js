import { lazy } from 'react';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Payment from '../pages/Payment';


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path:'',
    element: <Home />,
    children: [
       {
        index: true,
        element:<Home/>
       },
        {
            path: '/menu',
            element: <Menu />
        },
       
        {
            path: '/payment',
            element: <Payment />
        },
       
        {
            path: '/cart',
            element: <Cart />
        }
       
    ]
};

export default MainRoutes;
