import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Footer from '../common-components/footer/Footer';
import './Style.css'
import Sidebar from '../common-components/sidebar/Sidebar';
import ItemCard from '../Components/ItemCard/ItemCard';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));
function Menu() {

  const dummyCategories = ['Hokusai', 'Hiroshige', 'Utamaro', 'Kuniyoshi', 'Yoshitoshi']
  const items = ['Recommended', 'Binge Packs', 'Drinks', 'Non-Alcoholic', 'Vegan', 'Desserts']
  const [selectedItem, setselectedItem] = useState(items[0])

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  const dishes=[{itemId:"Paneer Tikka", itemDescription:"A spiced mix of Paneer and rice, traditionally cooked over an open fire in a leather pot" },{itemId:"Item2", itemDescription:"A spiced mix of Paneer and rice, traditionally cooked over an open fire in a leather pot"} ]
  const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <>
      <div className='menu__title'>
        {selectedItem}
      </div>
      <div className='menu__wrapper'>
        <Sidebar selectedItem={selectedItem} setSelectedItem={setselectedItem} items={items} />
        <div>
          {/* <MenuRight /> */}
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {dishes.map((dish)=>{
            return(<Grid item  lg={6}>
              {/* <Item>xs=8</Item> */}
              <ItemCard dish={dish}/>
            </Grid>)
          })}
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
Menu.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default Menu;