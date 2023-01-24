import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.get('/books', (req, res) => {
    res.json({status: 'Success! Get paid by your work!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
