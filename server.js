import express from "express";
import cors from "cors";
import 'dotenv/config';
import landingRouter from './routes/landing.js';
import learnmoreRouter from './routes/learnmore.js';
import bodyParser from "body-parser";

// Global constants
const PORT = process.env.PORT || 8081;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routers
app.use('/landing', landingRouter);
app.use('/learnmore', learnmoreRouter);

// Listen the port
app.listen(PORT, () => {
    console.log(`The server is running on the port:${PORT}`);
});
