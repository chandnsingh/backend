import dbConnection from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});

dbConnection()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is listining on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`DB connection err `, err);
  });
