import { connect, set } from "mongoose";

set("strictQuery", false);

let isConnected = false;

export const connectToDB = () => {
  if (isConnected) return;
  isConnected = true;
  connect(process.env.MONGO)
    .then(console.log("database conected"))
    .catch((err) => console.log(err));
};
