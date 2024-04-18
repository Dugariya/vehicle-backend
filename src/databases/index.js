import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    const connectionInstace = await mongoose.connect(
      "mongodb://localhost/Vehicle",
      {}
    );
    console.log(
      `\n mongodb connect :: DB HOST ${connectionInstace.connection.host}`
    );
  } catch (error) {
    console.log("\n Mongo db connection failed :: ", error);
    process.exit(1);
  }
};
export default connectDatabase;
