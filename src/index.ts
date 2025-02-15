import { Server } from "ws";

export default async ({ strapi }) => {
  console.log("🚀 Starting WebSocket server...");

  // Attach WebSocket to Strapi HTTP server
  const wss = new Server({ noServer: true });

  // When Strapi's HTTP server receives an upgrade request (WebSocket handshake)
  strapi.server.on("upgrade", (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit("connection", ws, request);
    });
  });

  wss.on("connection", (ws) => {
    console.log("✅ Client connected");

    ws.on("message", (message) => {
      console.log(`📩 Received: ${message}`);
      ws.send(`Echo: ${message}`);
    });

    ws.on("close", () => console.log("❌ Client disconnected"));
  });

  strapi.wss = wss;

  console.log("✅ WebSocket server is running on ws://localhost:8080");
};
