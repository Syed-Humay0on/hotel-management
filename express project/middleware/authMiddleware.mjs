import jwt from "jsonwebtoken";
import User from "../models/User.mjs";

// Protect middleware – only used for ADMIN/dashboard APIs
export async function protect(req, res, next) {
  const token = req.cookies?.token;
  console.log("Token received:", token); // <--- add this

  if (!token) {
    // Instead of blocking everything, just return 401 for dashboard/admin routes
    return res.status(401).json({ message: "Not authorized, please log in" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); // <--- add this

    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// RestrictTo – ensures only specific roles can access (like "admin")
export function restrictTo(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Insufficient permissions" });
    }

    next();
  };
}
