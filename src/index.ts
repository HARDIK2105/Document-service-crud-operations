import express from "express";
import { Application } from "express";
import * as dotenv from "dotenv";
import { connectToDatabase } from "./services/database.service"
import { documentRouter } from "./routes/Document.router";
dotenv.config();

const app: Application = express();
const port = 3000


connectToDatabase()

    .then(() => {
        app.use("/documents", documentRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });