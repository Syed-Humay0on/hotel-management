import User from "../models/User.mjs";
import generateToken from "../utils/generateToken.mjs";

// POST /api/users
export const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already in use' });

    const user = new User({ name, email, password, role });
    await user.save();

    // Generate JWT token and set cookie
    const token = generateToken(user._id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: true, // Set to false if testing locally
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      message: 'User created successfully',
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
