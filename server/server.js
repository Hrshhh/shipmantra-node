import express from "express";
import router from './routes/route';
import cors from "Cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/shipmantra_node_`).then(() => {
    console.log("Database connected")
}).catch((err) => {
    console.log("Error in Connecting Database");
})

app.use('/api', router);

app.listen(8000, () => console.log('Server is running on port 8000'));