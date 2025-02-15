export default ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  url: env("RENDER_EXTERNAL_URL", "https://real-time-chat-backend-jsqv.onrender.com"),
  proxy: true,
});
