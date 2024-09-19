import { fileURLToPath } from "url";
import path from "path";
import http from "http";
import fs from "fs";

// Define __dirname manually in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Read the index.html file
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        // Respond with HTML content
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  if(req.url=='/api/users'){
    const users=[
        {name:'John Doe',age:40},
        {name:'Bob Smith',age:30}
    ];
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(users));
    
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
