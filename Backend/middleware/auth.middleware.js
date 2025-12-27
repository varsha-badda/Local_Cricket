const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken");

module.exports = (req, res, next) => {
  console.log("👉 AUTH MIDDLEWARE HIT");

  const authHeader = req.headers.authorization;
  console.log("👉 AUTH HEADER:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("❌ NO TOKEN");
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ DECODED TOKEN:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.log("❌ TOKEN INVALID");
    return res.status(401).json({ message: "Invalid token" });
  }
};
