module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: ["https://real-time-chat-frontend-five.vercel.app"], // Allow frontend from Vercel
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true, // Allow sending cookies or authentication headers
    },
  },
  {
    name: "strapi::security",
    config: {
      enabled: true,
      directives: {
        "frame-ancestors": ["'self'", "https://real-time-chat-frontend-five.vercel.app"],
      },
    },
  },
  {
    name: "strapi::body",
    config: {
      enabled: true,
      jsonLimit: "5mb",
      formLimit: "5mb",
      textLimit: "5mb",
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
