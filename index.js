const http = require("http");

http.createServer((req, res) => {
    console.log(`Received request for: ${req.url}`);
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
        console.log("Responding with 'Olá Mundo'");
        res.write("<h1>Olá Mundo</h1>");
    }

    res.end();
}).listen(3000, "0.0.0.0", () => {
    console.log("Server listening on port 3000");
});
