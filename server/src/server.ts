import express from 'express'
import cors from 'cors'
import { routes } from './routes'


const app = express()

const corsOptions = {
    origin: "https://nlw-return-impulse-enryj8gwt-ticolls-profile.vercel.app",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP server running!")
})

