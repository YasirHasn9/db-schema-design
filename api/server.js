const express = require("express");
const helmet = require("helmet");
const server = express();

const carsRouter = require("../cars/cars-router");

server.use(express.json());
server.use(helmet());

server.use("/api/cars", carsRouter);
server.use("/", (req, res) => {
  res.json({ message: "Welcome to db schema" });
});
module.exports = server;
