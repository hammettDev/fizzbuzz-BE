const express = require("express");
const cors = require("cors");
const http = require("http");

const server = express();

server.use(express.json());
server.use(cors());

const PORT = 5000;

// First 100
server.get("/", (req, res) => {
  let i = 1;
  let arr = [];
  while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push({ num: i, class: "fizzbuzz" });
      i++;
    } else if (i % 3 == 0) {
      arr.push({ num: i, class: "fizz" });
      i++;
    } else if (i % 5 == 0) {
      arr.push({ num: i, class: "buzz" });
      i++;
    } else {
      arr.push({ num: i });
      i++;
    }
  }
  res.status(200).json(arr);
});
// Dynamic
server.post("/", (req, res) => {
  const { numOfIterations } = req.body;
  const arr = [];
  let i = 1;

  while (i <= numOfIterations) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push({ num: i, class: "fizzbuzz" });
    } else if (i % 3 == 0) {
      arr.push({ num: i, class: "fizz" });
    } else if (i % 5 == 0) {
      arr.push({ num: i, class: "buzz" });
    } else {
      arr.push({ num: i });
    }
    i++;
  }
  res.status(200).json(arr);
});

// This is done so that the test doesn't take up a port or conflict with the running server
if (!module.parent) {
  server.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));
} else {
  module.exports = http.createServer(server);
}
