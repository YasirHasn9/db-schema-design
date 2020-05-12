const express = require("express");
const helmet = require("helmet");
const server = express();

server.use(express.json());
server.use(helmet());

server.use((req, res) => {
  res.json({ message: "Welcome to db schema" });
});
module.exports = server;
