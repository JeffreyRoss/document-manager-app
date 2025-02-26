const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mocked data
const user = { username: 'john_doe', email: 'john@example.com' };
const documents = [
    { id: 1, title: 'Doc 1', content: 'This is document 1.', sources: ['Source A', 'Source B'] },
    { id: 2, title: 'Doc 2', content: 'This is document 2.', sources: ['Source C'] },
];

app.get('/api/user', (req, res) => {
    res.json(user);
});

app.get('/api/documents', (req, res) => {
    res.json(documents);
});

app.get('/api/documents/:id', (req, res) => {
    const doc = documents.find((d) => d.id === parseInt(req.params.id));
    if (doc) {
        res.json(doc);
    } else {
        res.status(404).json({ error: 'Document not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});