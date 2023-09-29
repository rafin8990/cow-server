import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema = new Schema<IUser, Record<string, never>>({
  phoneNumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  address: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
  },
  income: {
    type: Number,
  },
})

export const User = model<IUser, UserModel>('User', userSchema)
