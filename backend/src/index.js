import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json())
app.use(cors());
const port = 7000

app.get("/", async (req, res) => {
    res.send({
        message: "hello"
    })
})
app.listen(port, () => {
    console.log("succesfull")
})