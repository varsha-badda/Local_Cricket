module.exports = (requiredRole) => {
  return (req, res, next) => {
    console.log("👉 ROLE MIDDLEWARE HIT");
    console.log("👉 REQUIRED ROLE:", requiredRole);
    console.log("👉 USER ROLE:", req.user?.role);

    if (!req.user || req.user.role !== requiredRole) {
      console.log("❌ ROLE MISMATCH");
      return res.status(403).json({ message: "Forbidden" });
    }

    console.log("✅ ROLE OK");
    next();
  };
};
