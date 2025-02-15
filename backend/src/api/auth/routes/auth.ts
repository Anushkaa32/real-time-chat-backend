export default {
    routes: [
      {
        method: "POST",
        path: "/auth/local",
        handler: "auth.callback",
        config: { policies: [], auth: false },
      },
      {
        method: "POST",
        path: "/auth/local/register",
        handler: "auth.register",
        config: { policies: [], auth: false },
      },
    ],
  };

  