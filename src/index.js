import dotenv from "dotenv";
import connectDB from "./db/database.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
});

connectDB()
.then(() => {

    // listens for any error emitted by the Express app.
    app.on("error", (error) => {
        console.log("error from app:", error);
        throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    });
})
.catch((error) => {
console.log("MongoDB Connection Failed!", error);
});


/* 
// IIFE approch to connect Database- Example(not MOST Professional Approach)
// Example Notes: docs/IIFEConnection.md
*/

