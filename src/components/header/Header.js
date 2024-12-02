import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/Nexus Logo.png';
import gwec from '../../assets/images/GWECCC Logo.jpeg';
import { useTheme, useMediaQuery } from '@mui/material';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
                        <a
                            href={`#${text.toLowerCase()}`}
                            style={{
                                textDecoration: 'none',
                                color: '#0B3B78',
                                fontWeight: 'bold',
                            }}
                        >
                            <ListItemText primary={text} />
                        </a>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', height: 80, display: 'flex', justifyContent: 'center' }}>
            <Toolbar>
                <Box component="img" src={logo} alt="Nexus Logo" sx={{ height: { xs: 30, sm: 45 }, marginRight: 0.5 }} />
                <Box component="img" src={gwec} alt="GWECCC Logo" sx={{ height: { xs: 30, sm: 45 }, marginRight: 0.5 }} />
                <Box sx={{ flexGrow: 2 }} />
                {isMobile ? (
                    <>
                        <IconButton edge="end" color="#0000" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            {drawerContent}
                        </Drawer>
                    </>
                ) : (
                    <Tabs>
                        {['Home', 'About', 'Schedule', 'Register'].map((text) => (
                            <Tab
                                key={text}
                                label={
                                    <a
                                        href={`#${text.toLowerCase()}`}
                                        style={{
                                            textDecoration: 'none',
                                            color: '#525EA4',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {text}
                                    </a>
                                }
                            />
                        ))}
                    </Tabs>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
