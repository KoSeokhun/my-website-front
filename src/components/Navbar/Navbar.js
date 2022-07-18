import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Navbar(props) {
    // auth state.
    const [auth, setAuth] = useState(false);
    
    // drawer width.
    const drawerWidth = 240;
    
    // Navbar categories.
    const navItems = auth ? ['Home', 'Example1', 'Example2', 'About', 'Contact', 'Profile', 'LogOut',]
        : ['Home', 'Example1', 'Example2', 'About', 'Contact', 'SignUp', 'LogIn',];

    // import useNavigate hook.
    const navigate = useNavigate();

    // navigate link.
    const handleNavigation = (item) => {
        if (item === "Home") {
            navigate("/");
        } else {
            navigate(item);
        }
    }
   
    // mobile drawer state.
    const [mobileOpen, setMobileOpen] = useState(false);
    
    // mobile drawer On/Off.
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    
    // mobile drawer.
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }} // margin-top : 2; margin-bottom : 2;
            >
            IYABA's Website
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => { handleNavigation(item) }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    )
    
    // PC bar.
    const menu = (
        <Box sx={{ display: 'contents' }}>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
            IYABA's Website
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }} onClick={() => { handleNavigation(item) }}>
                    { item }
                    </Button>
                ))}
            </Box>
        </Box>
    )

    // check whether the script is being run in a web-page inside a web-brower or not.
    const { window } = props;

    // set the content of Drawer inside the <body></body>.
    const container = window !== undefined ? () => window().document.body : undefined;
    
    return (
        <Box sx={{ width: '100%' }}>
            <AppBar position="sticky" component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }} // margin-right : 2; @media (max-width: 599px) { display: none }
                    >
                        <MenuIcon />
                    </IconButton>
                    { menu }
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' }, // @media (max-width: 599px) { display: block }, @media (min-width: 600px) { display: none }
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}, // paper component of Drawer
                    }}
                >
                    { drawer }
                </Drawer>
            </Box>
        </Box>
  )
}

export default Navbar;