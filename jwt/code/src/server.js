import express from "express";

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
    }
]

app.get('/books', (req, res) => {
    res.json({
        status: 'Success! Get paid by your work! Demand on JS skill!',
        data: books
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
