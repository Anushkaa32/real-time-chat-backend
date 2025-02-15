const { WebSocketServer } = require("ws");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

// Attach WebSocket server to HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    console.log("✅ WebSocket Client Connected");

    ws.on("message", (message) => {
        console.log(`📩 Received: ${message}`);
        ws.send(`Echo: ${message}`);
    });

    ws.on("close", () => console.log("❌ Client Disconnected"));
});

server.listen(process.env.PORT || 1337, () => {
    console.log(`✅ WebSocket Server Running on port ${process.env.PORT || 1337}`);
});
