import MaintenanceRequest from '../models/MaintenanceRequest.mjs';

// Report maintenance issue
export const reportMaintenance = async (req, res) => {
  try {
    const request = await MaintenanceRequest.create(req.body);
    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all maintenance requests
export const getAllMaintenanceRequests = async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find().populate('room reportedBy');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update maintenance status
export const updateMaintenanceStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const request = await MaintenanceRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ message: 'Request not found' });

    request.status = status;
    if (status === 'resolved') request.resolvedAt = new Date();
    await request.save();
    res.json({ message: 'Status updated', request });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
