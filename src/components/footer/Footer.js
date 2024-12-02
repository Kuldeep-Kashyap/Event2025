import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#0B3B78',
                color: '#fff',
                padding: { xs: 4, md: 6 },
                marginTop: 4,
            }}
        >
            <Grid container spacing={4} justifyContent="space-between">
                {/* About Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        About GWECCC
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                        GWECCC 2025 brings together the best minds in technology, providing a platform to learn, network, and explore innovations. Join us in New Delhi from March 15-17, 2025, for an unforgettable experience!
                    </Typography>
                </Grid>

                {/* Navigation Links */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        Quick Links
                    </Typography>
                    <Box>
                        <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: 1 }}>
                            Home
                        </Link>
                        <Link href="#about" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: 1 }}>
                            About
                        </Link>
                        <Link href="#schedule" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: 1 }}>
                            Schedule
                        </Link>
                        <Link href="#register" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: 1 }}>
                            Register
                        </Link>
                    </Box>
                </Grid>

                {/* Contact & Social Media */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 1 }}>
                        International Convention Centre, New Delhi
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 1 }}>
                        Email: info@gweccc2025.com
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 2 }}>
                        Phone: +91 12345 67890
                    </Typography>
                    <Box>
                        <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#fff' }}>
                            <FacebookIcon />
                        </IconButton>

                        <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#fff' }}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/kuldeep-kashyap-6b2b54219" target="_blank" sx={{ color: '#fff' }}>
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Bottom Section */}
            <Box
                sx={{
                    borderTop: '1px solid #fff',
                    marginTop: 4,
                    paddingTop: 2,
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2">
                    © {new Date().getFullYear()} GWECCC. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
