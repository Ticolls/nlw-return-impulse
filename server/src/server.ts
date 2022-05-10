import express from 'express'
import cors from 'cors'
import { routes } from './routes'


const app = express()

app.options('/login', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
});
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP server running!")
})

