import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

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
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#2B3EAA' }}>
                Register Now
            </Typography>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
                <TextField name="name" label="Name" onChange={handleChange} fullWidth margin="normal" />
                <TextField name="email" label="Email" onChange={handleChange} fullWidth margin="normal" />
                <TextField name="contact" label="Contact No." onChange={handleChange} fullWidth margin="normal" />
                <TextField name="organisation" label="Organisation" onChange={handleChange} fullWidth margin="normal" />
                <TextField name="delegates" label="No. of Delegates" onChange={handleChange} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary" sx={{ background: '#2B3EAA' }}>
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default RegistrationForm;
