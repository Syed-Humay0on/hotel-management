import Room from '../models/Room.mjs';
import Guest from '../models/Guest.mjs';
import MaintenanceRequest from '../models/MaintenanceRequest.mjs';
import CleaningTask from '../models/CleaningTask.mjs';

// 🏨 Occupancy Report
export const getOccupancyReport = async (req, res) => {
  try {
    const totalRooms = await Room.countDocuments();
    const occupiedRooms = await Room.countDocuments({ status: 'occupied' });

    const occupancyRate = totalRooms ? (occupiedRooms / totalRooms) * 100 : 0;

    res.json({
      totalRooms,
      occupiedRooms,
      occupancyRate: occupancyRate.toFixed(2) + '%',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 💰 Revenue Report (Dummy: based on room.price * isBooked)
export const getRevenueReport = async (req, res) => {
  try {
    const rooms = await Room.find({ isBooked: true });

    const totalRevenue = rooms.reduce((sum, room) => sum + room.price, 0);

    res.json({
      totalBooked: rooms.length,
      totalRevenue,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🗣 Guest Feedback Summary (Dummy placeholder)
export const getFeedbackSummary = async (req, res) => {
  // Assume future feedback model
  res.json({
    averageRating: 4.5,
    totalReviews: 82,
    comments: ['Clean and comfy', 'Great service', 'Food can improve']
  });
};

// 📈 Analytics: Room Type Popularity
export const getRoomTypeAnalytics = async (req, res) => {
  try {
    const pipeline = [
      { $match: { isBooked: true } },
      { $group: { _id: '$type', count: { $sum: 1 } } },
    ];

    const result = await Room.aggregate(pipeline);

    res.json({ popularityByRoomType: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🧮 Price Optimization (Avg. Price)
export const getAveragePriceByType = async (req, res) => {
  try {
    const pipeline = [
      { $group: { _id: '$type', avgPrice: { $avg: '$price' } } },
    ];
    const result = await Room.aggregate(pipeline);

    res.json({ averagePriceByRoomType: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
