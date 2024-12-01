import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../static/images/Nexus Logo.png';
import gwec from '../static/images/GWECCC Logo.jpeg';
import { useTheme, useMediaQuery } from '@mui/material';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Breakpoint for medium screens and below
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                {['Home', 'About', 'Schedule', 'Register'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} sx={{ fontWeight: 'bold', color: '#0B3B78' }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', height: 80, display: 'flex', justifyContent: 'center', }}>
            <Toolbar>
                {/* Logo */}
                <Box
                    component="img"
                    src={logo}
                    alt="GWECCC 2025 Logo"
                    sx={{ height: { xs: 30, sm: 45 }, marginRight: 0.5 }}
                />
                <Box
                    component="img"
                    src={gwec}
                    alt="GWECCC 2025 Logo"
                    sx={{ height: { xs: 30, sm: 45 }, marginRight: 0.5 }}
                />
                {/* Spacer to push content to the right */}
                <Box sx={{ flexGrow: 2 }} />
                {/* Tabs or Menu based on screen size */}
                {isMobile ? (
                    <>
                        {/* Hamburger Menu for Mobile */}
                        <IconButton edge="end" color="#0000" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            {drawerContent}
                        </Drawer>
                    </>
                ) : (
                    <Tabs>
                        <Tab label="Home" sx={{ fontWeight: 'bold', color: '#525EA4' }} />
                        <Tab label="About" sx={{ fontWeight: 'bold' }} />
                        <Tab label="Schedule" sx={{ fontWeight: 'bold' }} />
                        <Tab label="Register" sx={{ fontWeight: 'bold' }} />
                    </Tabs>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
