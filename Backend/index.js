import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./db/connection.js"; 
import router from './Routes/notes.router.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors()); 


connectDB()
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.error('Database connection failed:', error.message);
        process.exit(1); 
    });

app.use(express.json());



app.use('/notes', router);


app.use('/', (req, res) => {
    res.json({
        message: 'API is working',
    });
});


app.listen(4000, () => {
    console.log('Server is running on port 3000');
});