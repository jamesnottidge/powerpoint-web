import app from "./server";
import { connection } from "./database/db";
import config from "../src/config";


const startServer = async () => {
  try {
    await connection();
    
    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();