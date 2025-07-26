// POST /api/guests
exports.createGuest = async (req, res) => {
    const { name, email, phone, preferences, address } = req.body;
    try {
      const guest = new Guest({ name, email, phone, preferences, address });
      await guest.save();
      res.status(201).json({ message: 'Guest added', guest });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  