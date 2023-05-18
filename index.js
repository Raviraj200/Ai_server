import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));
// Api server**************************************************************

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes)

app.get('/',async (req, res) =>{
    res.send("hello")
}) 



// server********************************************************************

const startServer = async () => {

    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(process.env.POST_URL,() => console.log(`sevver has started on port http://localhost:${process.env.POST_URL}`));
    }catch(error){
        console.log(error);
    }
}
startServer()
