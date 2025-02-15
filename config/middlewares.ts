export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "script-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "https:"],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["*"],  // Or replace "*" with your Vercel frontend URL
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: "*",
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
