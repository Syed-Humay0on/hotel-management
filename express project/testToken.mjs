import jwt from "jsonwebtoken";

// Paste the token you got from Postman login here
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YWQwN2E2MTM2ZTNmNTc5MDNjMGE3MSIsImlhdCI6MTc1NjE3MjAyOCwiZXhwIjoxNzU2Nzc2ODI4fQ.P_H5IbpJsMo0-Hk66c9U8QoNgnef6E6gTx-g0RVeOoQ";

try {
  const decoded = jwt.verify(token, "supersecret123"); // your JWT_SECRET
  console.log("Valid token:", decoded);
} catch (err) {
  console.error("Token invalid:", err.message);
}

