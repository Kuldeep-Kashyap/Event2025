import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => (
    <Box
        sx={{
            padding: 4,
            marginLeft: 4,
            marginRight: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for larger screens
            alignItems: { xs: 'center', md: 'flex-start' }, // Center items for small screens
            gap: 4, // Space between the text and the form
        }}
    >
        {/* Left Section: Typography */}
        <Box sx={{ flex: 1 }}>
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
            <Typography sx={{ marginTop: 2, textAlign: 'justify' }}>
                Overall, GWECCC 2025 promises to be an inspiring and informative event, offering a unique blend of learning, networking, and innovation. Whether you are a seasoned professional or a newcomer to the field, this conference will provide valuable insights and opportunities to advance your knowledge and career in web and emerging computing technologies.
            </Typography>
        </Box>
    </Box>
);

export default About;
