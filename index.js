const server = require("./api/server");

const port = process.env.NODE_ENV || 4000;

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
