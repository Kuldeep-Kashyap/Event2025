import React from 'react';
import backImg from '../static/images/backImg.png';
import { Box, Typography } from '@mui/material';
import RegistrationForm from './RegistrationForm';

const About = () => (
    <Box
        sx={{
            backgroundImage: `url(${backImg})`,
            backgroundRepeat: 'no-repeat',
        }}
    >
        <Box
            sx={{
                padding: 4,
                marginLeft: 4,
                marginRight: 2,
                display: 'flex',
                // Centers the form horizontally
                alignItems: 'center',    // Centers the form vertically if required
                flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for larger screens
                // alignItems: 'flex-start', // Align items to the top for larger screens
                gap: 4, // Space between the text and the form
            }}
        >
            {/* Left Section: Typography */}
            <Box
                sx={{
                    flex: 1,
                    maxWidth: { xs: '80%', md: '50%', lg: '60%' }, // Adjust width for responsiveness
                    order: { xs: 1, md: 0 }, // Keep Typography on top for small screens
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: '#0B3B78',
                        fontWeight: 'bolder',
                        fontSize: '2rem',
                        marginTop: 2,
                    }}
                >
                    GWECCC 2025!
                </Typography>
                <Typography sx={{ marginTop: 2, textAlign: 'justify' }}>
                    Welcome to GWECCC 2025! Join us at the International Convention Centre in New Delhi from March 15-17, 2025, for the Global Web and Emerging Computing Conference. This premier tech event brings together industry leaders, innovators, and enthusiasts from around the world to explore the latest advancements in technology and computing. Attendees will have the opportunity to hear from renowned experts through keynote speeches, engage in insightful panel discussions on topics such as AI, blockchain, and quantum computing, and participate in hands-on workshops to enhance their skills in web development, mobile app creation, cybersecurity, and more. The event also offers numerous networking opportunities to connect with professionals, entrepreneurs, and researchers, as well as an exhibition showcasing innovative products and services from leading tech companies and startups. Whether you're a seasoned professional or a curious newcomer, GWECCC 2025 promises to be an inspiring and educational experience. We look forward to seeing you there!
                </Typography>
            </Box>

            {/* Right Section: Registration Form */}
            <Box
                sx={{
                    flex: 1,
                    maxWidth: { xs: '100%', md: '50%' }, // Adjust width for responsiveness
                    order: { xs: 0, md: 1 }, // Move the RegistrationForm below for small screens
                }}
            >
                <RegistrationForm />
            </Box>
        </Box>
    </Box>
);

export default About;
