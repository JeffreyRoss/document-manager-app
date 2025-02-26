import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Typography } from '@mui/material';

function UserProfile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/api/user').then((response) => setUser(response.data));
    }, []);

    if (!user) return <Typography>Loading...</Typography>;

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        User Profile
                    </Typography>
                    <Typography variant="body1">Username: {user.username}</Typography>
                    <Typography variant="body1">Email: {user.email}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default UserProfile;