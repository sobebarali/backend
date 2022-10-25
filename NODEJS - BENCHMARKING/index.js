const http = require("http");
const fs = require("fs");
const fsPromises = require("fs").promises;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello");
  } else if (req.url === "/textsync") {
    const data = fs.readFileSync("test.txt", {
      encoding: "utf-8",
    });
    res.end(data);
  } else if (req.url === "/textasync") {
    fs.readFile("test.txt", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/textstream") {
    const stream = fs.createReadStream("test.txt");
    stream.pipe(res);
  } else if (req.url === "/textpromise") {
    fsPromises 
      .readFile("test.txt")
      .then(function (result) {
        res.end(result);
      })
      .catch(function (error) {
        throw error;
      });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server is running at port: " + PORT);
});
