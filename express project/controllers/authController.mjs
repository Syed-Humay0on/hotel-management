import { findOne, create } from '../models/User';
import generateToken from '../utils/generateToken';

// POST /api/auth/register
export async function registerUser(req, res) {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await create({ name, email, password, role });
    sendToken(res, user, 201);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// POST /api/auth/login
export async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    sendToken(res, user, 200);
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

// Cookie + JWT
const sendToken = (res, user, statusCode) => {
  const token = generateToken(user._id);

  res.cookie('token', token, {
    httpOnly: true,
    secure: true, // Set false if testing on localhost (true for HTTPS)
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(statusCode).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
};
