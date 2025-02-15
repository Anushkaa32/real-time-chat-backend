export default {
    routes: [
      {
        method: "POST",
        path: "/auth/local",
        handler: "auth.callback",
        config: {
          policies: [],
          auth: false,  // ✅ Allow public access for login/register
        },
      },
    ],
  };
  