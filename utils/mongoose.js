import { connect, set } from "mongoose";

set("strictQuery", false);

export const connectToDB = () => {
  connect(process.env.MONGO)
    .then(console.log("database conected"))
    .catch((err) => console.log(err));
};
