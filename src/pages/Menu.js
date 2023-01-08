import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Navbar from '../common-components/navbar/Navbar';
import Footer from '../common-components/footer/Footer';
import './Style.css'
import Sidebar from '../common-components/sidebar/Sidebar';
import Subnav from '../common-components/sub-navigator/Subnav';
import MenuRight from '../Components/MenuRight/MenuRight';
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
          <Grid item xs={6} md={4}>
            {/* <Item>xs=8</Item> */}
            <ItemCard />
          </Grid>
          <Grid item xs={6} md={4}>
            {/* <Item>xs=4</Item> */}
            <ItemCard />
          </Grid>
          <Grid item xs={6} md={4}>
            {/* <Item>xs=4</Item> */}
            <ItemCard />
          </Grid>
          <Grid item xs={6} md={4}>
            {/* <Item>xs=8</Item> */}
            <ItemCard />
          </Grid>
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