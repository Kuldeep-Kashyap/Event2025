import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

const EventSchedule = () => {
    const events = [
        {
            day: 'Day 1',
            title: 'Keynote Speech by Shekhar Sahai',
            timing: '10:00 AM - 12:00 PM',
            duration: '2 hours',
            venue: 'Main Auditorium',
        },
        {
            day: 'Day 2',
            title: 'Panel Discussion on GenAI',
            timing: '1:00 PM - 3:00 PM',
            duration: '2 hours',
            venue: 'Conference Hall A',
        },
    ];

    return (
        <div id='schedule'>
            <Box
                sx={{
                    padding: 4,
                    marginRight: 5,
                    marginLeft: 5
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#0B3B78' }}>
                    Event Schedule
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Day</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Timing</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Duration</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Venue</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {events.map((event, index) => (
                                <TableRow key={index}>
                                    <TableCell>{event.day}</TableCell>
                                    <TableCell>{event.title}</TableCell>
                                    <TableCell>{event.timing}</TableCell>
                                    <TableCell>{event.duration}</TableCell>
                                    <TableCell>{event.venue}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
};

export default EventSchedule;
