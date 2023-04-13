import express from "express";
import bodyParser from "body-parser";

import hotelsRoutes from "./routes/hotels.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/hotels", hotelsRoutes);

app.get("/", (req, res) => {
  res.send("This is homepage, go to /hotels to see the hotels.");});

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`));
