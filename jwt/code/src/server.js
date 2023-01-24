import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())

const books = [
    {
        id: 1,
        name: 'ReactJS',
        author: 'A'
    },
    {
        id: 2,
        name: 'JWT',
        author: 'B'
    },
    {
        id: 3,
        name: 'Ky nang tu hoc',
        author: 'Nguyen'
    },
    {
        id: 4,
        name: 'Beauty of practice skill',
        author: 'Nguyen'
    }
]

app.post('/login', (req, res) => {

    const data = req.body;
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
    res.json({ accessToken })
})

app.get('/books', (req, res) => {
    res.json({
        status: 'Success! Get paid by your work! Demand on JS skill!',
        data: books
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
