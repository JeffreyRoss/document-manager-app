import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';

function DocumentEntry() {
    const { id } = useParams();
    const [document, setDocument] = useState(null);

    useEffect(() => {
        axios.get(`/api/documents/${id}`).then((response) => setDocument(response.data));
    }, [id]);

    if (!document) return <Typography>Loading...</Typography>;

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {document.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {document.content}
                    </Typography>
                    <Typography variant="h6">Sources:</Typography>
                    <List>
                        {document.sources.map((source, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={source} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
}

export default DocumentEntry;