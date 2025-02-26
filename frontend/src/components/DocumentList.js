import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

function DocumentList() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        axios.get('/api/documents').then((response) => setDocuments(response.data));
    }, []);

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Documents
            </Typography>
            <List>
                {documents.map((doc) => (
                    <ListItem key={doc.id} divider>
                        <ListItemText primary={doc.title} />
                        <Box>
                            <Link to={`/document/${doc.id}`} style={{ marginRight: 10 }}>
                                Details
                            </Link>
                            <Link to={`/panel/${doc.id}`}>Panel View</Link>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default DocumentList;