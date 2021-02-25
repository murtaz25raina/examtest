var http = require("http");
var b = require("./b");
var fs = require("fs");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World");
    res.write("Whats Up");
    c = b.checkEvenOrOdd(10);
    fs.readFile("textfile.txt", function (err, data) {
      res.write(data);
      res.end("LOL = " + c);
    });

    fs.open("newFile", "w", function (err, data) {
      console.log("File Saved");
    });

    fs.writeFile("newFile", "Hahaha new File", function (err) {
      if (err) throw err;
      console.log("done");
    });

    fs.appendFile(
      "newFile.txt",
      "The tide is high but I'm holding on",
      function (err) {
        if (err) throw err;
        console.log("appended");
      }
    );
    fs.open("fildel.txt", "w", function (err, file) {
      console.log("hi" + file);
    });
    // fs.rename("fildel.txt", "jokes.txt", function (err) {
    //   if (err) throw err;
    //   console.log("renamed");
    // });
    fs.unlink("fildel.txt", function (err) {
      if (err) throw err;
      console.log("delete");
    });
  })
  .listen(8080);
