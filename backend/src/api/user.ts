export default {
    routes: [
      {
        method: "GET",
        path: "/users",
        handler: "user.find",
        config: { policies: [], auth: false },
      },
    ],
  };
  