import express from "express";

import cors from "cors";

import ratesRouter from "./routes/router.js";

// SET UP APP
const app = express();

app.use(cors());

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/rates", ratesRouter);

app.use("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Welcome!",
  });
});

// RUN SERVER
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App running on port ${port}`); // eslint-disable-line no-console
});
