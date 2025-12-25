const dotenv = require("dotenv");
dotenv.config();

console.log("ENV LOADED"); // 👈 ADD THIS

const connectDB = require("./config/db");
const app = require("./app");

connectDB(); // 👈 must be called



app.listen(4000, () => {
  console.log("Server running");
});
