import { createConnection } from "typeorm";

createConnection().then((connection) => {
  if (connection.isConnected) {
    console.log("\nConnection established successfully ✅\n");
  } else {
    console.log("\nConnection failed ❌\n");
  }
});
