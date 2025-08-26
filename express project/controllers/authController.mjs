import User from "../models/User.mjs";
import generateToken from "../utils/generateToken.mjs";

// POST /api/auth/register
export async function registerUser(req, res) {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ name, email, password, role });
    await user.save();

    const token = generateToken(user._id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// POST /api/auth/login
export async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      // secure: process.env.NODE_ENV === 'production',
      // sameSite: 'strict',
      sameSite: 'lax', // ✅ allow cross-origin dev requests
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// POST /api/auth/logout
export function logoutUser(req, res) {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0),
    secure: true,
    sameSite: 'strict',
  });
  res.status(200).json({ message: 'Logged out' });
}

// GET /api/auth/me
export async function getMe(req, res) {
  try {
    // Check cookie
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Not authenticated" });

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(401).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}

