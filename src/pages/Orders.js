import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import axios from 'axios';
import { Grid, Card, CardContent } from '@mui/material';
import './Style.css'
import Footer from '../common-components/footer/Footer';



const Orders = () => {

    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orders, setorders] = useState([])
    const handleOrderClick = (order) => {
        setSelectedOrder(order);
    };

    function fetchData() {
        axios.get('http://localhost:4000/order/allOrders')
            .then(response => {
                // Handle successful response
                setorders(response.data?.filter(order => order.paymentStatus === 'pending'));
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (<>
        <Grid container spacing={2} >
            <Card style={{ width: '100%' }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Orders
                    </Typography>
                    {orders.map((order, index) => (
                        // Abhimanyu fix padding so that we dont have to do it inline
                        <div style={{padding: '10px'}} classname='orders__list'>
                            <Typography color="textSecondary">
                                Order {index + 1}
                            </Typography>
                            {order.orderItems?.map((item) => (
                                <Typography variant="body2" component="p">
                                    {item.itemName}
                                </Typography>
                            ))}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </Grid>
        <Footer current='orders'/>
        </>

)
};

export default Orders;
