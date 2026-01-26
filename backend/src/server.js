import express from 'express'
import notesRoutes from './routes/noteRoutes.js'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000



app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
}))

app.use((req, res, next)=>{
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
    next();
})


app.use('/api/notes', notesRoutes)


connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log('Server listening on port:', PORT)
    })
})