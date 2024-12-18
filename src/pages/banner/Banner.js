import React from 'react';
import { Box } from '@mui/material';
import eventGif from '../../assets/gifs/event-animation.gif'; // Replace with the path to your GIF

const Banner = () => {
    return (
        <div id='banner'>
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '200px', sm: '400px', md: '600px' }, // Adjust height for different screen sizes
                    maxHeight: '600px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    textAlign: 'center',
                    color: '#fff',
                }}
            >
                {/* GIF Background */}
                <Box
                    component="img"
                    src={eventGif}
                    alt="Event Animation"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />
            </Box>
        </div>
    );
};

export default Banner;
