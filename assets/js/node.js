const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const validUsername = 'admin';
const validPassword = '12345';

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === validUsername && password === validPassword) {
        const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
        return res.json({ token });
    }

    return res.status(401).send('Invalid username or password');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});