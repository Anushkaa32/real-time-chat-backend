import { Server } from "ws";

export default async ({ strapi }) => {
  console.log("🚀 Starting WebSocket server...");

  const wss = new Server({ server: strapi.server });

  wss.on("connection", (ws) => {
    console.log("✅ Client connected");

    ws.on("message", (message) => {
      console.log(`📩 Received: ${message}`);
      ws.send(`Echo: ${message}`);
    });

    ws.on("close", () => console.log("❌ Client disconnected"));
  });

  strapi.wss = wss;

  console.log(`✅ WebSocket server is running on ${process.env.RENDER_EXTERNAL_URL || "ws://localhost:1337"}`);
};
