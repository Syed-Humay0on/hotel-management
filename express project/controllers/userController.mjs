
import User from "../models/User.mjs";

// POST /api/users

exports.createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
      const exists = await User.findOne({ email });
      if (exists) return res.status(400).json({ message: 'Email already in use' });
  
      const user = new User({ name, email, password, role });
      await user.save();
      res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  