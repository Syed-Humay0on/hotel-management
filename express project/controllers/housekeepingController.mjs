import CleaningTask from '../models/CleaningTask.mjs';
import Room from '../models/Room.mjs';

// Create/schedule cleaning task
export const scheduleCleaning = async (req, res) => {
  try {
    const task = await CleaningTask.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all cleaning tasks
export const getAllCleaningTasks = async (req, res) => {
  try {
    const tasks = await CleaningTask.find().populate('room assignedTo');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark task as completed
export const markCleaningCompleted = async (req, res) => {
  try {
    const task = await CleaningTask.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.status = 'completed';
    await task.save();
    res.json({ message: 'Task completed', task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// View room statuses (by housekeeping staff)
export const getRoomStatuses = async (req, res) => {
  try {
    const rooms = await Room.find({}, 'roomNumber status type');
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
