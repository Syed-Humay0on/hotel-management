import Room from '../models/Room.js';

// Create Room
export const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Rooms
export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate('currentGuest');
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Room by ID
export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate('currentGuest');
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Room (info or status)
export const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Book Room (assign guest, mark as occupied)
export const bookRoom = async (req, res) => {
  const { guestId } = req.body;
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    if (room.status !== 'available') {
      return res.status(400).json({ message: 'Room not available for booking' });
    }

    room.status = 'occupied';
    room.isBooked = true;
    room.currentGuest = guestId;
    await room.save();

    res.json({ message: 'Room booked successfully', room });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update Room Status (cleaning, maintenance, etc.)
export const updateRoomStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    room.status = status;
    if (status !== 'occupied') {
      room.isBooked = false;
      room.currentGuest = null;
    }

    await room.save();
    res.json({ message: 'Status updated', room });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
