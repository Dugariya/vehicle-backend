import { Router } from "express";
const route = Router();
route.post("/", (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json({ message: "I got your vehicles ?" });
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
