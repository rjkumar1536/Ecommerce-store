import  express from 'express';
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./router/productRoutes.js";
import {NotFound, ErrorHandler} from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();


app.use('/api/products', productRoutes);

app.use(NotFound);

app.use(ErrorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("listenning to port 5000"));