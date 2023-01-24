import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const PORT = 5500;

app.use(express.json())

app.post('/login', (req, res) => {
    const data = req.body;
    console.log(data);
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' })
    res.json({ accessToken })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
