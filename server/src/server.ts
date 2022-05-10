import express from 'express'
import cors from 'cors'
import { routes } from './routes'


const app = express()

const corsOptions = {
    origin: 'https://nlw-return-impulse-production-4d6f.up.railway.app/feedbacks',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP server running!")
})

