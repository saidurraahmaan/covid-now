import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import countryRoutes from './routes/countryRoutes.js'

import {notFound, errorHandler} from "./middleware/errorMiddleware.js";

dotenv.config();
await connectDB();

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.use('/api/states',countryRoutes);

//errorFindingMiddleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))