import { http } from 'msw';

export const handlers = [
    http.get('http://localhost:5000/api/user', (req, res, ctx) => {
        return res(
            ctx.json({
                username: 'john_doe',
                email: 'john@example.com',
            })
        );
    }),
    http.get('http://localhost:5000/api/documents', (req, res, ctx) => {
        return res(
            ctx.json([
                { id: 1, title: 'Doc 1', content: 'This is document 1.', sources: ['Source A', 'Source B'] },
                { id: 2, title: 'Doc 2', content: 'This is document 2.', sources: ['Source C'] },
            ])
        );
    }),
    http.get('http://localhost:5000/api/documents/:id', (req, res, ctx) => {
        const { id } = req.params;
        const documents = [
            { id: 1, title: 'Doc 1', content: 'This is document 1.', sources: ['Source A', 'Source B'] },
            { id: 2, title: 'Doc 2', content: 'This is document 2.', sources: ['Source C'] },
        ];
        const doc = documents.find((d) => d.id === parseInt(id));
        return doc
            ? res(ctx.json(doc))
            : res(ctx.status(404), ctx.json({ error: 'Document not found' }));
    }),
];