import express from "express";
import bodyParser from "body-parser";
//routes import
import vehicleRoute from "./routes/vehicle.route.js";
const app = express();

app.use(bodyParser.json());
//routes declaration
app.use("/api/vehicle", vehicleRoute);
export default app;
