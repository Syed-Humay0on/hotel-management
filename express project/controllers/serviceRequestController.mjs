import ServiceRequest from '../models/ServiceRequest.mjs';

export const createServiceRequest = async (req, res) => {
  const { serviceType, details } = req.body;

  const request = await ServiceRequest.create({
    guest: req.user._id,
    serviceType,
    details,
  });

  res.status(201).json({ message: 'Service request submitted', request });
};

export const getAllServiceRequests = async (req, res) => {
  const requests = await ServiceRequest.find().populate('guest', 'name email');
  res.json(requests);
};

export const updateServiceRequestStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const request = await ServiceRequest.findById(id);
  if (!request) return res.status(404).json({ message: 'Request not found' });

  request.status = status;
  await request.save();

  res.json({ message: 'Service request updated', request });
};
