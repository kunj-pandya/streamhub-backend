# 📒 Notes: Database Connection Using IIFE in Node.js + Mongoose

## ⚡ What is an `IIFE`?

An `IIFE` (Immediately Invoked Function Expression) is a JavaScript function that runs immediately after it is defined.

**Example Pattern:**

```javascript
(async () => {
  // code executed immediately
})();
```

The semicolon (;) at the beginning prevents issues if the file above ends without semicolon.

## 🚀 Why Use an IIFE for DB Connection?

Code:

```javascript
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    // app listener (if error from express app)
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is listing on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();
```

✔ **Advantages** of IIFE

- Runs immediately — no extra function call required.
- Allows use of async/await at the top level.
- Keeps DB connection + server startup logic together.
- Helpful for quick prototypes or learning.

## ⚠️ Why This Is NOT the Most Professional Approach

Although IIFE works, production-level backend architecture prefers separation of concerns.

❌ Problems with this IIFE approach:

- Mixes database logic, server logic, and error handling in one place.
- Harder to maintain as your project grows.
- Cannot reuse the DB connection logic elsewhere.
- Testing becomes more difficult.
- Large files break clean architecture principles.

## ✅ Professional Recommended Approach (Separate DB File)

Create a dedicated file for DB connection

- 📁 `src/db/index.js`

```javascript
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    // console.log("Connection Instance : ",connectionInstance);

    console.log(
      `\n MongoDB Connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Error: ", error);

    //Failure — program ended because of an error
    process.exit(1);
  }
};

export default connectDB;
```

- Use it in `server.js` or `app.js`:

```javascript
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
```

✔ **Benefits**:

- Clean code, easy to understand.
- DB logic reusable and testable.
- Follows professional Node.js folder structure.
- Easier scaling when adding features.

