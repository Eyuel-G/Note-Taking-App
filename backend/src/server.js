import express from 'express'
import notesRoutes from './routes/noteRoutes.js'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

const allowedOrigins = [
  "http://localhost:5174",
  "https://notes-frontend.onrender.com"
];


app.use(express.json())
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));


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