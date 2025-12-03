const { config } = require("@medusajs/medusa");

module.exports = {
  ...config,
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    databaseType: "sqlite",
    jwtSecret: process.env.JWT_SECRET || "supersecret",
    cookieSecret: process.env.COOKIE_SECRET || "supersecret",
  },
  plugins: [],
};
