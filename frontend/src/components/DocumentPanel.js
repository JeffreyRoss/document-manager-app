import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Grid, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

function DocumentPanel() {
    const { id } = useParams();
    const [document, setDocument] = useState(null);

    useEffect(() => {
        axios.get(`/api/documents/${id}`).then((response) => setDocument(response.data));
    }, [id]);

    if (!document) return <Typography>Loading...</Typography>;

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            {document.title}
                        </Typography>
                        <Typography variant="body1">{document.content}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Cited Sources
                        </Typography>
                        <List>
                            {document.sources.map((source, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={source} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DocumentPanel;