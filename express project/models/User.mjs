import { Schema, model } from 'mongoose';
import { hash } from 'bcryptjs';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'manager', 'receptionist', 'housekeeping'],
    default: 'receptionist'
  },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 10);
  }
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
export default model('User', userSchema);


