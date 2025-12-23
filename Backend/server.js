const dotenv = require("dotenv");
dotenv.config();

console.log("ENV LOADED"); // 👈 ADD THIS

const connectDB = require("./config/db");
const app = require("./app");

connectDB(); // 👈 must be called

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
