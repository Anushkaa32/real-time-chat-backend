export default ({ env }) => ({
    auth: {
      secret: env("ADMIN_JWT_SECRET", "your-secret-key"),
    },
    "users-permissions": {
      enabled: true,
      config: {
        register: true,
        jwtSecret: env("JWT_SECRET", "your-jwt-secret-key"),
      },
    },
  });
  