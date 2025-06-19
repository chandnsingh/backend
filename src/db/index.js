import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const dbConnection = async () => {
  try {
    const mongooseConnection = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
    );
    console.log(
      `MongoDB connect !! , Host ${mongooseConnection.connection.host}`,
    );
  } catch (error) {
    console.log("DB Error:", error);
    process.exit(1);
  }
};

export default dbConnection;
