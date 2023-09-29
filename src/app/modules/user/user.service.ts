import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createUser = await User.create(user)
  if (!createUser) {
    throw new ApiError(400, 'failed to create user')
  }
  return createUser
}

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find()
  return result
}
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id)
  return result
}

const updateUser = async (
  id: string,
  payload: Partial<IUser>,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id)
  return result
}

export const userService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
