import Setting from '../models/Setting.mjs';

export const updateSetting = async (req, res) => {
  const { key, value, description } = req.body;

  const setting = await Setting.findOneAndUpdate(
    { key },
    { value, description },
    { upsert: true, new: true }
  );

  res.json({ message: 'Setting saved', setting });
};

export const getAllSettings = async (req, res) => {
  const settings = await Setting.find();
  res.json(settings);
};

export const getSettingByKey = async (req, res) => {
  const { key } = req.params;
  const setting = await Setting.findOne({ key });

  if (!setting) return res.status(404).json({ message: 'Setting not found' });
  res.json(setting);
};
