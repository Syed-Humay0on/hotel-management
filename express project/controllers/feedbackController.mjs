import Feedback from '../models/Feedback.mjs';

export const submitFeedback = async (req, res) => {
  const { rating, comment } = req.body;

  const feedback = await Feedback.create({
    guest: req.user._id,
    rating,
    comment,
  });

  res.status(201).json({ message: 'Feedback submitted', feedback });
};

export const getAllFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find().populate('guest', 'name email');
  res.json(feedbacks);
};
