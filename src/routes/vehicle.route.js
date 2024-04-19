import { Router } from "express";
import readXMLFile from "../utils/index.js";
import Vehicle from "../models/vehicle.model.js";
const route = Router();
route.post("/", async (req, res) => {
  try {
    const { MVRegN, LicN, VinOrChassis } = req.body;
    console.log(req.body, req.params, req.query);

    const _vehicle = await Vehicle.find({
      $or: [
        { "Vehicle.VehicleDet.MVRegN": MVRegN },
        { "Vehicle.VehicleDet.LicN": LicN },
        { "Vehicle.VehicleDet.VinOrChassis": VinOrChassis },
      ],
    });
    if (_vehicle.length) {
      return res.status(201).json({ message: "Success", data: _vehicle });
    }
    // const data = await readXMLFile();

    readXMLFile()
      .then((result) => {
        // console.log("result", result.X1001Resp[0].Vehicle); // Use the result here
        // result.X1001Resp;
        let data = result.X1001Resp.filter((data) => {
          if (
            data.Vehicle.VehicleDet.MVRegN == MVRegN ||
            data.Vehicle.VehicleDet.LicN == LicN ||
            data.Vehicle.VehicleDet.VinOrChassis == VinOrChassis
          ) {
            return data;
          }
        });
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // console.log(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
route.put("/update", async (req, res) => {
  try {
    console.log(req.params, req.query, req.body);
  } catch (error) {
    console.log(error);
  }
});
export default route;
