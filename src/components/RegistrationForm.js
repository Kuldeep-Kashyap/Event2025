import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import './RegistrationForm.css'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        organisation: '',
        delegates: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Replace with submission logic
    };

    return (
        <Box
            sx={{
                padding: 4,
                marginLeft: 4,
                marginRight: 4,
                gap: 4, // Space between the text and the form
            }}
        >
            <Box
                sx={{
                    padding: 4,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 2,
                    boxShadow: 3,
                    maxWidth: '400px',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 'bold', marginBottom: 3, textAlign: 'center', color: '#0B3B78' }}
                >
                    Register Now
                </Typography>
                <form onSubmit={handleSubmit}>
                    {['name', 'email', 'contact', 'organisation', 'delegates'].map((field) => (
                        <TextField
                            key={field}
                            name={field}
                            label={field.charAt(0).toUpperCase() + field.slice(1)}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                sx: { height: 40 }, // Adjust the height of the input field
                            }}
                        />
                    ))}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ backgroundColor: '#0B3B78', marginTop: 2 }}
                    >
                        <Typography>Register</Typography>
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default RegistrationForm;
