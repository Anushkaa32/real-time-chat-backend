const { WebSocketServer } = require("ws");

// Create WebSocket server on port 8080
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
    console.log("✅ WebSocket Client Connected");

    ws.on("message", (message) => {
        console.log(`📩 Received: ${message}`);
        ws.send(`Echo: ${message}`);
    });

    ws.on("close", () => console.log("❌ Client Disconnected"));
});

console.log("✅ WebSocket Server Running on ws://localhost:8080");
